//GET WINDOW HEIGHT

$(document).ready(function() {

  var windowHeight = $(window).height() - 250;

  $(".heading_block").height(windowHeight);

});

//TIMELINE LOAD

$(document).ready(function(){
    
    TweenMax.from("#down_scroll_wrapper", .75, {opacity: '0', bottom: '100px', ease:Power2.easeInOut, repeat:0, delay:1.25});

  });

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
