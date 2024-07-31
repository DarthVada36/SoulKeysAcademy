// //NAV BAR JS
// const nav = document.querySelector("#nav");
// const Abrir = document.querySelector("#Abrir");
// const Cerrar = document.querySelector("#Cerrar");

// Abrir.addEventListener("click", () => {
//     nav.classList.add("visible");
// })

// Cerrar.addEventListener("click", () => {
//     nav.classList.remove("visible");
// })


//contact.js
import { burgerMenu, typingEffectVariousLines } from './main.js';

//Burger menu
burgerMenu();

//Typing effect
const typing = document.querySelectorAll('.titleInstruments');
typingEffectVariousLines(typing);


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




// Sounds at checkboxes

document.addEventListener("DOMContentLoaded", function() {
    const instrumentSounds = {
        piano: { sound: new Audio('../public/assets/sounds/piano.mp3'), count: 0 },
        guitarra: { sound: new Audio('../public/assets/sounds/guitar.mp3'), count: 0 },
        bateria: { sound: new Audio('../public/assets/sounds/drum.mp3'), count: 0 },
        tuba: { sound: new Audio('../public/assets/sounds/tuba.mp3'), count: 0 },
        otro: { sound: new Audio('../public/assets/sounds/other.mp3'), count: 0 }
    };

    const maxPlays = 3;

    const checkboxes = document.querySelectorAll('input[name="instrument"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                let soundObj = instrumentSounds[this.id];
                if (soundObj.count < maxPlays) {
                    let soundClone = soundObj.sound.cloneNode();
                    soundObj.count++;
                    soundClone.play();
                    soundClone.addEventListener('ended', () => {
                        soundObj.count--;
                    });
                }
            }
        });
    });
});

