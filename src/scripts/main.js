var flag = false;
var pageLink = $('.main-header__menu a');

$(document).ready(function(){
  $('.main').load('overview.html');
})

function init(){
  $('#fullpage').fullpage({
    verticalCentered: false,
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      $('.effect').addClass('is-active');
    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);
      $('.effect').removeClass('is-active');
    }
  });
}

pageLink.click(function(){
  flag = true;
  $(pageLink).removeClass('is-active');
  $(this).addClass('is-active');
  var currentSection = $(this).data('section'),
  currentURL = currentSection + '.html';
  $('.main').load(currentURL);
  console.log(flag);
});

$( document ).ajaxStart(function() {
  if (flag == true) {
    $.fn.fullpage.destroy('all');
  }
});

$(document).ajaxComplete(function () {
  init();
});