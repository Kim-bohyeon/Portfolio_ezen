$(function () {
    let homeNum = $('#home').offset().top;
    let aboutNum = $('#about').offset().top;
    let worksNum = $('#works').offset().top;
    let contactNum = $('#contact').offset().top;

    $('h1 a,.gnb li a').click(function () {
        let name = $($(this).attr('href'));
        let target = name.offset().top;

        $('body,html').animate({ 'scrollTop': target }, 500)
    });




    $(window).scroll(function () {
        let num = $(this).scrollTop();

        if (num == 0 && num < aboutNum - 200) {
            $('.gnb li').removeClass('on')
        } else if (num > aboutNum - 200 && num < worksNum - 100) {
            $('.gnb li').removeClass('on')
            $('.gnb li:eq(0)').addClass('on')
        } else if (num >= worksNum - 100 && num < contactNum - 300) {
            $('.gnb li').removeClass('on')
            $('.gnb li:eq(1)').addClass('on')
        } else if (num > contactNum - 300) {
            $('.gnb li').removeClass('on')
            $('.gnb li:eq(2)').addClass('on')
        }

        if (num >= aboutNum - 180 && num < worksNum) {
            $('#about .inner .move').css({ left: '0px' })
        }
    });

    $('ul.coding').hide();
    $('.tab li').click(function () {
        $('.tab li').removeClass('on')
        $(this).addClass('on')

        let num = $(this).index();
        console.log(num)

        if (num == 0) {
            $('ul.coding').hide();
            $('ul.design').show();
        } else if (num == 1) {
            $('ul.design').hide();
            $('ul.coding').show();
        }
    });

    $('.work_box li').mouseenter(function () {
        $(this).find('.cover').stop().fadeIn(200)
    });
    $('.work_box li').mouseleave(function () {
        $(this).find('.cover').stop().fadeOut(200)
    });


    function move1() {
        $('.one1').fadeOut(2000).fadeIn(3000);
    }

    function move2() {
        $('.one2').fadeOut(4000).fadeIn(3000);
    }

    function move3() {
        $('.one3').fadeOut(3000).fadeIn(5000);
    }

    function move4() {
        $('.one4').fadeOut(1000).fadeIn(3000);
    }

    function move5() {
        $('.one5').fadeOut(2000).fadeIn(2000);
    }

    setInterval(move1, 200);
    setInterval(move2, 200);
    setInterval(move3, 200);
    setInterval(move4, 200);
    setInterval(move5, 200);



    $('.design li a').lightBox({
        overlayBgColor: '#000', //cover
        overlayOpacty: 0.9, // cover 투명도
        imageLoading: "./images/lightbox-ico-loading.gif", // img 로딩
        imageBtnClose: "./images/pop_close.png",  // 닫기버튼
        imageBtnPrev: "./images/btn_left.png",  // 닫기버튼
        imageBtnNext: "./images/btn_right.png",  // 닫기버튼

        containerResizeSpeed: 500,  // 모달팝업창 속도 조절

        txtImage: "작품" // title

    });









});