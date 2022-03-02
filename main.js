$(document).ready(function () {
  $('.main-menu').meanmenu({
    meanMenuContainer: '#mobile-menu',
    meanScreenWidth:767,
  });
  $(".portfollio-titles li").click(function(){
    var selector= $(this).attr('data-filter');
    $('.portfollio-lists').isotope({
        filter:selector
    })

})
$(".portfollio-titles li").click(function(){
  $(".portfollio-titles li").removeClass("active");
  $(this).addClass("active");
})
$(function(){
  $(".counter-number span" ).rCounter({
  duration: 60
  });
  });
  

});
