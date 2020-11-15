//GET WINDOW HEIGHT

$(document).ready(function() {

  var windowHeight = $(window).height() - 150;

  $(".heading_block").height(windowHeight);

});

//TIMELINE LOAD

$(document).ready(function(){

    TweenMax.from("#down_scroll_wrapper", .75, {autoAlpha: '0', marginTop: '-20px', ease:Power2.easeInOut, repeat:0, delay:1.25});

  });

//ON SCROLL EVENTS

$(document).ready(function(){
    
     window.onscroll = function () { resizeHeader(); };

     function resizeHeader (){
     if (document.body.scrollTop > 100 | document.documentElement.scrollTop > 100) {
		    $('.menu_wrapper').addClass('scroll');
       TweenLite.to(".menu_wrapper", .5, {backgroundColor: "#ffffff", boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)"});
       TweenLite.to(".menu_item", .5, {color:"#3b3b43"});
       TweenLite.to("#menu_right", .5, {autoAlpha: "1"});
       TweenLite.to("#down_scroll_wrapper", .5, {autoAlpha: '0'});
     } else { 
        $('.menu_wrapper').removeClass('scroll');
        TweenLite.to(".menu_wrapper", .5, {backgroundColor: "transparent", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"});
        TweenLite.to(".menu_item", .5, {color:"#ffffff"});
        TweenLite.to("#menu_right", .5, {autoAlpha: "0"});
        TweenLite.to("#down_scroll_wrapper", .5, {autoAlpha: '1'});
      }

      }

    });

//Contact Form

function removeProp() {

    $("#senderName").attr('placeholder','');

    $("#senderAddress").attr('placeholder','');

    $("#senderMessage").attr('placeholder','');

  }

var submitted = false;

$(document).ready(function(){
  $('#contact_form').on("submit", function () {

    var name = $('#entry\\.1779284427').val();
        console.log(name);
    var senderEmail = $('#entry\\.433919051').val();
    var senderMessage = $('#entry\\.242520132').val();
    var tlx = new TimelineLite();
    var tly = new TimelineLite();

  if (name.length == 0 | senderEmail.length == 0){
  
    tlx.staggerTo("#error_message", .5, {display: 'block', autoAlpha: '1', delay:.5}, 0.05);
  
  }else{

    $('#error_message').css({'display' : 'none'});
    $('#entry\\.1779284427').value = '';
    $('#entry\\.433919051').value = '';
    $('#entry\\.242520132').value = '';

  tly.staggerTo("#success_message", .5, {display: 'block', autoAlpha: '1', delay:.5}, 0.05);

  TweenLite.to("#contact_form", .5, {autoAlpha: '0', height: '0', marginRight: '-1000px'});


  }

  });
});


$(window).scroll(function (){

var matchScroll = document.documentElement.scrollTop*1.2;

$('#sketch-div').css({'right' : matchScroll, 'left' : 'auto'});

});
