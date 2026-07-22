/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
    $('[data-bs-toggle="tooltip"]').tooltip();
    if ($('.main-header').length) {
        $('.navbar-toggler').on('click', function () {
            $(".main-header").toggleClass('is-visible');
            $('body').toggleClass('overflow-hidden');
            $(this).toggleClass('is-visible');
            $('.bg-overlay').toggleClass('is-visible');
        });        
        $(document).on('click', function (e) {
            if ($(window).width() >= 1200) return;
            if (!$(e.target).closest('.navbar-collapse, .navbar-toggler').length) {
                $('.main-header, .navbar-toggler').removeClass('is-visible');
                $('.main-header, .navbar-toggler').removeClass('is-visible');
                $('body').removeClass('overflow-hidden');
                $('.bg-overlay').removeClass('is-visible');
            }
        });
        if ($('li.menu-item-has-children').length) {
            $('li.menu-item-has-children > a').after('<i class="arrow"></i>');
        }
        $('.menu-item-has-children .arrow').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const $li = $(this).closest('.menu-item-has-children');
            const $submenu = $li.children('.sub-menu');

            $(this).toggleClass('is-active');
            $submenu.stop(true, true).slideToggle(300);
        });
        $(window).on('resize', function () {
            if ($(window).width() >= 1200) {
                $('.main-header, .navbar-toggler, .bg-overlay').removeClass('is-visible');
                $('body').removeClass('overflow-hidden');
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

// Multiple Img Splide Slider 
if ($('.multiple-img-splide').length) {
    $('.multiple-img-splide').each(function () {
        const $slider = $(this);
        const slideLength = $slider.find('.splide__slide').length;
        const multiImgSplide = new Splide(this, {
            type: 'fade',
            rewind: true,
            arrows: false,
            pagination: slideLength > 1,
            drag: slideLength > 1,
            autoplay: slideLength > 1,
            interval: 5000,
            speed: 1000,
            pauseOnHover: true,
            pauseOnFocus: false,
            updateOnMove: true,
            perPage: 1,
            perMove: 1,
            classes: {
                pagination: 'splide__pagination is-light',
            },
        });
        multiImgSplide.on('mounted resize', function () {
            if (slideLength <= 1) {
                multiImgSplide.options = {
                    ...multiImgSplide.options,
                    drag: false,
                    arrows: false,
                    pagination: false,
                    autoplay: false,
                };
                $slider.addClass('slider-disabled');
            } else {
                multiImgSplide.options = {
                    ...multiImgSplide.options,
                    drag: true,
                    pagination: true,
                    autoplay: true,
                };
                $slider.removeClass('slider-disabled');
            }
            multiImgSplide.refresh();
        });
        multiImgSplide.mount();
    });
}

if ($('.media-block.is-video').length > 0) {
    $('.media-block.is-video:not(:has(.glightbox))').each(function () {
        const $block = $(this);
        const $icon = $block.find('.play-icon');
        const video = $block.find('video').get(0);
        if (!video) return;
        const playVideo = () => {
            video.play().then(() => { $block.addClass('video-playing'); $icon.addClass('d-none'); }).catch(() => {});
        };
        const pauseVideo = () => { video.pause(); $block.removeClass('video-playing'); $icon.removeClass('d-none'); };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { entry.isIntersecting ? playVideo() : pauseVideo(); });
        }, {
            threshold: 0.9
        });
        observer.observe(video);
        $(video).on('click', pauseVideo);
        $icon.on('click', function (e) {
            e.stopPropagation();
            playVideo();
        });
    });
}