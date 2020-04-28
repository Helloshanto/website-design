(function ($) {
  'use strict';

	// fixed menu bg change
	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top >= 100){
			$('.header-area').addClass('navbar-fixed');
		}else{
			$('.header-area').removeClass('navbar-fixed');
		}
	});

	var top = $(window).scrollTop();
	if(top >= 100){
		$('.header-area').addClass('navbar-fixed');
	}else{
		$('.header-area').removeClass('navbar-fixed');
	}

	// scroll active menu
	$('body').scrollspy({ target: '#mainMenu' });
	









  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });


  $('.test-inner').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.logos-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


})(jQuery);