
$(function () {
    $('.hmbmenu_btn').on('click', function () {
      $('.hmbmenu_contents , .hmbmenu_line').toggleClass('hmbmenu_open');
      })	
  });
  
  $(function () {
    $('.hambmenu_anchor').on('click', function () {
      $('.hmbmenu_contents , .hmbmenu_line').removeClass('hmbmenu_open');
      })	
});
