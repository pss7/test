$(function () {

  /* 헤더 , aos */
  $(window).on('load', function () {
    $('#headerWrap').addClass('active');
    AOS.init({
      once: false,
      duration: 2000
    });
  });

});