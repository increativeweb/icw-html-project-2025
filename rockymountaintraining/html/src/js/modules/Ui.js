var Ui = ( function($) {
	var ui = {
		menuToggle: function() {

			$('.js-trigger-menu').on('click', function(e) {
				e.preventDefault();
				$('.offcanvas-menu').addClass('active');
				$('.main-wrap').addClass('menu-active');
			});

			$('.offcanvas-menu .ico-close').on('click', function() {
				$('.offcanvas-menu').removeClass('active');
				$('.main-wrap').removeClass('menu-active');
			});

		},
		showChildren: function() {

			$('.main-nav .menu-item-has-children').on('click', function() {
				$(this).toggleClass('active').find('.sub-menu').slideToggle(300);
			});

		},
		headerOffset: function() {

			var headerHeight = $('#header-wrapper').outerHeight();
			$('.header-offset-container').css('padding-top', headerHeight);

		},
    videoToggle: function() {

      var div = document.getElementById("popupVid");
      if ( div === null ) {
        return;
      }
      var iframe = div.getElementsByTagName("iframe")[0].contentWindow;

      var videoHeight = $('.product-video').height();
      $('.js-show-video').on('click', function() {
        $('.product-upper').animate({height: videoHeight}, 300, function(){
          $('.product-video').fadeIn(300);
        });
      });

      $(window).resize(function() {
        if ($('.product-video').is(':visible')) {
          var videoHeight = $('.product-video').height() - 100; //100 offset for padding
          $('.product-upper').height(videoHeight);
        }
      });

      $('.product-video .ico-close').on('click', function() {
        //$(iframe).postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
        var newHeight = $('.product-upper > .row').outerHeight() + 100;
        $('.product-upper').animate({height: newHeight}, 300, function() {
          $('.product-video').fadeOut(300);
          $(this).css("height", "");
        });
      });

    },
    sliders: function() {

      $(window).load(function() {

        $('.js-testimonial-slider').flexslider({
          controlNav: false,
          slideshowSpeed: 20000,
          prevText: "<i class='ico ico-arrow-left'></i>",
          nextText: "<i class='ico ico-arrow-right'></i>"

        });

        $('.js-supporter-slider').flexslider({
          animation: "slide",
          animationLoop: false,
          itemWidth: 180,
          minItems: 1,
          maxItems: 7,
          controlNav: false,
          prevText: "<i class='ico ico-arrow-left'></i>",
          nextText: "<i class='ico ico-arrow-right'></i>"
        });

      });

    },
    stickHeader: function() {

      var homeHero = $('.home-hero');
      if ( ! homeHero.length ) {
        return;
      }
      var headerWrapper = $('#header-wrapper');
      var headerWrapperHeight = $(headerWrapper).height();
      var ctaHeight = $('.header-cta').height();
      var homeHeroHeight = $(homeHero).height() + ctaHeight;

      $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if ( scrollPos > headerWrapperHeight ) {
          if ( ! $(headerWrapper).hasClass('hidden') ) {
            $(headerWrapper).addClass('hidden');
          }
        } else {
          if ( $(headerWrapper).hasClass('hidden') ) {
            $(headerWrapper).removeClass('hidden');
          }
        }

        if ( scrollPos > homeHeroHeight ) {
          if ( ! $(headerWrapper).hasClass('fixed') ) {
            $(headerWrapper).addClass('fixed');
          }
        } else {
          if ( $(headerWrapper).hasClass('fixed') ) {
            $(headerWrapper).removeClass('fixed');
          }
        }

      });

    },
    heroHeight: function() {

      var winHeight = $(window).height();
      var ctaHeight = $('.header-cta').outerHeight();

      $('.home-hero').height( winHeight - ctaHeight )
      ;

    },
    calendarToggle: function() {

      $('.month-holder.active').find('.js-month-header-toggle').html('-');

      $('.js-month-header-toggle').on('click', function() {
        var month = $(this).attr('data-month');
        var monthHolder = $('#' + month + '-wrapper' );
        $(this).html($(this).text() == '-' ? '+' : '-');
        if ( $(monthHolder).hasClass('active') ) {
          $(monthHolder).removeClass('active');
        } else {
          $(monthHolder).addClass('active');
        }

      });

    },
    staffSwitcher: function() {

      $('.instructor-name').on('click', function(e) {
        e.preventDefault();
        var ID = $(this).attr('id');
        $('.instructor-name').each(function() {
          $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('.instructor-holder.active').fadeOut(function() {
          $(this).removeClass('active');
          $('.instructor-holder[data-instructor-id=' + ID + ']').fadeIn().addClass('active');
        });
      });

    },
    menuOverflow: function() {

      var winHeight = $(window).height();
      var canvasTop = $('.offcanvas-top').outerHeight();
      var menuHeight = $('.main-nav').outerHeight();

      if ( winHeight < (canvasTop + menuHeight + 50 ) ) {
        $('.offcanvas-menu').addClass('scrollable');
      }

    },
    equalHeight: function( outerEl, innerEl ) {

      var height = 0;
      $(outerEl).each(function() {
        var thisHeight = $(this).height();
        if ( thisHeight > height ) {
          height = thisHeight;
        }
      });
      $(innerEl).css( 'min-height', height);

    },
  	init: function() {

			var self = this;
			self.menuToggle();
			self.showChildren();
			self.headerOffset();
      self.videoToggle();
      self.sliders();
      self.heroHeight();
      self.stickHeader();
      self.calendarToggle();
      self.staffSwitcher();
      self.menuOverflow();
      self.equalHeight('.class-buckets .bucket', '.bucket__inner');

  	}

	};

  return ui;
})(jQuery);
