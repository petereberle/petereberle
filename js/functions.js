//GET WINDOW HEIGHT

$(document).ready(function() {

  var windowHeight = $(window).height() - 150;

  $(".heading_block").height(windowHeight);

});

//TIMELINE LOAD

$(document).ready(function(){
    
    TweenMax.from("#down_scroll_wrapper", .75, {opacity: '0', bottom: '100px', ease:Power2.easeInOut, repeat:0, delay:1.25});

  });

//TEST - add classes to render

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

      TweenLite.to(sectionTitle, .5, {opacity: '0', marginLeft: "-600px"});

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

    TweenLite.to(sectionTitle, 2, {opacity: '1', marginLeft: "0"});

   $('.title').addClass("proxima");

  }

//Check if window has resized and close open project

$(window).resize(function() {

    closeProject();

    var windowWidth = $(window).width();

    if(windowWidth < 900){

        $('.article').css({'width' : '44%'});
        
      } else {

        $('.article').css({'width' : '31%'});
        
      }

    });

}


//ON SCROLL EVENTS

    $(document).ready(function(){
    
     window.onscroll = function () { resizeHeader(); };

     function resizeHeader (){
     if (document.body.scrollTop > 100 | document.documentElement.scrollTop > 100) {
		    $('.menu_wrapper').addClass('scroll');
       TweenLite.to(".menu_wrapper", .5, {backgroundColor: "#ffffff", boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)"});
       TweenLite.to(".menu_item", .5, {color:"#3b3b43"});
       TweenLite.to("#menu_right", .5, {opacity: "1"});
       TweenLite.to("#down_scroll_wrapper", .5, {opacity: '0'});
     } else { 
        $('.menu_wrapper').removeClass('scroll');
        TweenLite.to(".menu_wrapper", .5, {backgroundColor: "transparent", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"});
        TweenLite.to(".menu_item", .5, {color:"#ffffff"});
        TweenLite.to("#menu_right", .5, {opacity: "0"});
        TweenLite.to("#down_scroll_wrapper", .5, {opacity: '1'});
      }

      }

    });

//ON CLICK OPEN MOBILE

function toggleNav(x) {x.classList.toggle("bartoggle");}
          
    function openNav() {
				var navtl = new TimelineLite();
              	var menu = document.getElementById("mobile_menu_container");
				var menuContainer = document.getElementById("id_dHdHk9F");
				
			
          if (menu.style.marginLeft < "200%") {

			//HIDE STICKY BAR
			  $("#sticky_bar").addClass("remove_bar");

			//LOCK BODY SCROLL
				$("body").addClass("content_locked");

              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "200%";
			  navtl.staggerTo("#mobile_menu_container", .5, {opacity: '1', delay:.5}, 0.05);
			  navtl.staggerTo("#mobile_menu_cutaway", .5, {opacity: '1', delay:.5}, 0.05);

          } else {

			//REMOVE BODY SCROLL LOCK
				$("body").removeClass("content_locked");

              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "0%";
			  navtl.staggerTo("#mobile_menu_container", .5, {opacity: '0', delay:.5}, 0.05);
			  navtl.staggerTo("#mobile_menu_cutaway", .5, {opacity: '0', delay:.5}, 0.05);

			//SHOW STICKY BAR
				$("#sticky_bar").removeClass("remove_bar");

              }
          }  

//REMOVE HOME BUTTON

  $(document).ready( function () {

function clearFirst () {

	var itemContainer = $(".firstLevel");
	//var linkChild = itemContainer.getElementsByTagName('li');

	itemContainer.attr('id', 'first_item');

}

document.onload = clearFirst();

	 var firstItem = $("#first_item");

	 firstItem.children(":first").attr('id', 'firstMenu');

  });

    //QUICKLINK MENU 

    $(document).ready(function()  {
    //HOVER REMOVE BORDER
    $('.quick_link').hover(function() {
    $(this).siblings().addClass('border_remove');
      }, function() {
    //LEAVE HOVER ADD BORDER
      $(this).siblings().removeClass('border_remove');
  });

});


  //Contact Form

  function removeProp() {

    $("#senderName").attr('placeholder','');

    $("#senderAddress").attr('placeholder','');

    $("#senderMessage").attr('placeholder','');

  }

    function sendEmail() {

  var name = document.getElementById("senderName").value;
  var senderEmail = document.getElementById("senderAddress").value;
  var senderMessage = document.getElementById("senderMessage").value;
  var tlx = new TimelineLite();
  var tly = new TimelineLite();

  if (name.length == 0 | senderEmail.length == 0){
  
    tlx.staggerTo("#error_message", .5, {display: 'block', opacity: '1', delay:.5}, 0.05);
  
  }else{

  $('#error_message').css({'display' : 'none'});
  document.getElementById("senderName").value = '';
  document.getElementById("senderAddress").value = '';
  document.getElementById("senderMessage").value = '';

  Email.send({
  SecureToken : 'f1d7043d-561b-44f7-9bf2-532005760262',
  To : 'peteaeberle@gmail.com',
  From : 'peteaeberle@gmail.com',
  Subject : 'Contact Form | peteeberle.com',
  Body : 'Name:' + ' ' + name + '<html><br></html>' + 'Email:' + ' ' + senderEmail + '<html><br></html>' + 'Message:' + ' ' + senderMessage,
  }).then(
    tly.staggerTo("#success_message", .5, {display: 'block', opacity: '1', delay:.5}, 0.05)
  );

  }
}
