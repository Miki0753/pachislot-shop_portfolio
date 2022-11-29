
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  /* フローティング */

  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $('#floating').removeClass('DownMove');
      $('#floating').addClass('UpMove');
    } else {
      if ($('#floating').hasClass('UpMove')) {
        $('#floating').removeClass('UpMove');
        $('#floating').addClass('DownMove');
      }
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    PageTopAnime();
  });


  // floatingをクリックした際の設定
  $('#floating a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  /* ドロワー */
  $(function () {
    $(".js-drawer-icon").on("click", function (e) {
      e.preventDefault();
      $(".js-drawer-icon").toggleClass("is-active");
      $(".js-drawer-content").toggleClass("is-active");
      $(".js-drawer-background").toggleClass("is-active");

      return false;
    });
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  /* ヘッダースクロール */
  $(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
        $('.header').addClass("change-small");
        $('.header__logo').addClass("change-small");
        $('.js-drawer-icon').addClass("change-small");
        $('.js-drawer-icon__bar1').addClass("change-small");
        $('.js-drawer-icon__bar2').addClass("change-small");
        $('.js-drawer-icon__bar3').addClass("change-small");
      } else {
        $('.header').removeClass("change-small");
        $('.header__logo').removeClass("change-small");
        $('.js-drawer-icon').removeClass("change-small");
        $('.js-drawer-icon__bar1').removeClass("change-small");
        $('.js-drawer-icon__bar2').removeClass("change-small");
        $('.js-drawer-icon__bar3').removeClass("change-small");
      }
    });
  });

   function textRoll() {
    $('.js-roll-text').each(function () {
      var elemPos = $(this).offset().top-5;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass('-active');
      } else {
        $(this).removeClass('-active');
      }
    });
  }
  $(window).scroll(function () {
    textRoll();
  });

  new WOW().init();
});


