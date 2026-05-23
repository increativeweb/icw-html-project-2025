jQuery(document).ready(function ($) {
    if($('.img-gallery-splide').length) {
        new Splide( '.img-gallery-splide', {
            type: 'loop', 
            height: '424px', 
            gap: '30px', 
            perPage: 4, 
            perMove: 1,
            arrows: false,
            pagination: false,
            autoWidth: true,
            focus: 'center',
            autoScroll: {
                speed: 1
            },
            grid: {
                dimensions: [ [ 2, 1 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ],[ 2, 1 ], [ 1, 1 ], [ 1, 1 ] ], 
                gap: { 
                    row: '30px', 
                    col: '30px'
                }
            },
            breakpoints: { 
                1200: {
                    height: '300px',
                },
                992: {
                    perPage: 2,                    
                    focus: false,
                    gap: '20px',
                    height: '250px',
                    grid: {
                        dimensions: [ [ 2, 1 ], [ 1, 1 ], [ 2, 1 ], [ 1, 1 ],[ 2, 1 ], [ 1, 1 ] ], 
                        gap: { 
                            row: '20px', 
                            col: '20px'
                        }
                    },
                }
            }
        }).mount(window.splide.Extensions)
    }
});