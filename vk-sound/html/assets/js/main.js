/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

   
    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 50) {
            $('.main-header .navbar').addClass('fixed-header');
        } else {
            $('.main-header .navbar').removeClass('fixed-header');
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 50) {
                $('.main-header .navbar').addClass('fixed-header');
            } else {
                $('.main-header .navbar').removeClass('fixed-header');
            }
        });
        $('.navbar-toggler').on('click',function(){
            $(this).toggleClass('is-open');
            $('.main-header').toggleClass('is-open');
            $('body').toggleClass('overflow-hidden');
        });
    }
    if ($('li.menu-item-has-children').length) {
        $('li.menu-item-has-children > a').after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });

});
if ($('.hero-slider').length) {
    var swiper = new Swiper('.hero-slider', {
        speed: 600,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
if ($('.logo-slider').length) {
    var swiper = new Swiper('.logo-slider', {
        slidesPerView: 4,
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 0,
            enabled: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 10,
                spaceBetween: 50
            },
        }
    });
}
if ($('.card-slider').length) {
    var swiper = new Swiper('.card-slider', {
        slidesPerView: 1.25,
        loop: true,
        spaceBetween: 20,
        autoplay: true,
        speed: 2000,
        autoplay: {
            delay: 1000,
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 2.25,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    });
}
// Counter
if ($('.counter').length) {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };
    // Create a new observer
    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let $this = $(entry.target);
                var countTo = $this.attr("data-countto");
                var countDuration = parseInt($this.attr("data-duration"));
                
                $({ counter: $this.find('span').text() }).animate({
                    counter: countTo
                }, {
                    duration: countDuration,
                    easing: "linear",
                    step: function () {
                        $this.find('span').text(Math.floor(this.counter));
                    },
                    complete: function () {
                        $this.find('span').text(this.counter);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Target each element with the class .counter
    $('.counter').each(function () {
        observer.observe(this);    
    });    
}