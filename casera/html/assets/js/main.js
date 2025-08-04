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
            if (Math.abs(scrollWindow - last) > delta) {
                $header.toggleClass('scroll-up', scrollWindow > last && scrollWindow > $headerHeight);
                $header.toggleClass('scroll-down', scrollWindow <= last || scrollWindow <= $headerHeight);
                last = scrollWindow;
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
    if ($('.tab-block').length) {
        $('.nav-tabs .tab-link').on('click', function(){
            var tab_id = $(this).attr('data-tab');
            $('.nav-tabs .tab-link').removeClass('active');
            $('.tab-pane').hide();
            $(this).addClass('active');
            $('#'+tab_id).fadeIn();
        });
    }

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

// Splide Slider
if ($('.splide:not(.splide-js)').length) {
    $('.splide:not(.splide-js)').each(function() {
        new Splide(this).mount();
        $(this).addClass('icw_splide-with-data'); // Mark as initialized
    });
}