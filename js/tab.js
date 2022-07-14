$(document).ready(function () {
  /*language_btn*/
  $('#tab_language')
    .find('a')
    .first()
    .click(function () {
      $(this).css({
        fontWeight: 900,
      });
      $('#tab_language>a:nth-child(2)').css({
        fontWeight: 200,
      });
    });

  $('#tab_language')
    .find('a')
    .eq(1)
    .click(function () {
      $(this).css({
        fontWeight: 900,
      });
      $('#tab_language').find('a').first().css({
        fontWeight: 200,
      });
    });

  $('#fullpage .banner_img')
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
    } else if (sct < ht) {
      $('header').css({
        position: 'relative',
      });
      $('#tab_top').css({
        opacity: 0,
      });
    }

    if (sct >= b_ht) {
      $('#tab_fixed_contact').css({
        opacity: 1,
      });
      $('#tab_top').css({
        opacity: 1,
        zIndex: 99,
      });
    } else if (sct < b_ht) {
      $('#tab_fixed_contact').css({
        opacity: 0,
      });

      $('#tab_top').css({
        opacity: 1,
        zIndex: -1,
      });
    }
  });

  var click_num = 0;
  $('#fullpage #tab_right_arrow').click(function () {
    if (click_num < 2) {
      click_num++;
      $('#fullpage .banner_img').stop().fadeOut(750);
      $('#fullpage .banner_img').eq(click_num).stop().fadeIn(750);
      $('#tab_banner_text_box').css({
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: 'none ',
      });
    } else {
      click_num = 0;
      $('#fullpage .banner_img').stop().fadeOut(750);
      $('#fullpage .banner_img').eq(click_num).stop().fadeIn(750);

      $('#tab_banner_text_box').css({
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.4)',
      });
    }

    console.log(click_num);
  });

  $('#tab_left_arrow').click(function () {
    if (click_num <= 0) {
      click_num--;
      $('#fullpage .banner_img').stop().fadeOut(1000);
      $('#fullpage .banner_img').eq(click_num).stop().fadeIn(1000);
      $('#tab_banner_text_box').css({
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: 'none ',
      });

      if (click_num == -3) {
        click_num = 0;
        $('#fullpage .banner_img').stop().fadeOut(1000);
        $('#fullpage .banner_img').eq(click_num).stop().fadeIn(1000);
        $('#tab_banner_text_box').css({
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.4)',
        });
      }
    } else if (click_num <= 2) {
      click_num--;
      $('#fullpage .banner_img').stop().fadeOut(1000);
      $('#fullpage .banner_img').eq(click_num).stop().fadeIn(1000);
      $('#tab_banner_text_box').css({
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.4)',
      });
    }
    console.log(click_num);
  });

  /*자동움직임*/
  var st = setInterval(function () {
    $('#tab_right_arrow').trigger('click');
  }, 7000);

  $('#tab_top').click(function () {
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
    $('#tab_banner_wrap').css({
      height: wh,
    });

    $('#tab_banner_img_wrap').css({
      height: wh,
    });

    $('#fullpage .banner_img').css({
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

  $('#company_menu>li')
    .each(function (index) {
      $(this).attr('data-index', index);
    })
    .click(function () {
      a = $(this).attr('data-index');

      $('#company_menu>li').removeClass('active');
      $('#company_menu>li').eq(a).addClass('active');

      $('#tab_move_img_wrap>li').stop().fadeOut(800);
      $('#tab_move_img_wrap>li').eq(a).stop().fadeIn(800);
    });

  $('#tab_move_img_wrap>li')
    .each(function (index) {
      $(this).attr('data-index', index);
    })
    .first()
    .css({
      display: 'block',
    });

  var click_num_2 = 0;
  $('#tab_arrow_right').click(function () {
    if (click_num_2 < 3) {
      click_num_2++;
      $('#tab_move_img_wrap>li').stop().fadeOut(800);
      $('#tab_move_img_wrap>li').eq(click_num_2).stop().fadeIn(800);
    } else {
      click_num_2 = 0;
      $('#tab_move_img_wrap>li').stop().fadeOut(800);
      $('#tab_move_img_wrap>li').eq(click_num_2).stop().fadeIn(800);
    }

    $('#company_menu>li').removeClass('active');
    $('#company_menu>li').eq(click_num_2).addClass('active');

    console.log(click_num_2);
  });

  $('#tab_arrow_left').click(function () {
    if (click_num_2 <= 0) {
      click_num_2--;
      $('#tab_move_img_wrap>li').stop().fadeOut(1000);
      $('#tab_move_img_wrap>li').eq(click_num_2).stop().fadeIn(1000);

      if (click_num_2 == -4) {
        click_num_2 = 0;
        $('#tab_move_img_wrap>li').stop().fadeOut(1000);
        $('#tab_move_img_wrap>li').eq(click_num_2).stop().fadeIn(1000);
      }
    } else if (click_num_2 <= 2) {
      click_num_2--;
      $('#company_menu>li').stop().fadeOut(1000);
      $('#company_menu>li').eq(click_num_2).stop().fadeIn(1000);
    }

    $('#company_menu>li').removeClass('active');
    $('#company_menu>li').eq(click_num_2).addClass('active');

    console.log(click_num_2);
  });

  /*var st_2 = setInterval(function () {
        $('#tab_arrow_right').trigger('click');
    }, 8000);
*/
  var button_click = 0;
  $('.hamburger_button').on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass('on');
    $('.tab_nav').toggleClass('visible');
    button_click++;
    console.log(button_click);
  });

  $('.hamburger_button').click(function () {
    if (button_click % 2 == 1) {
      $('body').css({
        overflowY: 'hidden',
      });
    } else if (button_click % 2 == 0) {
      $('body').css({
        overflowY: 'scroll',
      });
    }
  });

  /* $('.hamburger_button').click(function(){
         $(this).toggleClass('on');
     });*/
}); /*end*/
