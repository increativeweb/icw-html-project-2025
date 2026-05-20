jQuery(document).ready(function ($) {

    const ctaSection = document.querySelector('.cta-animation-section');
    const ctaBlock = document.querySelector('.cta-block');

    if (!ctaSection || !ctaBlock) return;

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                ctaBlock.classList.add('is-animate');
            } else {
                ctaBlock.classList.remove('is-animate'); // remove when out of viewport
            }

        });

    }, {
        threshold: 0.3 // trigger when 30% visible
    });

    observer.observe(ctaSection);

});