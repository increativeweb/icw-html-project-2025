document.addEventListener('DOMContentLoaded', () => {
    const logoItems = Array.from(
        document.querySelectorAll('.trusted-logo-block .logo-item')
    ).filter(item => item.querySelectorAll('img').length > 1);

    if (!logoItems.length) return;

    const state = new Map();
    logoItems.forEach(item => {
        const imgs = item.querySelectorAll('img');
        imgs[0].classList.add('is-active');
        state.set(item, 0);
    });

    let lastIndex = -1;

    setInterval(() => {
        // 🎲 pick random logo-item (not same as last)
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * logoItems.length);
        } while (randomIndex === lastIndex && logoItems.length > 1);

        lastIndex = randomIndex;

        const item = logoItems[randomIndex];
        const images = item.querySelectorAll('img');
        let currentIndex = state.get(item);

        const current = images[currentIndex];
        current.classList.add('is-zoom-out');

        setTimeout(() => {
            current.classList.remove('is-active', 'is-zoom-out');

            currentIndex = (currentIndex + 2) % images.length;
            images[currentIndex].classList.add('is-active');
            state.set(item, currentIndex);
        }, 800); // match CSS transition

    }, 2000); // random logo every 2s
});
