$(function() {
  $(".slide-items").slick({
    autoplay:true,
    slidesToShow:3,
    infinite:true,
    slidesToScroll:1,
    arrows:false,
    dots:true,

    responsive: [{
      breakpoint: 960,
       settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20%',
      },
     },
    ]
  });
});

const ham = $('#js-hamburger');
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
});
