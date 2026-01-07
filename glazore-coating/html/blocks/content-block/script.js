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
