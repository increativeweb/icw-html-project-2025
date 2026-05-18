/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
    $('[data-bs-toggle="tooltip"]').tooltip();
    if ($('.main-header').length) {

        if (jQuery(this).scrollTop() > 50) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 50) {
                $('.main-header').addClass('fixed-header');
            } else {
                $('.main-header').removeClass('fixed-header');
            }
        });
        $('.navbar-toggler').on('click', function () {
            $('.main-header').toggleClass('is-visible');
            $('body').toggleClass('overflow-hidden');
            $(this).toggleClass('is-visible');
            $('.bg-overlay').toggleClass('is-active');
        });
        if ($('li.menu-item-has-children').length) {
            $('li.menu-item-has-children > a').append('<i class="arrow"></i>');
        }
        $('.menu-item-has-children .arrow').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const $li = $(this).closest('.menu-item-has-children');
            const $submenu = $li.children('.sub-menu');

            $(this).toggleClass('is-active');
            $(this).parent().toggleClass('is-active');
            $submenu.stop(true, true).slideToggle(300);
        });
        if ($(window).width() > 1200) {
            $(".menu-item-has-children").on("mouseenter", function () {
                $('.bg-overlay').addClass('is-active');
            });

            $(".menu-item-has-children").on("mouseleave", function () {
                $('.bg-overlay').removeClass('is-active');
            });
        }
        $(document).on('click', '.search-menu:not(.search-menu-popup)', function (e) {
            e.preventDefault();

            const $popup = $('.search-menu-popup');
            const $searchBtn = $(this);

            $popup.toggleClass('is-open');
            $('.bg-overlay').toggleClass('is-active');
            if ($popup.hasClass('is-open')) {
                $searchBtn.find('.icon-close').removeClass('d-none');
                $searchBtn.find('.icon-search').addClass('d-none');
            } else {
                $searchBtn.find('.icon-close').addClass('d-none');
                $searchBtn.find('.icon-search').removeClass('d-none');
            }
        });

        // Prevent closing when clicking inside popup content
        $(document).on('click', '.search-menu-block', function (e) {
            e.stopPropagation();
        });

        // Close only when clicking overlay/background
        $(document).on('click', '.search-menu-popup.is-open', function (e) {

            if ($(e.target).hasClass('search-menu-popup')) {

                $(this).removeClass('is-open');
                $('.bg-overlay').removeClass('is-active');
                $('.search-menu .icon-close').addClass('d-none');
                $('.search-menu .icon-search').removeClass('d-none');
            }
        });
    }


    if ($('.icw-progress-goto').length > 0) {
        var progressPath = document.querySelector('.icw-progress-goto path');
        var pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }

        updateProgress();
        $(window).scroll(updateProgress);

        var offset = 200;
        var duration = 550;

        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.icw-progress-goto').addClass('active-progress');
            } else {
                jQuery('.icw-progress-goto').removeClass('active-progress');
            }
        });

        jQuery('.icw-progress-goto').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    }

});

// Image Animation
function imageAnimation() {
    let winHeight = window.innerHeight;
    let winPos = window.scrollY + winHeight + 50; 

    document.querySelectorAll('.animated-img .imgSlideInUp').forEach((img) => {
        let mediaBlock = img.closest('.animated-img'); 

        if (mediaBlock) {
            let pos = mediaBlock.getBoundingClientRect().top + window.scrollY; // Get element's position

            if (winPos > pos) {
                mediaBlock.classList.add('is-visible');
                setTimeout(() => {
                    mediaBlock.classList.add('is-complete');
                    setTimeout(() => {
                        mediaBlock.querySelectorAll('.imgSlideInUp').forEach((el) => el.classList.add('animate'));
                    }, 20);
                }, 10);
            }
        }
    });
}

// Trigger Animations Text
function checkAnimations() {
    document.querySelectorAll(".animtext").forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add("animated");
        } 
    });
}
document.addEventListener("DOMContentLoaded", function () {
    // Trigger Animations Text
    checkAnimations();
    // Image Animation 
    imageAnimation();
});
window.addEventListener("scroll", function () {
    // Trigger Animations Text
    checkAnimations();
    // Image Animation 
    imageAnimation();
});