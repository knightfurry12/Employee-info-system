
// mobile navigation toggle

$(document).ready(function(){
	$('.side-menu').click(function(){
		$('.mobile-nav').toggleClass('mobile-nav-shower');
	});
	$('.close-nav').click(function(){
		$('.mobile-nav').toggleClass('mobile-nav-shower');
	});
  $('.mobile-nav ul li a').click(function(){
    $('.mobile-nav').toggleClass('mobile-nav-shower');
  });


  // show header on scroll

  	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
		    $('header').addClass('header-bg');
		} else {
		    $('header').removeClass('header-bg');
		}
	});

    // testimonial carousel

  	var owl = $('#testi-carousel');
      owl.owlCarousel({
        margin: 20,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 2
          }
        }
      });

      // other service carousel

      var owl = $('#service-carousel');
      owl.owlCarousel({
        margin: 20,
        loop: true,
        dots: false,
        nav: true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
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

      // smooth scroll for navigation

      $(document).on('click', 'header a[href^="#"]', function(e) {
      // target element id
      var id = $(this).attr('href');

      // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

      // top position relative to the document
      var pos = $id.offset().top-70;

      // animated top scrolling
      $('body, html').animate({scrollTop: pos},1000);
  });


});


      
