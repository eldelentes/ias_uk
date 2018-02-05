'use strict';

var flag = false;
var pageLink = $('.main-header__menu a');
var counter = 0;
var mySwiper;
var slides;

$(document).ready(function () {
  $('.main').load('overview.html');
});

function playChart() {
  if ($('.swiper-slide-active .chart').length > 0) {
    var chart = $('.swiper-slide-active .chart')[0];
    chart.play();
  }
};

function init() {
  mySwiper = new Swiper('.swiper-container', {
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  });

  $('.swiper-slide-active .effect').addClass('is-active');
  mySwiper.on('transitionEnd', function () {
    $('.swiper-slide-active .effect').addClass('is-active');
    playChart();
  });

  slides = $('.swiper-slide').length - 1;
}

$(document).on("click", function () {
  if ($('body').hasClass('is-right')) {
    mySwiper.slideNext();
    counter++;
  }

  if ($('body').hasClass('is-left')) {
    mySwiper.slidePrev();
    counter--;
  }
  nextPage();
  prevPage();
});

function nextPage(index) {
  if (counter > slides) {
    loadPage();
    counter = 0;
  }
}

function prevPage(index) {

  if (counter < 0) {
    returnPage();
  }
}


function loadPage() {
  var nextSection = $('.page').data('section') + 1;
  if (nextSection == 2) {$('.main').load('challenges.html'); }
  if (nextSection == 3) {$('.main').load('transparency.html'); }
  if (nextSection == 4) {$('.main').load('transacting.html'); }
  if (nextSection == 5) {$('.main').load('future.html'); }
  if (nextSection == 6) {$('.main').load('about.html'); }

  $(pageLink).removeClass('is-active');
  $('.main-header a[id="' + nextSection + '"]').addClass('is-active');
}

function returnPage() {
  var currentSection = $('.page').data('section');
  if (currentSection == 2) { $('.main').load('overview.html'); }
  if (currentSection == 3) { $('.main').load('challenges.html'); }
  if (currentSection == 4) { $('.main').load('transparency.html'); }
  if (currentSection == 5) { $('.main').load('transacting.html'); }
  if (currentSection == 6) { $('.main').load('future.html'); }

  $(pageLink).removeClass('is-active');
}

pageLink.click(function () {
  flag = true;
  $(pageLink).removeClass('is-active');
  $(this).addClass('is-active');
  var currentSection = $(this).data('section'),
      currentURL = currentSection + '.html';
  $('.main').load(currentURL);
});

$(document).ajaxStart(function () {
  if (flag == true) {
    mySwiper.destroy();
  }
});

$(document).ajaxComplete(function () {
  init();
  playChart();
  mySwiper.update();
});


// Mouse Arrow

var windowTop = 58;
var windowBottom = $(window).height() - 58;
var windowWidth = $(window).width();
var windowHalf = windowWidth / 2;

$(document).mousemove(function (event) {
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