jQuery(document).ready(function ($) {
    var infoSplide = new Splide('.hero-info-splide', {
        type: 'fade',
        rewind: true,
        arrows: false,
        pagination: false,
        drag: false,
        autoplay: true,
        interval: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    var mediaSplide = new Splide('.hero-media-splide', {
        type: 'fade',
        rewind: true,
        arrows: false,
        pagination: false,
        drag: false,
    });    
    infoSplide.sync(mediaSplide);
    infoSplide.mount();
    mediaSplide.mount();
    const $paginationItems = $('.custom-pgination ul li');
    function updatePagination() {
        let index = infoSplide.index;

        $paginationItems.removeClass('is-active');
        $paginationItems.eq(index).addClass('is-active');
    }
    $paginationItems.on('click', function (e) {
        e.preventDefault();
        let index = $(this).index();
        infoSplide.Components.Autoplay.pause();
        infoSplide.go(index);
        updatePagination();
        setTimeout(() => {
            infoSplide.Components.Autoplay.play();
        }, 5000);
    });
    infoSplide.on('mounted move', function () {
        updatePagination();
    });
    updatePagination();
});