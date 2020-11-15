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
function testFirstCookie(){
	var visit=GetCookie("FirstTimeVisitCookie");
	if (visit==null){
	   var expire=new Date();
	   expire=new Date(expire.getTime()+7776000000);
	   document.cookie="FirstTimeVisitCookie=here; expires="+expire + ";path=/";
	   document.getElementById("firstVisit").innerHTML = "Welcome! You are here for the first time!";	// New visitor
   } else {
	   document.getElementById("firstVisit").innerHTML = "Welcome back!";	// Returning visitor
   }
}
$(document).ready(function(){
	testFirstCookie();
});