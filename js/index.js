$(document).ready(function () {
  $('#nav_btn').click(function () {
    $('nav').css({
      display: 'none',
    });
  });

  /*language_btn*/
  $('#language')
    .find('a')
    .first()
    .click(function () {
      $(this).css({
        fontWeight: 900,
      });
      $('#language>a:nth-child(2)').css({
        fontWeight: 200,
      });
    });

  $('#language')
    .find('a')
    .eq(1)
    .click(function () {
      $(this).css({
        fontWeight: 900,
      });
      $('#language').find('a').first().css({
        fontWeight: 200,
      });
    });

  $('#wrap .banner_img')
    .each(function (index) {
      $(this).attr('data-index', index);
    })
    .first()
    .css({
      display: 'block',
    });

  /*scroll*/
  $(window).scroll(function () {
    var sct = $(window).scrollTop();
    var ht = $('nav').height();
    var b_ht = $('.banner_img').height();

    if (sct >= ht) {
      $('header').css({
        position: 'fixed',
        backgroundColor: 'white',
        top: 0,
      });
      $('#top').css({
        opacity: 1,
        zIndex: 99,
      });
    } else if (sct < ht) {
      $('header').css({
        position: 'relative',
      });
      $('#top').css({
        opacity: 0,
        zIndex: -1,
      });
    }

    if (sct >= b_ht) {
      $('#fixed_contact').css({
        opacity: 1,
      });
    } else if (sct < b_ht) {
      $('#fixed_contact').css({
        opacity: 0,
      });
    }
  });

  var click_num = 0;
  $('#right_arrow').click(function () {
    if (click_num == 0) {
    }

    if (click_num < 2) {
      click_num++;
      $('#wrap .banner_img').stop().fadeOut(700);
      $('#wrap .banner_img').eq(click_num).stop().fadeIn(700);
    } else {
      click_num = 0;
      $('#wrap .banner_img').stop().fadeOut(700);
      $('#wrap .banner_img').eq(click_num).stop().fadeIn(700);
    }

    console.log(click_num);
  });

  $('#left_arrow').click(function () {
    if (click_num <= 0) {
      click_num--;
      $('#wrap .banner_img').stop().fadeOut(700);
      $('#wrap .banner_img').eq(click_num).stop().fadeIn(700);

      if (click_num == -3) {
        click_num = 0;
        $('#wrap .banner_img').stop().fadeOut(700);
        $('#wrap .banner_img').eq(click_num).stop().fadeIn(700);
      }
    } else if (click_num <= 2) {
      click_num--;
      $('#wrap .banner_img').stop().fadeOut(700);
      $('#wrap .banner_img').eq(click_num).stop().fadeIn(700);
    }
    console.log(click_num);
  });

  /*자동움직임*/
  var st = setInterval(function () {
    $('#right_arrow').trigger('click');
  }, 8000);

  $('#top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  var ww = $(window).width();
  var wh = $(window).height();

  function layout() {
    $('#banner_wrap').css({
      height: wh,
    });

    $('#banner_img_wrap').css({
      height: wh,
    });

    $('#wrap .banner_img').css({
      /*width:ww,*/
      height: wh,
    });
  }
  layout();

  $(window).resize(function () {
    ww = $(window).width();
    wh = $(window).height();

    layout();
  });
}); /*end*/
