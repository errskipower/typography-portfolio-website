$(document).ready(function() {
  console.log('hello');
  if ($('.bxslider') !== null) {
   $('.bxslider').bxSlider({
      nextSelector: '#portfolio-preview-right',
      prevSelector: '#portfolio-preview-left',
      nextText: '<i class="fa fa-chevron-circle-right"></i>',
      prevText: '<i class="fa fa-chevron-circle-left"></i>',
      pager: false,
      minSlides: 1,
      maxSlides: 2,
      slideWidth: 550,
      slideMargin: 10
    });
  }
  
  if ($('.read-more') !== null) {
    $('.read-more').click(function() {
      var showLess = 'Show me less!<i class="fa fa-caret-up"></i>';
      var showMore = 'Show me more!<i class="fa fa-caret-down"></i>';
      $(this).prev().children().toggle();
      console.log($(this).data('more'));
      if ($(this).data('more') == true) {
        $(this).html(showLess);
        $(this).data('more', false);
      } else {
         $(this).html(showMore);
         $(this).data('more', true);
      }
    });
  }

});