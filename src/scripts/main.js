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

  $(document).on( "click", function() {
    if ($('body').hasClass('is-right')) {
      mySwiper.slideNext();
    }

    if ($('body').hasClass('is-left')) {
      mySwiper.slidePrev();
    }
  })
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


var windowTop = 58;
var windowBottom = $(window).height() - 58;
var windowWidth = $(window).width();
var windowHalf = windowWidth / 2;

$(document).mousemove(function( event ) {
  var mouseX = event.pageX;
  var mouseY = event.pageY;
  if (mouseX < windowHalf && mouseY > windowTop && mouseY < windowBottom) {
    $('body').addClass('is-left');
    $('body').removeClass('is-right');
  } else {
    $('body').removeClass('is-left');
  }

  if (mouseX > windowHalf && mouseY > windowTop && mouseY < windowBottom) {
    $('body').addClass('is-right');
    $('body').removeClass('is-left');
  } else {
   $('body').removeClass('is-right');
  }
});