function GetCookie(name) {
  var arg=name+"=";
  var alen=arg.length;
  var clen=document.cookie.length;
  var i=0;
  while (i<clen) {
	var j=i+alen;
	if (document.cookie.substring(i,j)==arg)
	  return "here";
	i=document.cookie.indexOf(" ",i)+1;
	if (i==0) break;
  }
  return null;
}
function visitCookie(){
	var visit=GetCookie("FirstTimeVisitCookie");
	if (visit==null){
	   var expire=new Date();
	   expire=new Date(expire.getTime()+7776000000);
	   document.cookie="FirstTimeVisitCookie=here; expires="+expire + ";path=/";
	  
	   $('body').addClass("content_locked");
	   $('#intro_heading').addClass("loading");


	   setTimeout( function() {

	   	let tl = new TimelineLite();

	   	tl.to('#page_load_wrapper', 1, {autoAlpha: '0'})
	   	.to('#page_load_wrapper', .1, {display: 'none'});

	   	TweenMax.from("#down_scroll_wrapper", .75, {autoAlpha: '0', marginTop: '-20px', ease:Power2.easeInOut, repeat:0, delay:1.25});

	   	$('body').removeClass("content_locked");
	   	$('#intro_heading').removeClass("loading");

	   	}, 3000);

   } else {

   		$('#page_load_wrapper').css({'background' : 'unset', 'position' : 'unset', 'width' : '0', 'height' : '0', 'display' : 'none'});

   }
}
$(document).ready(function(){
	visitCookie();
});