// Luminous effect
const luminousEffect = document.querySelector('.luminousEffect');
const sizeLight = 400;

luminousEffect.style.background = `radial-gradient(circle at 22% 50%, transparent 0%, rgba(0, 0, 0, 0.9) ${sizeLight}px)`;

luminousEffect.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    luminousEffect.style.cursor = "none";
    luminousEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, rgba(0, 0, 0, 0.9) ${sizeLight}px)`;
});

// Scrolling text effect
document.addEventListener('DOMContentLoaded', function() {
    const scrollingContainer = document.getElementById('scrollingContainer');
    const scrollingText = document.getElementById('scrollingText');
    let direction = -1;
    let position = 0;
    let speed = 1; // Velocidad inicial
    const normalSpeed = 1; // Velocidad normal
    const increasedSpeed = 5; // Velocidad aumentada
    const duration = 500; // Duración del cambio de velocidad al cambiar la dirección, en milisegundos

    // Clonar el texto en el JavaScript para que sea texto continuo
    const scrollingTextClone = scrollingText.cloneNode(true);
    scrollingContainer.appendChild(scrollingTextClone);

    function setInitialPosition() {
        scrollingTextClone.style.position = 'absolute';
        scrollingTextClone.style.left = `${scrollingText.offsetWidth}px`;
    }

    function animate() {
        position += speed * direction;
        if (position <= -scrollingText.offsetWidth) {
            position = 0;
        } else if (position >= 0) {
            position = -scrollingText.offsetWidth;
        }
        scrollingContainer.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    function changeDirection(deltaY) {
        direction = deltaY > 0 ? -1 : 1;
        speed = increasedSpeed;
        setTimeout(() => {
            speed = normalSpeed;
        }, duration);
    }

    window.addEventListener('wheel', function(e) {
        changeDirection(e.deltaY);
    });

    setInitialPosition();
    animate();
});