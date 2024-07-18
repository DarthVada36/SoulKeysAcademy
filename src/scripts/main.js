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

// Typing text effect
const texts = document.querySelectorAll('.typingText');

function startEffect() {
    let delay = 0;
    texts.forEach((text, i) => {
        setTimeout(() => {
            text.style.visibility = 'visible';
            text.style.animation = `typingForward 3s steps(30, end)`;
        }, delay);
        delay += 2800;

        setTimeout(() => {
            text.style.animation = 'typingBackward 2s steps(30, end)'; // Reset animation
        }, 13000);
        setTimeout(() => {
            text.style.visibility = 'hidden';
        }, 15000);
    });
    setTimeout(startEffect, 16000);
};
startEffect();

// Scrolling text effect
const scrollingContainer = document.getElementById('scrollingContainer');
const scrollingText = document.getElementById('scrollingText');
let direction = -1;
let position = 0;
let speed = 1; // Velocidad inicial
const normalSpeed = 1; // Velocidad normal
const increasedSpeed = 5; // Velocidad aumentada
const duration = 500; // Duración del cambio de velocidad al cambiar la dirección, en milisegundos

// Clonar el texto en el JavaScript para que sea texto continuo
const scrollingTextClone1 = scrollingText.cloneNode(true);
const scrollingTextClone2 = scrollingTextClone1.cloneNode(true);
scrollingContainer.appendChild(scrollingTextClone1);
scrollingContainer.appendChild(scrollingTextClone2);

function setInitialPosition() {
    scrollingTextClone1.style.position = 'absolute';
    scrollingTextClone1.style.left = `${scrollingText.scrollWidth}px`;
    scrollingTextClone2.style.position = 'absolute';
    scrollingTextClone2.style.left = `${scrollingText.scrollWidth + scrollingTextClone1.scrollWidth}px`;
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
