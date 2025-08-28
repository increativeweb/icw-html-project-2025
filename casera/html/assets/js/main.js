/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

   
    if ($('.main-header').length) {
        let last = 0, delta = 5, $header = $('.main-header'), $headerHeight = $header.outerHeight();

        $(window).on('scroll', function () {
            let scrollWindow = $(this).scrollTop();
            if(scrollWindow > 50) {
                if (Math.abs(scrollWindow - last) > delta) {
                    $header.toggleClass('scroll-up', scrollWindow > last && scrollWindow > $headerHeight);
                    $header.toggleClass('scroll-down', scrollWindow <= last || scrollWindow <= $headerHeight);
                    last = scrollWindow;
                }
            } else {
                $header.removeClass('scroll-down');
            }
        });
    }
    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
    $('.menu-sidebar').on('click',function(){
        $(".main-header").toggleClass('is-visible');
        $(".bg-overlay").toggleClass('is-visible');
        $(this).toggleClass('is-visible');
        $(body).toggleClass('overflow-hidden')
    });

    if ($(".icw-progress-goto").length > 0) {
        var progressPath = document.querySelector('.icw-progress-goto path');
        var pathLength = progressPath.getTotalLength();
    
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
    
        updateProgress();
        $(window).scroll(updateProgress);
    
        var offset = 200;
        var duration = 550;
    
        jQuery(window).on('scroll', function() {
            if(jQuery(this).scrollTop() > offset) {
                jQuery('.icw-progress-goto').addClass('active-progress');
            } else {
                jQuery('.icw-progress-goto').removeClass('active-progress');
            }
        });
    
        jQuery('.icw-progress-goto').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    }

   
});

// Sticky Nav in Add Class
document.addEventListener("DOMContentLoaded", function () {
    stickyNavScroll();
});

// Run on resize (in case viewport changes)
window.addEventListener("resize", () => {
    // Sticky Nav in Add Class
    stickyNavScroll;
});

window.addEventListener("scroll", function () {
    // Sticky Nav in Add Class
    stickyNavScroll();
});
// Splide Slider
if ($('.splide:not(.splide-js)').length) {
    $('.splide:not(.splide-js)').each(function() {
        new Splide(this).mount();
        $(this).addClass('icw_splide-with-data'); // Mark as initialized
    });
}
if ($('.product-slider-block').length) {
    // Primary slider.
    var primarySlider = new Splide('.primary-slider', {
        type: 'fade',
        height: "100%",
        pagination: false,
        arrows: false,
        cover: true,
    });
    // Product Details slider
    var productDetailSlider = new Splide('.product-details-slider', {
        type: 'loop',
        height: "100%",
        pagination: false,
        arrows: false,
    });

    // Thumbnails slider.
    var thumbnailSlider = new Splide('.thumbnail-slider', {
        type: 'loop',
        fixedWidth: 110,
        fixedHeight: 110,
        isNavigation: true,
        gap: 10,
        // focus: 'center',
        pagination: false,
        cover: true,
        height: "100%",
        direction: "ttb",
        perPage: 3,
        wheel: true,
        dragMinThreshold: {
            mouse: 4,
            touch: 10
        },
        breakpoints: {
            '1200': {
                fixedWidth: 80,
                fixedHeight: 80,
            },
            '992': {
               direction: "ltr",
               fixedWidth: 110,
                fixedHeight: 110,
            },
            '767': {
                fixedWidth: 80,
                fixedHeight: 80,
            }
        }
    }).mount();
    // sync the thumbnails slider as a target of primary slider.
    primarySlider.sync(thumbnailSlider).mount();
    productDetailSlider.sync(thumbnailSlider).mount();

}


// Footer Site Logo Animation
const $logoBlock = $('.site-logo-block');
if ($logoBlock.length) {
    $(window).on('scroll', function() {
        const logoBlockTop = $logoBlock.offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        // Toggle class based on footer visibility
        $logoBlock.toggleClass('is-animate', windowBottom >= logoBlockTop);
    });
}

// Sticky Nav in Add Class
const sticky_nav = document.querySelector('.sticky-scrollspy-nav');
function stickyNavScroll() {
    if (!sticky_nav) return; 

    const navbarTop = sticky_nav.getBoundingClientRect().top; 
    
    if (navbarTop <= 90) { 
        sticky_nav.classList.add('is-sticky');
    } else {
        sticky_nav.classList.remove('is-sticky');
    }
} 
