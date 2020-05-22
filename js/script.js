
$(document).ready(function() {
  var fixedMenu = $('header');
  var heightSectionHome = $('section.home').height();
  var fixedMenuOffset = heightSectionHome + fixedMenu.height();

  checkMenuOffset(fixedMenuOffset);
  $(window).scroll(function () {
    checkMenuOffset(fixedMenuOffset);
  })

  $("body").on('click', '[href*="#"]', function(e){
    var fixedOffset = 100;

    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset}, 1000);
    e.preventDefault();
  });

  $(document).on('click', '.toggle-menu', function(){
    $(this).toggleClass('on');
    $('.header-menu').slideToggle();
    return false;
  });
})


function checkMenuOffset(offset) {
  var fixedMenu = $('header');

  if ($(window).scrollTop() > offset) {    
    fixedMenu.addClass('fixed');
  } else {
    fixedMenu.removeClass('fixed');
  }
}