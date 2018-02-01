var flag = false;
var pageLink = $('.main-header__menu a');

$(document).ready(function(){
  $('.main').load('overview.html');
})

function init(){
  var mySwiper = new Swiper('.swiper-container', {
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  $('.swiper-slide-active .effect').addClass('is-active');
  mySwiper.on('transitionEnd', function () {
    $('.swiper-slide-active .effect').addClass('is-active');
    $('.swiper-slide-prev .effect, .swiper-slide-next .effect').removeClass('is-active');
  });
}

pageLink.click(function(){
  flag = true;
  $(pageLink).removeClass('is-active');
  $(this).addClass('is-active');
  var currentSection = $(this).data('section'),
  currentURL = currentSection + '.html';
  $('.main').load(currentURL);
});

$( document ).ajaxStart(function() {
  if (flag == true) {
  }
});

$(document).ajaxComplete(function () {
  init();
});