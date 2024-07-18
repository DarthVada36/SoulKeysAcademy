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


// FEATURE-CONTACT PAGE JS

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message-m');
    const errorMessage = document.getElementById('error-message');
    const choseInstrument = document.getElementById

    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let valid = true;

    // Limpiar mensaje de error
    errorMessage.textContent = '';

    // Validación del nombre
    if (nameValue === "" || nameValue.length < 3 || nameValue.length > 100) {
        nameInput.classList.add('error');
        valid = false;
    } else {
        nameInput.classList.remove('error');
    }

    // Validación del teléfono
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneValue)) {
        phoneInput.classList.add('error');
        valid = false;
    } else {
        phoneInput.classList.remove('error');
    }

    // Validación del correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "" || !emailPattern.test(emailValue)) {
        emailInput.classList.add('error');
        valid = false;
    } else {
        emailInput.classList.remove('error');
    }

    // Validación del mensaje
    if (messageValue === "" || messageValue.length < 5 || messageValue.length > 400) {
        messageInput.classList.add('error');
        valid = false;
    } else {
        messageInput.classList.remove('error');
    }

    // Validación de instrumentos
    let instrumentSelected = false;
    instrumentInputs.forEach(function(input) {
        if (input.checked) {
            instrumentSelected = true;
        }
    });

    if (!instrumentSelected) {
        instrumentInputs.forEach(function(input) {
            input.classList.add('error');
        });
        valid = false;
    } else {
        instrumentInputs.forEach(function(input) {
            input.classList.remove('error');
        });
    }

    if (valid) {
        alert('Formulario enviado correctamente');
        // Aquí puedes añadir la lógica para enviar el formulario
        // form.submit(); // Descomenta esta línea si deseas enviar el formulario
    } else {
        errorMessage.textContent = 'Por favor, corrige los errores en el formulario.';
    }

    
});