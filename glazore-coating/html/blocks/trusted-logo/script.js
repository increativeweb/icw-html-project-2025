document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.trusted-logo-block .logo-item').forEach(item => {
        const images = item.querySelectorAll('img');
        if (images.length <= 1) return;

        let index = 0;
        images[index].classList.add('is-active');

        setInterval(() => {
            const current = images[index];

            // STEP 1: zoom out current image
            current.classList.add('is-zoom-out');

            // STEP 2: after zoom-out, hide current and show next
            setTimeout(() => {
                current.classList.remove('is-active', 'is-zoom-out');

                index = (index + 1) % images.length;
                const next = images[index];

                next.classList.add('is-active'); // zoom in happens automatically
            }, 100); // must match CSS transition time
        }, 5000);
    });
});