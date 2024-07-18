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

// BEGIN JS - WIP

//Selecciona el elemento con el id note, que es la figura dentro del juego donde se realizará la acción de salto.
document.addEventListener('DOMContentLoaded', () => {
        const note = document.getElementById('note');
        let isJumping = false; // Variable controla si el personaje está en medio de un salto para evitar saltos múltiples simultáneos.

//Escucha el evento keydown para detectar cuando se presiona la tecla Space o ArrowUp
    document.addEventListener('keydown', event => {
        if ((event.code === 'Space' || event.code === 'ArrowUp') && !isJumping) {
            jump();
        }
    }); /*(if)Verifica si la tecla presionada es Space o ArrowUp y si no se está ejecutando ya un salto (!isJumping), entonces llama a la función jump().*/

    function jump() {
        isJumping = true; //Establece isJumping a true para evitar múltiples saltos simultáneos.
        let jumpHeight = 100; // Altura del salto en píxeles
        let jumpDuration = 300; // Duración del salto en milisegundos

        note.style.bottom = `${jumpHeight}px`; //Anima el cambio de posición del note al establecer note.style.bottom a la altura del salto.

        setTimeout(() => {
            note.style.bottom = '0';
            setTimeout(() => {
                isJumping = false;
            }, jumpDuration);
        }, jumpDuration);
    }
}); // luego de un tiempo (jumpDuration), devuelve el note a su posición original y restablece isJumping a false para permitir otro salto.

// END JS - WIP