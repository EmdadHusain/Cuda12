$(document).ready(function () {
  $('.main-menu').meanmenu({
    meanMenuContainer: '#mobile-menu',
    meanScreenWidth: 767,
  });
  $('.portfolio-titles li').click(function () {
    var selector = $(this).attr('data-filter');
    $('.portfolio-lists').isotope({
      filter: selector,
    });
  });
  $('.portfolio-titles li').click(function () {
    $('.portfolio-titles li').removeClass('active');
    $(this).addClass('active');
  });

  $(function () {
    $('.counter-number span').rCounter({
      duration: 60,
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
      $(".top-header").addClass("sticky");
     $(".scroll_icon").css('display','block');
    } else {
      $(".top-header").removeClass("sticky");
      $('.scroll_icon').css('display', 'none');
    }
  });

  $("#scrollTop").on('click',function(){
      $("html,body").animate({
        scrollTop:0
      },400);
  })
  
})





