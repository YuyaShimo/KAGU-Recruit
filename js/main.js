$(function(){
  $('#slider-list').on('init',function(){
    $('.slider-info').addClass('on');
  });
    $('#slider-list').slick({
      autoplay:true,
      autoplaySpeed:5000,
      dots:false,
      infinite:true,
    });
    $('#slider-list').on('beforeChange',function(){
      $('.slider-info').removeClass('.on');
    });
    $('#slider-list').on('afterChange',function(){
      $('.slider-info').addClass('.on');
    });
});