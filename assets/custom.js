$(document).ready(function () {
  // Sticky Add To Cart JS Start
  /*var $paymentButtonsWrapper = $('.template-product .product-section');
  
  if ($paymentButtonsWrapper.length > 0) {
    var btnOffset = $paymentButtonsWrapper.offset().top + $paymentButtonsWrapper.outerHeight();
    console.log(btnOffset);
    
   $(window).scroll(function () {
      if ($(this).scrollTop() > btnOffset) {
        $(".template-product .sticky-add-to-cart").addClass("visible");
      } else {
        $(".sticky-add-to-cart").removeClass("visible");
      }
    });
  } else {
    console.log('.paymentButtonsWrapper not found!');
  }*/

  // Homepage Collection List Carousel
  $(".collection-grid-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});