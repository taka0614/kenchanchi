
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

$(function() {
  $('.hambmenu_anchor').click(function() {
      $('.globalMenuSp').removeClass('active');
      $('.hamburger').removeClass('active');
  });
});

$(function() {
  $('.page_top a').click(function() {
      $('.hamburger').removeClass('active');
      $('.globalMenuSp').removeClass('active');
  });
});

$(function(){
  var pagetop = jQuery('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 1500) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  
});

