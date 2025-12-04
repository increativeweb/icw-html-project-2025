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