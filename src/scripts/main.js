// Hero luminous effect
const luminousEffect = document.querySelector('.luminousEffect');
const sizeLight = 400;

// luminousEffect.style.background = `radial-gradient(circle at 22% 50%, transparent 0%, rgba(0, 0, 0, 0.9) ${sizeLight}px)`;

luminousEffect.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // luminousEffect.style.cursor = "none";
    luminousEffect.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 0%, rgba(0, 0, 0, 0.9) ${sizeLight}px)`;
});

luminousEffect.addEventListener('mouseleave', (e) => {
    luminousEffect.style.background = 'none'
})


// Hero ripple effect
// const imageContainer = document.querySelector('.container__hero');

// imageContainer.addEventListener('mousemove', function (e) {
//     const ripple = document.createElement('div');
//     ripple.classList.add('ripple');
//     imageContainer.appendChild(ripple);

//     const size = 60;
//     ripple.style.width = ripple.style.height = `${size}px`;
//     ripple.style.left = `${e.clientX}px`;
//     ripple.style.top = `${e.clientY}px`;

//     ripple.addEventListener('animationend', () => {
//         ripple.remove();
//     });
// });

// Typing text effect: Efecto typing para varias líneas
function typingEffectVariousLines(texts) {
    let delay = 0;

    texts.forEach((text, i) => {
        setTimeout(() => {
            text.style.visibility = 'visible';
            text.style.animation = 'typing 2s steps(20), blink .5s step-end infinite alternate';
        }, delay);
        delay += 2000;
        
        setTimeout(() => {
            if (i == texts.length - 1) {
                text.style.animation = 'blink .5s step-end infinite alternate'; // Dejar animación blink solo al último elemento
            } else {
                text.style.animation = 'none'; // Reset animation
            }
        }, delay);
    });
    delay += 2000;

    for (let i=texts.length - 1; i>=0; i--) {
        setTimeout(() => {
            texts[i].style.animation = 'typing 1s steps(20) reverse, blink .5s step-end infinite alternate'; // animación en reversa
        }, delay);
        delay += 1000;
        
        setTimeout(() => {
            texts[i].style.visibility = 'hidden';
            texts[i].style.animation = 'none';
        }, delay);
    };
    delay += 1000;
    setTimeout(() => typingEffectVariousLines(texts), delay);
};
// Texto en el Hero
const heroText = document.querySelectorAll('.heroText');
typingEffectVariousLines(heroText);
// Título de la intro
const titleIntro = document.querySelectorAll('.titleIntro');
typingEffectVariousLines(titleIntro);
// Título de sección de instrumentos (home)
const titleInstruments = document.querySelectorAll('.titleInstruments');
typingEffectVariousLines(titleInstruments);

// Scrolling text effect
// Obtener los elementos del DOM
const scrollingContainer = document.getElementById('scrollingContainer');
const scrollingText = document.getElementById('scrollingText');
// Variables de desplazamiento
let direction = -1; // Dirección inicial: -1 para izquierda, 1 para derecha
let position = 0;
let speed = 1; // Velocidad inicial de desplazamiento
const normalSpeed = 1; // Velocidad normal
const increasedSpeed = 5; // Velocidad aumentada al cambiar de dirección
const duration = 500; // Duración del cambio de velocidad al cambiar la dirección, en milisegundos

// Clonar el texto para para crear una apariencia continua
const scrollingTextClone1 = scrollingText.cloneNode(true);
const scrollingTextClone2 = scrollingText.cloneNode(true);
scrollingContainer.appendChild(scrollingTextClone1);
scrollingContainer.appendChild(scrollingTextClone2);

// Posicionar inicialmente los clones
function setInitialPosition() {
    scrollingTextClone1.style.position = 'absolute';
    scrollingTextClone1.style.left = `${scrollingText.scrollWidth}px`;
    scrollingTextClone2.style.position = 'absolute';
    scrollingTextClone2.style.left = `${scrollingText.scrollWidth + scrollingTextClone1.offsetWidth}px`;
}

// Función de animación para mover el texto
function animate() {
    position += speed * direction;
    if (position <= -scrollingText.scrollWidth) {
        position = 0;
    } else if (position >= 0) {
        position = -scrollingText.scrollWidth;
    }
    // Aplicar transformación para el movimiento
    scrollingText.style.transform = `translateX(${position}px)`;
    scrollingTextClone1.style.transform = `translateX(${position}px)`;
    scrollingTextClone2.style.transform = `translateX(${position}px)`;
    // Repetir la animación
    requestAnimationFrame(animate);
}

// Cambiar la dirección de desplazamiento al hacer scroll
function changeDirection(deltaY) {
    direction = deltaY > 0 ? -1 : 1;
    speed = increasedSpeed; // Aumentar velocidad temporalmente
    setTimeout(() => {
        speed = normalSpeed; // Restablecer velocidad normal
    }, duration);
}

// Evento para cambiar dirección al hacer scroll con la rueda del ratón
window.addEventListener('wheel', function(e) {
    changeDirection(e.deltaY);
});

    setInitialPosition();
    animate();
});
