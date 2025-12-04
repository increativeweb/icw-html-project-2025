/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();    

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 50) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 50) {
                $(".main-header").addClass("fixed-header");
            } else {
                $(".main-header").removeClass("fixed-header");
            }
        });  
        $('.sidebar-toggler').on('click',function(){
            $(".main-header .mobile-menu").addClass('is-open');
        });
        $('.menu-close').on('click',function(){
            $(".main-header .mobile-menu").removeClass('is-open');
        });
    }
    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a, li.menu-item-has-children > span").after('<i class="arrow"></i>');
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

});

if($('#searchInput').length) {
    var $input = $('#searchInput');
    var $resetInput = $('#resetInput');

    $input.on('input', function () {
        if ($(this).val().length) {
            $resetInput.show();
        } else {
            $resetInput.hide();
        }
    });

    $resetInput.on('click', function () {
        $input.val('');
        $resetInput.hide();
        $input.focus();
    });
}
if($('.select-brand').length) {
    $('.select-brand').select2({
        theme: 'bootstrap-5',
        closeOnSelect : false,
        placeholder : 'Filter By Brand',
        allowHtml: true,
        allowClear: true,
        tags: true
    });
}
if($('.select-topic').length) {
    $('.select-topic').select2({
        theme: 'bootstrap-5',
        closeOnSelect : false,
        placeholder : 'Filter By Topic / Job Role',
        allowHtml: true,
        allowClear: true,
        tags: true
    });
}

// Splide Slider
if ($('.splide:not(.splide-js)').length) {
    $('.splide:not(.splide-js)').each(function() {
        new Splide(this).mount();
        $(this).addClass('icw_splide-with-data'); // Mark as initialized
    });
}

// Video Player
if ($('.play-iframe').length){
    $('.play-iframe').click(function(ev){	
        videourl = $(this).data('videosrc')+"?api=1&autoplay=1&muted=1&rel=0&enablejsapi=1";
        if($(this).data('ext') == 'mp4'){
            video = '<div class="video-wrap"><video class="embed-responsive-item w-100" controls autoplay playsinline controlsList="nodownload" oncontextmenu="return false;"><source src="'+videourl+'" type="video/mp4"></video></div>';
        } else {
            video = '<div class="video-wrap"><iframe class="embed-responsive-item play-in_iframe" allow="autoplay" src="'+videourl+'" controls="0" scrolling="no" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe></div>';
        }
        
        $(this).parents('.media-block').html(video);
        ev.preventDefault();
    });
}