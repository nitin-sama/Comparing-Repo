$(document).ready(function () {
  // Sticky Add To Cart JS Start
  var $paymentButtonsWrapper = $('.template-product  .product-section');
  //var $paymentButtonsWrapper = $('.template-product .collage-builder__section-wrapper');
  
  if ($paymentButtonsWrapper.length > 0) {
    var btnOffset = $paymentButtonsWrapper.offset().top + $paymentButtonsWrapper.outerHeight() - 200;
    //var btnOffset = $paymentButtonsWrapper.offset().top;
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
  }

  // Homepage Collection List Carousel
  /*$(".collection-grid-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
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
  });*/
  
});