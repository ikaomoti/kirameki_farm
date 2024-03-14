
$(function () {

    // ハンバーガーメニュー
    $('.hamburger-button').on('click', function () {
        $('.global-nav').toggleClass('open');
    });

    $(".gnav-list__item a").on("click", function () {
        $('.global-nav').toggleClass('open');
    });

    //スワイパー
    const swiper = new Swiper(".swiper", {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        loop: true, //繰り返しをする
        slidesPerView: 1, //表示するスライド数
        spaceBetween: 40,//スライド間の幅(px)
        centeredSlides: true,//アクティブのスライドを中央に表示
        speed: 600 //スライドの推移時間を600msに
    });

    //アコーディオン
    $(".accordion-q").click(function () {
        $(this).next().slideToggle();
    });

    $('.accordion-q').click(function () {
        $(this).toggleClass('open');
    });





});

