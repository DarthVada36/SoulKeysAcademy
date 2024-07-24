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

// Typing text effect
const texts = document.querySelectorAll('.typingText');

function startEffect() {
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
    setTimeout(startEffect, delay);
};
startEffect();

// // Scrolling text effect
// const scrollingContainer = document.getElementById('scrollingContainer');
// const scrollingText = document.getElementById('scrollingText');
// let direction = -1;
// let position = 0;
// let speed = 1; // Velocidad inicial
// const normalSpeed = 1; // Velocidad normal
// const increasedSpeed = 5; // Velocidad aumentada
// const duration = 500; // Duración del cambio de velocidad al cambiar la dirección, en milisegundos

// // Clonar el texto en el JavaScript para que sea texto continuo
// const scrollingTextClone1 = scrollingText.cloneNode(true);
// const scrollingTextClone2 = scrollingTextClone1.cloneNode(true);
// scrollingContainer.appendChild(scrollingTextClone1);
// scrollingContainer.appendChild(scrollingTextClone2);

// function setInitialPosition() {
//     scrollingTextClone1.style.position = 'absolute';
//     scrollingTextClone1.style.left = `${scrollingText.offsetWidth}px`;
//     scrollingTextClone2.style.position = 'absolute';
//     scrollingTextClone2.style.left = `${scrollingText.offsetWidth + scrollingTextClone1.offsetWidth}px`;
// }

// function animate() {
//     position += speed * direction;
//     if (position <= -scrollingText.offsetWidth) {
//         position = 0;
//     } else if (position >= 0) {
//         position = -scrollingText.offsetWidth;
//     }
//     scrollingContainer.style.transform = `translateX(${position}px)`;
//     requestAnimationFrame(animate);
// }

// function changeDirection(deltaY) {
//     direction = deltaY > 0 ? -1 : 1;
//     speed = increasedSpeed;
//     setTimeout(() => {
//         speed = normalSpeed;
//     }, duration);
// }

// window.addEventListener('wheel', function(e) {
//     changeDirection(e.deltaY);
// });

// setInitialPosition();
// animate();
