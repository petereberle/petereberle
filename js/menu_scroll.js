var scrolltoSection = function scrolltoSection(element) {
  $(window).scrollTo(document.querySelector(element), 1500, {
    easing: 'easeInOutQuint'
  });
};