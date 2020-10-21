//Get markdown file

(function () {
  var file = file || "projects.md";
  var reader = new stmd.DocParser();
  var writer = new stmd.HtmlRenderer();
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      display(xhr);
    }
  };

//Render inside ".content"

  function display(xhr) {
    var parsed = reader.parse(xhr.responseText);
    var content = writer.renderBlock(parsed);
    document.getElementById('projects').innerHTML = content;
    
//Add classes to rendered tree

  $(document).ready(function(){

  $('.article').children(":first-child").addClass("title proxima");
  $('.article').find("ul:first").addClass("main");
  $('.main').children(":first-child").addClass("first");
  $('.first').next().addClass("description");
  $('.first').find("img").addClass("card");
  $('.article').children().not(".main, .title, .proxima").addClass("images");
  $('.images').children("li").addClass("alt");


    $('.article').click(function(){

      $(this).addClass("active");

      $('.article').not(this).removeClass("active");

      $('#projects').css({'display' : 'block'});
      
      var sectionTitle = $('#project').children(":first-child");

      TweenLite.to(sectionTitle, .5, {opacity: '0', marginLeft: "-600px", height: "0"});

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

  TweenLite.fromTo('#close', .2, {visibility:"hidden", opacity:"0"}, {visibility:"visible", opacity:"1"});

// On click close

$('#close').click( function () {
  closeProject()

  if(windowWidth < 900){

        $('.article').css({'width' : '44%'});
        
      } else {

        $('.article').css({'width' : '31%'});
        
    }

  });

function closeProject (){

  //Tween Close
  var windowWidth = $(window).width();
  
  if(windowWidth < 900){
    TweenLite.fromTo('.active', .5, {width:"100%"}, {width:"44%"});
  } else {
    TweenLite.fromTo('.active', .5, {width:"100%"}, {width:"31%"});
  }

    TweenLite.fromTo('#close', .2, {visibility:"visible", opacity:"1"}, {visibility:"hidden", opacity:"0"});

  //Reconstruct Styles

   $('.article').removeClass("active");

   $('.article').css({'display' : 'flex'});

   $('#projects').css({'display' : 'flex'});

   var sectionTitle = $('#project').children(":first-child");

    TweenLite.to(sectionTitle, 2, {opacity: '1', marginLeft: "0", height: "unset"});

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

}

  }

  xhr.open('GET', file);
  xhr.send();
})();
