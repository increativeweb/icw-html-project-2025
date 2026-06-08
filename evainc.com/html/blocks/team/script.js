const cursor = document.getElementById('cursor');
const label = document.getElementById('cursorLabel');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Easing — lower = more lag, higher = snappier follow
const easing = 0.18;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth lerp follow
function animate() {
  cursorX += (mouseX - cursorX) * easing;
  cursorY += (mouseY - cursorY) * easing;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animate);
}
animate();

document.querySelectorAll('.team-user-img img').forEach(el => {
    // const type = el.dataset.cursor; // "view" or "drag"
    // const text = type === 'view' ? 'View' : 'Drag';
    const text = 'View';
    
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-view');
        label.textContent = text;
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-view');
        label.textContent = '';
    });
});