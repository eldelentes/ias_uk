'use strict';

var pageLink = $('.main-header__menu a');
var mySwiper;
var slides;
var color;
window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());


function playChart() {
  if ($('.swiper-slide-active .chart').length > 0) {
    var chart = $('.swiper-slide-active .chart')[0];
    chart.play();
  }
};

function init() {
  $('.swiper-slide-active .effect').addClass('is-active');
  color = $('.swiper-slide-active').data('section');

  mySwiper.on('transitionEnd', function () {
    color = $('.swiper-slide-active').data('section');

    $('.swiper-slide .effect').removeClass('is-active');
    $('.swiper-slide-active .effect').addClass('is-active');
    $('body').attr('class', '');
    $('body').addClass(color);
    pageLink.removeClass('is-active');
    $('.main-header__menu a[data-section="' + color +  '"]').addClass('is-active');
    playChart();
  });

  $('body').addClass(color);

  $('.main-header__menu a[data-section="' + color +  '"]').addClass('is-active');

  // slides = $('.swiper-slide').length - 1;
}


if (!isMobile) {
  $(document).on("click", function () {

    if ($('.content').hasClass('is-right')) {
      mySwiper.slideNext();
    }

    if ($('.content').hasClass('is-left')) {
      mySwiper.slidePrev();
    }
  });
}
// Mouse Arrow

var windowTop = 58;
var windowBottom = $(window).height() - 58;
var windowWidth = $(window).width();70
var windowHalf = windowWidth / 2;

$(document).mousemove(function (event) {
  var mouseX = event.pageX;
  var mouseY = event.pageY;
  if (mouseX < windowHalf && mouseY > windowTop && mouseY < windowBottom) {
    $('.content').addClass('is-left');
    $('.content').removeClass('is-right');
  } else {
    $('.content').removeClass('is-left');
  }

  if (mouseX > windowHalf && mouseY > windowTop && mouseY < windowBottom) {
    $('.content').addClass('is-right');
    $('.content').removeClass('is-left');
  } else {
    $('.content').removeClass('is-right');
  }
});


$('body').flowtype({
  fontRatio : 100,
  minFont : 12,
  maxFont : 52
});

$('.toggle').click(function(e){
  e.preventDefault;
  $('.main-header__menu').addClass('is-responsive');
  $('.close-menu').addClass('is-active');
})

pageLink.click(function(e){
  console.log("log");
  $('.main-header__menu').removeClass('is-responsive');
  $('.close-menu').removeClass('is-active');
})

$('.close-menu').click(function(e){
  e.preventDefault;
  $('.main-header__menu').removeClass('is-responsive');
  $(this).removeClass('is-active');
})

if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
   document.getElementsByTagName("BODY")[0].className += " safari";
}

pageLink.click(function(){
  var slide = $(this).data('slide');
  mySwiper.slideTo(slide);
})


mySwiper = new Swiper('.swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

init();