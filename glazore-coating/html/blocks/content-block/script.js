document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.media-block');

    if (!blocks.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                } else {
                    entry.target.classList.remove('is-active');
                }
            });
        },
        {
            threshold: 0.4,
        }
    );

    blocks.forEach(block => observer.observe(block));
});
if (jQuery('.image-splide').length) {
    document.querySelectorAll('.image-splide').forEach(slider => {
        const splide = new Splide(slider, {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            pagination: true,
            arrows: false,
            updateOnMove: true,

        });

        splide.mount();

        jQuery(window).on('resize', () => {
            splide.refresh();
        });
    });
}