/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
    $('[data-bs-toggle="tooltip"]').tooltip();
    if ($('.main-header').length) {        
        $('.navbar-toggler').on('click', function () {
            $('.main-header').toggleClass('is-visible');
            $('body').toggleClass('overflow-hidden');
            $(this).toggleClass('is-visible');
        });
        $('.mainMenu > li > a').on('click', function () {
            if ($(window).width() < 992) {
                $('.main-header').removeClass('is-visible');
                $('body').removeClass('overflow-hidden');
                $('.navbar-toggler').removeClass('is-visible');
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
if ($('.card-img-splide').length > 0) {
    $('.card-img-splide').each(function () {
        var slider = this;
        var slideCount = $(slider).find('.splide__slide').length;
        var splide = new Splide(slider, {
            type: 'fade',
            perPage: 1,
            perMove: 1,
            rewind: true,     
            arrows: true,
            pagination: true,
            autoplay: true,
            interval: 5000,
            speed: 1000,
            pauseOnHover: true,
            pauseOnFocus: false,
            updateOnMove: true,
        });
        if (slideCount <= 1) {
            splide.mount();
            splide.destroy(true); 
        } else {
            splide.mount();
        }

    });
}
if ($('.media-block.is-video').length > 0) {
    $('.media-block.is-video').each(function () {
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