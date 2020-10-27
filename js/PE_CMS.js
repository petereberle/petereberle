// Peter Eberle 2020
// Description: CMS fetches a markdown file, parses and renders it. <div class="article">
// elements in the markdown file provide purchase for simple jQuery to traverse the rendered tree and
// and seed classes. Greensocks tweens perform the heavy lifting in the UI. Rebuilds on screen resize
// for mobile responsiveness.

//Get markdown file

(function () {
  var file = file || "projects.md";
  var reader = new stmd.DocParser();
  var writer = new stmd.HtmlRenderer();
  var project_file = new XMLHttpRequest();
  project_file.onreadystatechange = function () {
    if(project_file.readyState === 4 && project_file.status === 200) {
      display(project_file);
    }
  };

//Render inside "#projects"

  function display(project_file) {
    var parsed = reader.parse(project_file.responseText);
    var content = writer.renderBlock(parsed);
    document.getElementById('projects').innerHTML = content;
    
//Add classes to rendered tree

  $(document).ready(function(){

  $('.article').children(":first-child").addClass("title proxima");
  $('.article').find("ul:first").addClass("main");
  $('.main').children(":first-child").addClass("first");
  $('.first').next().addClass("description");
  $('.first').find("img").addClass("card");
  $('.article').children().not(".main, .title, .proxima, h2").addClass("images");
  $('.images > li').addClass("alt");
  $('.article').children("h2").addClass("tag");

//Project filters

var tagArray = [];
console.log(tagArray);

$('.tag').each(function(){

   var value = $(this).html();

   console.log(value);

   $(this).parent('.article').addClass(value);

    tagArray.push(value.split(' ')[0]);

});

//Remove duplicate tags from array

var uniqueTag = [...new Set(tagArray)];

console.log(uniqueTag);

//Create filter btns from array
    for (var i=0; i < uniqueTag.length; i++) {
      document.getElementById("filters").innerHTML += "<div id='" + uniqueTag[i] + "' class='filter'>" + uniqueTag[i] + "</div>"
    }

    $('#filters div:last').addClass("last");

//Filter on click

$('.filter').click(function(){ 

  var tagName = $(this).prop('id');

  console.log(tagName);

  closeProject();

  $('.article').each(function(index, element){

  var selected = $(this).hasClass(tagName);

  if (selected){

    $(this).addClass("filtered");

    $('.filtered').attr('data-content', tagName);

    $('.article').not('.'+tagName).removeClass("filtered");

  }

  });

});


//Rebuild & animate render zone on project click

  $('.article').click(function(){

      //Scroll to
      $(window).scrollTo(document.getElementById("project"), 1500, {easing: 'easeInOutQuart'});
      //Add active Class
      $(this).addClass("active");
      //If not clicked, remove active class
      $('.article').not(this).removeClass("active");

      $('#projects').css({'display' : 'block'});
      
    var sectionTitle = $('#section_menu').children(":first-child");

      TweenLite.to(sectionTitle, .5, {autoAlpha: '0', marginLeft: "-600px", height: "0", position: "absolute"});

      $('.title').removeClass("proxima");

    if( $('.article').hasClass("active") ) {

      projectAnim();

      $(this).siblings('.article').css({'display' : 'none'});

      $(this).css({'display' : 'block'});

    }

  });

});


function projectAnim(){

var title = $('.active').find(".title");
var windowWidth = $(window).width();

      if(windowWidth < 900){
        TweenLite.fromTo('.active', .5, {width:"44%"}, {width:"100%"});
      } else {
        TweenLite.fromTo('.active', .5, {width:"31;%"}, {width:"100%"});
      }

  TweenLite.fromTo('#close', .2, {visibility:"hidden", autoAlpha:"0", marginTop: "0"}, {visibility:"visible", autoAlpha:"1", marginTop: "20px"});

  // On click close

$('#close').click( function () {
  closeProject();

  if(windowWidth < 900){

        $('.article').css({'width' : '44%'});
        
      } else {

        $('.article').css({'width' : '31%'});
        
    }

  });

}


function closeProject (){

  //Tween Close
  var windowWidth = $(window).width();
  
  if(windowWidth < 900){
    TweenLite.fromTo('.active', .5, {width:"100%"}, {width:"44%"});
  } else {
    TweenLite.fromTo('.active', .5, {width:"100%"}, {width:"31%"});
  }

    TweenLite.fromTo('#close', .2, {visibility:"visible", autoAlpha:"1", marginTop: "20"}, {visibility:"hidden", autoAlpha:"0", marginTop: "0"});

  //Reconstruct Styles

   $('.article').removeClass("active");

   $('.article').css({'display' : 'flex'});

   $('#projects').css({'display' : 'flex'});

   var sectionTitle = $('#section_menu').children(":first-child");

    TweenLite.to(sectionTitle, 1, {autoAlpha: '1', marginLeft: "0", height: "unset", position: "relative"});

   $('.title').addClass("proxima");

  }

//Check if window has resized and close open project

var cachedWidth = $(window).width();
    $(window).resize(function(){
        var newWidth = $(window).width();
        if(newWidth !== cachedWidth){  

          closeProject();

          var windowWidth = $(window).width();

          if(windowWidth < 900){

             $('.article').css({'width' : '44%'});
        
          } else {

             $('.article').css({'width' : '31%'});
        
          }

    cachedWidth = newWidth;
    }
});

//End render rebuild

  }

  project_file.open('GET', file);
  project_file.send();
})();
