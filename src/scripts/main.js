'use strict';

var pageLink = $('.main-header__menu a');
var mySwiper;
var slides;
var color;
window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());

var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);


function playChart() {
  if ($('.swiper-slide-active .chart').length > 0) {
    var chart = $('.swiper-slide-active .chart')[0];
    chart.pause();
    chart.currentTime = 0;
    chart.play();
  }

  if ($('.swiper-slide-active .gif').length > 0) {
    var gif = $('.swiper-slide-active .gif');
    var src = gif.attr('src');
    console.log(src);
    gif.attr('src', src);
  }
};

function init() {
  $('.swiper-slide-active .effect').addClass('is-active');
  color = $('.swiper-slide-active').data('section');

  mySwiper.on('transitionEnd', function () {
    color = $('.swiper-slide-active').data('section');

    $('.swiper-slide .effect').removeClass('is-active');
    $('.swiper-slide-active .effect').addClass('is-active');
    $('.main').attr('class', 'main');
    $('.main').addClass(color);
    pageLink.removeClass('is-active');
    $('.main-header__menu a[data-section="' + color +  '"]').addClass('is-active');
    playChart();

    $('.background-video video').hide();
    $('.background-video video[data-video="' + color + '"]').show();
  });

  $('.main').addClass(color);
  $('.background-video video[data-video="' + color + '"]').show();

  $('.main-header__menu a[data-section="' + color +  '"]').addClass('is-active');
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
  minFont : 14,
  maxFont : 52
});

$('.toggle').click(function(e){
  e.preventDefault;
  $('.main-header__menu').addClass('is-responsive');
  $('.close-menu').addClass('is-active');
})

pageLink.click(function(e){
  $('.main-header__menu').removeClass('is-responsive');
  $('.close-menu').removeClass('is-active');
})

$('.close-menu').click(function(e){
  e.preventDefault;
  $('.main-header__menu').removeClass('is-responsive');
  $(this).removeClass('is-active');
})

var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if (isSafari || iOSSafari) {
  document.getElementsByTagName("BODY")[0].className += "safari";
}

if (isFirefox) {
  document.getElementsByTagName("BODY")[0].className += "firefox";
}

pageLink.click(function(){
  var slide = $(this).data('slide');
  mySwiper.slideTo(slide);
})

// $('.main-header__brand').click(function(){
//   mySwiper.slideTo(0);
// })


mySwiper = new Swiper('.swiper-container', {
  speed: 600,
  allowTouchMove: false,
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

/mobile/i.test(navigator.userAgent) && !window.location.hash && setTimeout(function () {
  window.scrollTo(0, 1);
}, 500);