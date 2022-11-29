const swiper = new Swiper('.swiper', {
  // Optional parameters
  // スライドの間隔ー単位はpx
  spaceBetween: 20,
  // 表示されるスライドの枚数
  slidesPerView: 1.5,
  // スライドの高さに合わせてSwiperの高さを変える
  autoHeight: true,
  // ループする
  loop: true,

  /*自動で再生する*/
  autoplay: {
    // スライドが動く間隔。(これなら3秒)
    delay: 3000,
    // trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
    stopOnLastSlide: false,
    // trueなら触った後停止falseなら再生され続ける
    disableOnInteraction: false,
    // trueなら最後のスライドまで行ったら停止する。falseなら最初に戻る
    reverseDirection: false
  },

  /*スライドボタン*/
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    600: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 2.8,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 1.5,
    },
    1440: {
      slidesPerView: 2.8,
    }
  },
});