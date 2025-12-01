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
    $('.clients-card').hover(
        function () {
            let contentHeight = $(this).find('.sort-info').prop('scrollHeight');
            $(this).find('.sort-info').css({height: contentHeight + 'px',opacity: 1});
        },
        function () {
            $(this).find('.sort-info').css({height: 0, opacity: 0});
        }
    );
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
if ($('.image-collapse-slider').length) {
    var main = new Splide('.image-collapse-slider', {
        type: 'loop',
        rewind: true,
        pagination: true,
        lazyLoad: 'nearby',
        arrows: false,
        speed: 600,
        autoplay: true,
        interval: 3000,
        gap: 20,
        pauseOnHover: false,
    });
    var nav = new Splide('.image-link-slider', {
        height: 'auto',
        direction: 'ttb', /* vertical */
        wheel: false,
        pagination: false,
        arrows: false,
        gap: 10,
        isNavigation: true,
    });

    main.sync(nav);
    main.mount();
    nav.mount();
    main.on( 'autoplay:playing', function ( rate ) {
        
    } );

}
if ($('.logo-slider').length) {
    var splideOptions = {
        perPage: 5,
        autoWidth: true,
        pagination: false,
        arrows: false,
        gap: 80,
        type: 'loop',
        focus: 'center',
        autoScroll: {
            speed: 1
        },
        breakpoints: {
            767: {
                perPage: 3,
                arrows: false,
                gap: 30,
            },
        },
    };
    if (jQuery('.logo-slider').length) { 
        new Splide('.logo-slider', splideOptions).mount(window.splide.Extensions);
    }

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
// Video Player
const playIcons = document.querySelectorAll(".is-play-icon");
if (playIcons.length) {
    document.querySelectorAll(".media-block").forEach((videoBlock) => {
        const video = videoBlock.querySelector("video");
        const playIcon = videoBlock.querySelector(".is-play-icon");

        if (!video || !playIcon) return;

        // Play/Pause when clicking the play icon
        playIcon.addEventListener("click", function () {
            if (video.paused) {
                video.play();
                playIcon.style.display = "none";
            } else {
                video.pause();
                playIcon.style.display = "flex";
            }
        });

        // Pause when clicking on the video itself
        video.addEventListener("click", function () {
            if (!video.paused) {
                video.pause();
                playIcon.style.display = "flex";
            }
        });

        // Show play icon when video ends
        video.addEventListener("ended", function () {
            playIcon.style.display = "flex";
        });
    });
}

// Play Video on Observer
const videos = document.querySelectorAll(".media-block.is-video video");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const video = entry.target;
        const playIcon = video.closest(".media-block").querySelector(".play-icon.is-play-icon");

        if (entry.intersectionRatio >= 0.5) {
            video.play();
            if (playIcon) playIcon.style.display = "none"; // Hide play icon
        } else {
            video.pause();
            if (playIcon) playIcon.style.display = "flex"; // Show play icon
        }
    });
}, { threshold: [0.5] });

videos.forEach((video) => observer.observe(video));