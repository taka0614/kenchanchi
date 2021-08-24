
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
  });
});

$(function() {
  $('.hambmenu_anchor').click(function() {
      $('.hamburger').removeClass('active');
  });
});

