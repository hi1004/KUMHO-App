$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();

    $(window).resize(function () {
        ww = $(window).width();
        wh = $(window).height();


    });

   /* function layout() {
        var bg = ['red', 'pink', 'yellow', 'green'];
        $('section').css({
            backgroundColor: function (index) {
                return bg[index];
            },
            width: ww,
            height: wh,
            //        lineHeight : wh,
        });
    }
    layout();

    $('#but li').click(function () {
        var ht = $(window).height();
        var i = $(this).index();
        var nowtop = i * ht;

        $('body, html').stop().animate({
            scrollTop: nowtop,
        }, 1000);




    });
*/


    //조건문활용    
    /*$(window).scroll(function () {
        var ht = $(window).height();
        var scroll = $(window).scrollTop();

        for (i = 0; i < 5; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $('#but li').removeClass();
                $('#but li').eq(i).addClass('on');
            };
        }
    });*/




    //없어보이지만 구동되는 코드
    //  $(window).scroll(function(){
    //      var ht=$(window).height();
    //      var scroll=$(window).scrollTop();
    //      if(scroll>=ht*0 && scroll<ht*1){
    //          $('#but li').removeClass();
    //          $('#but li').eq(0).addClass('on');
    //      }
    //      else if(scroll>=ht*1 && scroll<ht*2){
    //          $('#but li').removeClass();
    //          $('#but li').eq(1).addClass('on');
    //      }
    //       else if(scroll>=ht*2 && scroll<ht*3){
    //          $('#but li').removeClass();
    //          $('#but li').eq(2).addClass('on');
    //      }
    //       else if(scroll<ht*4){
    //          $('#but li').removeClass();
    //          $('#but li').eq(3).addClass('on');
    //      }
    //      
    //  }); 

    //차이점
    //$('선택자').on('이벤트', function(){}); 
    //$('선택자').이벤트(function(){}); 


   //event : 마우스 휠이 움직이는 이벤트 (마우스 휠이 움직일 때가 이벤트에 해당)
    //delta : 마우스휠의 방향
    //delta < 0 마우스휠을 위에서 아래로 움직일 때
    //delta > 0 마우스휠을 아래에서 위로 움직일 때

    $('.fullpage_section').on('mousewheel', function (event, delta) {
        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prev,
                
            }, 700);
        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: next
            }, 700);
        }
    });
    
    
   






}); //end
