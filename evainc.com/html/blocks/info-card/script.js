// jQuery(document).ready(function ($) {
//     if ($('.info-card-splide').length) {

//         var infoCardSplide = new Splide('.info-card-splide', {
//             type: 'loop',
//             gap: '30px',
//             arrows: true,
//             pagination: false,
//             autoplay: true,
//             interval: 5000,
//             speed: 1000,
//             perPage: 3,
//             perMove: 1,
//             start: 0,
//             focus: 0,
//             trimSpace: false,
//             updateOnMove: true,
//             breakpoints: {
//                 1200: {
//                     perPage: 2,
//                     autoWidth: true,
//                     focus: 0,
//                 },
//                 767: {
//                     perPage: 1,
//                     gap: '20px',
//                 },
//             }
//         });
//         infoCardSplide.on('move', function () {
//             $('.info-card-splide').removeClass('hide-prev-clone');
//         });
//         infoCardSplide.mount();
//     }

// });
jQuery(document).ready(function ($) {

    const infoCardSplide = new Splide('.info-card-splide', {
        type: 'loop',
        gap: '30px',
        arrows: true,
        pagination: false,
        autoplay: true,
        interval: 10000,
        speed: 1000,
        perPage: 3,
        perMove: 1,
        focus: 0,
        trimSpace: false,
        updateOnMove: true,
        breakpoints: {
            1200: {
                perPage: 2,
                autoWidth: true,
            },
            767: {
                perPage: 1,
                gap: '20px',
            },
        }
    });

    // Change DURING slide move
    infoCardSplide.on('move', function (newIndex) {
        $('.info-card-splide').removeClass('hide-prev-clone');
    });

    infoCardSplide.mount();

});