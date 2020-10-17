//FADE OUT ON LINK CLICK

jQuery(document).on("click", "a", function () {

    // get the href attribute
    var newUrl = jQuery(this).attr("href");

    // verify if the new url exists or is a hash
    if ((!newUrl || newUrl[0] === "#") && newUrl != "javascript:void(0);") {
        // set that hash
        location.hash = newUrl;
        return;
    }

	if (newUrl != "javascript:void(0);"){
    // now, fadeout the html (whole page)
    jQuery("html").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });
	
	}
    // prevent the default browser behavior.
    return false;
});

//ON SCROLL EVENTS

    jQuery(document).ready(function(){
    
     window.onscroll = function () { resizeHeader(); };

    //var logoImg = document.getElementById("logo_img");
    //var logoCont = document.getElementById("main_logo");
    //var barCont = document.getElementById("sticky_bar");

     function resizeHeader (){
     if (document.body.scrollTop > 100 | document.documentElement.scrollTop > 100) {
        jQuery('#logo_img').css({'width' : '100%', 'height' : '100%'});
        jQuery('#main_logo').addClass('small_logo');
        jQuery('#sticky_bar').addClass('reduced');
        jQuery('#menu_inner_container').find('a').addClass('reduced');
		jQuery('#overlay_wrapper').css({'display' : 'none'});
		jQuery('#main_menu').addClass('marginReduced');
     } else { 
         jQuery('#logo_img').css({'width' : '170px', 'height' : '170px'});
         jQuery('#main_logo').removeClass('small_logo');
         jQuery('#sticky_bar').removeClass('reduced');
         jQuery('#menu_inner_container').find('a').removeClass('reduced');
		 jQuery('#main_menu').removeClass('marginReduced');
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
			  jQuery("#sticky_bar").addClass("remove_bar");

			//LOCK BODY SCROLL
				jQuery("body").addClass("content_locked");

              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "200%";
			  navtl.staggerTo("#mobile_menu_container", .5, {opacity: '1', delay:.5}, 0.05);
			  navtl.staggerTo("#mobile_menu_cutaway", .5, {opacity: '1', delay:.5}, 0.05);

          } else {

			//REMOVE BODY SCROLL LOCK
				jQuery("body").removeClass("content_locked");

              menu.style.display = "block";
              menu.style.width = "100%";
              menu.style.marginLeft = "0%";
			  navtl.staggerTo("#mobile_menu_container", .5, {opacity: '0', delay:.5}, 0.05);
			  navtl.staggerTo("#mobile_menu_cutaway", .5, {opacity: '0', delay:.5}, 0.05);

			//SHOW STICKY BAR
				jQuery("#sticky_bar").removeClass("remove_bar");

              }
          }  

//SEARCH POPUP

//CHANGE WA SEARCH PLACEHOLDER

jQuery(document).ready(function(){

	jQuery('#idid_t9YUzjq_searchBox').attr('placeholder', 'Search ArtWalla');

});

//REMOVE HOME BUTTON

  jQuery(document).ready( function () {

function clearFirst () {

	var itemContainer = jQuery(".firstLevel");
	//var linkChild = itemContainer.getElementsByTagName('li');

	itemContainer.attr('id', 'first_item');

}

document.onload = clearFirst();

	 var firstItem = jQuery("#first_item");

	 firstItem.children(":first").attr('id', 'firstMenu');

  });

    //QUICKLINK MENU 

    jQuery(document).ready(function()  {
    //HOVER REMOVE BORDER
    jQuery('.quick_link').hover(function() {
    jQuery(this).siblings().addClass('border_remove');
      }, function() {
    //LEAVE HOVER ADD BORDER
      jQuery(this).siblings().removeClass('border_remove');
  });

});

  //REVEAL SEARCH BAR

    jQuery(document).ready(function () {
      jQuery("#search_link").toggle(function(){

        jQuery("#search_bar_container").addClass('show_search');

      }, function(){

        jQuery("#search_bar_container").removeClass('show_search');

      }
      );
  });

  //OPEN SEARCH POPUP

    var searchtl = new TimelineLite();
    var searchContainer = document.getElementById("search_popup_container");

document.querySelectorAll('.menu_search').forEach(item => {
  item.addEventListener('click', event => {
      
          if (searchContainer.style.marginRight < "0%") {

              searchContainer.style.width = "100%";
              searchtl.staggerTo("#search_popup_container", .5, {marginRight: '0%', opacity: '1', delay:.5}, 0.05);

              jQuery("body").addClass('search_locked');
          }

      })
}) 
  //CLOSE SEARCH POPUP

  function closeSearch(){

    if (searchContainer.style.marginRight > "-100%") {

    searchtl.staggerTo("#search_popup_container", .5, {marginRight: '-100%', opacity: '0', delay:.5}, 0.05);

    jQuery("body").removeClass('search_locked');
   
    }
  }

  //EMAIL FORM SUBMISSION FOOTER

  function removeProp() {

    jQuery("#senderName").attr('placeholder','');

    jQuery("#senderAddress").attr('placeholder','');

  }

    function sendEmail() {

  var name = document.getElementById("senderName").value;
  var senderEmail = document.getElementById("senderAddress").value;
  var tlx = new TimelineLite();
  var tly = new TimelineLite();

  if (name.length == 0 | senderEmail.length == 0){
  
    tlx.staggerTo("#error_message", .5, {display: 'block', opacity: '1', delay:.5}, 0.05);
  
  }else{

  jQuery('#error_message').css({'display' : 'none'});
  document.getElementById("senderName").value = '';
  document.getElementById("senderAddress").value = '';

  Email.send({
  SecureToken : 'd8858bda-a023-4dd5-bc00-2d4d67f9e7f0',
  To : 'webmaster@artwalla.com',
  From : 'webmaster@artwalla.com',
  Subject : 'Newsletter Join Request',
  Body : 'Name:' + ' ' + name + '<html><br></html>' + 'Email:' + ' ' + senderEmail,
  }).then(
    tly.staggerTo("#success_message", .5, {display: 'block', opacity: '1', delay:.5}, 0.05)
  );

  }
}

//EMAIL FORM SUBMISSION NEWSLETTER PAGE

  function removeProp() {

    jQuery("#senderNamePage").attr('placeholder','');

    jQuery("#senderAddresPage").attr('placeholder','');

  }

    function sendEmail() {

  var name = document.getElementById("senderNamePage").value;
  var senderEmail = document.getElementById("senderAddressPage").value;
  var tlx = new TimelineLite();
  var tly = new TimelineLite();

  if (name.length == 0 | senderEmail.length == 0){
  
    tlx.staggerTo("#error_message_page", .5, {display: 'block', opacity: '1', delay:.5}, 0.05);
  
  }else{

  jQuery('#error_message_page').css({'display' : 'none'});
  document.getElementById("senderNamePage").value = '';
  document.getElementById("senderAddressPage").value = '';

  Email.send({
  SecureToken : 'd8858bda-a023-4dd5-bc00-2d4d67f9e7f0',
  To : 'webmaster@artwalla.com',
  From : 'webmaster@artwalla.com',
  Subject : 'Newsletter Join Request',
  Body : 'Name:' + ' ' + name + '<html><br></html>' + 'Email:' + ' ' + senderEmail,
  }).then(
    tly.staggerTo("#success_message_page", .5, {display: 'block', opacity: '1', delay:.5}, 0.05)
  );

  }
}
