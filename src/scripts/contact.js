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