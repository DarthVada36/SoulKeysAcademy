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
    event.preventDefault(); // Prevents forms submitting 

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message-m');
    const instrumentInputs = document.querySelectorAll('input[name="instrument"]');

    const nameError = document.getElementById('name-error');
    const phoneError = document.getElementById('phone-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const instrumentError = document.getElementById('instrument-error');

    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let valid = true;

    // Clean error messages
    nameError.textContent = '';
    phoneError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    instrumentError.textContent = '';

    // Name validation
    if (nameValue === "" || nameValue.length < 3 || nameValue.length > 100) {
        nameInput.classList.add('error');
        nameError.textContent = 'El nombre debe tener entre 3 y 100 caracteres.';
        valid = false;
    } else {
        nameInput.classList.remove('error');
    }

    // Phone Validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneValue)) {
        phoneInput.classList.add('error');
        phoneError.textContent = 'El teléfono debe tener 9 dígitos.';
        valid = false;
    } else {
        phoneInput.classList.remove('error');
    }

    // Mail Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "" || !emailPattern.test(emailValue)) {
        emailInput.classList.add('error');
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        valid = false;
    } else {
        emailInput.classList.remove('error');
    }

    // Message Validation
    if (messageValue === "" || messageValue.length < 5 || messageValue.length > 400) {
        messageInput.classList.add('error');
        messageError.textContent = 'El mensaje debe tener entre 5 y 400 caracteres.';
        valid = false;
    } else {
        messageInput.classList.remove('error');
    }

    // Instrument Validation
    let instrumentSelected = false;
    instrumentInputs.forEach(function(input) {
        if (input.checked) {
            instrumentSelected = true;
        }
    });

    if (!instrumentSelected) {
        instrumentError.textContent = 'Por favor, selecciona al menos un instrumento.';
        valid = false;
    } else {
        instrumentError.textContent = '';
    }

    if (valid) {
        alert('Formulario enviado correctamente');
        // Logic test Validation
        // form.submit(); // Uncomment to make form
    } else {
        // No additional messages necesary
    }
});