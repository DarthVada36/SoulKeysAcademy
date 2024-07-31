// BEGIN JS - WIP
import {burgerMenu} from './main.js';

// Burger menu
burgerMenu();

// Función para obtener el valor del parámetro en la URL
function getParametroURL(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// Obtener el instrumento seleccionado
const instrument = getParametroURL('instrument');

// Cambiar el fondo según el instrumento
switch (instrument) {
    case 'guitar':
        document.body.style.backgroundImage = "url('../public/assets/images/guitar/instrument-icon.png')";
        break;
    case 'drums':
        document.body.style.backgroundImage = "url('../public/assets/images/drum-set-icon.png')";
        break;
    case 'tuba':
        document.body.style.backgroundImage = "url('../public/assets/images/tuba-icon.png')";
        break;

    /*default:
            document.body.style.backgroundImage = "none";
            break;*/
}

document.addEventListener('DOMContentLoaded', () => {
    const note = document.getElementById('note');
    let isJumping = false;

    document.addEventListener('keydown', event => {
        if ((event.code === 'Space' || event.code === 'ArrowUp') && !isJumping) {
            jump();
        }
    });

    function jump() {
        isJumping = true;
        let jumpHeight = 100; // Altura del salto en píxeles
        let jumpDuration = 300; // Duración del salto en milisegundos

        note.style.bottom = `${jumpHeight}px`;

        setTimeout(() => {
            note.style.bottom = '0';
            setTimeout(() => {
                isJumping = false;
            }, jumpDuration);
        }, jumpDuration);
    }
});