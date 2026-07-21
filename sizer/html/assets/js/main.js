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
    }
    if ($('.sticky-action').length) {  
        $(window).on('scroll', function () { 
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 300) { 
                $('.sticky-action').addClass('is-show');
            } else {
                $('.sticky-action').removeClass('is-show');
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
if ($('.media-block.is-video').length) {
    const $videos = $('.media-block.is-video');
    function checkVideos() {
        const triggerPoint = window.innerHeight * 0.4; 
        $videos.each(function () {
            const $block = $(this);
            const video = $block.find('video').get(0);
            if (!video) return;
            const rect = video.getBoundingClientRect();
            // Play when video reaches top 20% of viewport
            if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
                if (video.paused) {
                    video.play().then(() => { $block.addClass('video-playing'); }).catch(() => {});
                }
            } else {
                if (!video.paused) {
                    video.pause();
                    $block.removeClass('video-playing');
                }
            }
        });
    }
    $(window).on('scroll resize load', checkVideos);
    checkVideos();
}
$(function () {
    const offset = 50; // Header height / top offset
    const $links = $('.mainMenu a[href^="#"]');
    const $sections = $($links.map(function () {
        const target = $($(this).attr('href'));
        return target.length ? target[0] : null;
    }));
    function setPageActiveMenu() {
        const scrollPos = $(window).scrollTop() + offset;
        let currentId = '';
        $sections.each(function () {
            if (scrollPos >= $(this).offset().top) { currentId = this.id; }
        });
        $links.removeClass('active');
        if (currentId) {
            $links.filter(`[href="#${currentId}"]`).addClass('active');
        }
    }
    // Smooth scroll
    $links.on('click', function (e) {
        const target = $($(this).attr('href'));
        if (!target.length) return;
        e.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, 600);
    });
    $(window).on('scroll', setPageActiveMenu);
    setPageActiveMenu();
});

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.replace(/^\/|\/$/g, '').split('/').pop();
    function setActiveMenu(selector) {
        document.querySelectorAll(selector + ' a').forEach(function (link) {
            const href = (link.getAttribute('href') || '').replace(/^\/|\/$/g, '').split('/').pop();            
            if (href === currentPage) {
                // Active item
                const li = link.closest('li');
                if (li) { li.classList.add('current-menu-item'); }
                // Active parent (for submenu)
                const parentMenu = link.closest('.sub-menu');
                if (parentMenu) {
                    const parentLi = parentMenu.closest('li');
                    if (parentLi) {
                        parentLi.classList.add('current-menu-item');
                    }
                }
            }
        });
    }
    // Header
    setActiveMenu('.mainMenu');
    // Footer
    setActiveMenu('.main-footer .main-menu');
});