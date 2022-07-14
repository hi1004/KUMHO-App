$(document).ready(function () {
  var ww = $(window).width();
  var wh = $(window).height();

  $(window).resize(function () {
    ww = $(window).width();
    wh = $(window).height();
  });

  $('.fullpage_section').on('mousewheel', function (event, delta) {
    if (delta > 0) {
      var prev = $(this).prev().offset().top;
      $('html, body').stop().animate(
        {
          scrollTop: prev,
        },
        700
      );
    } else if (delta < 0) {
      var next = $(this).next().offset().top;
      $('html, body').stop().animate(
        {
          scrollTop: next,
        },
        700
      );
    }
  });
}); //end
