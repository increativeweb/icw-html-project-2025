/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
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
    if ($('.mobile-navbar').length) {
        var lastScrollTop = 0;
        var $navbar = $('.mobile-navbar');
        $(window).on('scroll', function () {
            var st = $(this).scrollTop();

            if (st < lastScrollTop) {
                $navbar.addClass('is-show');
            } else {
                $navbar.removeClass('is-show');
            }

            lastScrollTop = st;
        });
    }
});