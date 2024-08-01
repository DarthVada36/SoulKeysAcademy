// BEGIN JS - WIP

import {burgerMenu} from './main.js';

// Burger menu
burgerMenu();

// Función para obtener el valor del parámetro en la URL, para cambiar bg 
function getParametroURL(parametro) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parametro);
}

// Obtener el instrumento seleccionado
const instrument = getParametroURL('instrument');
const wip = document.querySelector('.work-in-progress')

// Cambiar el fondo según el instrumento
switch (instrument) {
    case 'guitar':
        wip.style.backgroundImage = "url(../public/assets/images/guitar-instrument-icon.png)";
        break;
    case 'drums':
        document.body.style.backgroundImage = "url(../public/assets/images/drum-set-icon.png)";
        break;
    case 'tuba':
        document.body.style.backgroundImage = "url(../public/assets/images/tuba-icon.png)";
        break;

    default:
            document.body.style.backgroundImage = "none";
            break;
}


document.addEventListener('DOMContentLoaded', () => {
    const note = document.getElementById('note');
    const game = document.getElementById('game');

    let isJumping = false;
    let gravity = 0.9;
    let notePosition = 0;

    function control(e) {
        if ((e.keyCode === 32 || e.type === 'touchstart') && !isJumping) { // Space key o touchstart
            jump();
        }
    }

    function jump() {
        let count = 0;
        isJumping = true;

        let upTimerId = setInterval(() => {
            if (count === 15) {
                clearInterval(upTimerId);
                let downTimerId = setInterval(() => {
                    if (count === 0) {
                        clearInterval(downTimerId);
                        isJumping = false;
                    }
                    notePosition -= 5;
                    count--;
                    notePosition = notePosition * gravity;
                    note.style.bottom = notePosition + 'px';
                }, 20);
            }
            notePosition += 30;
            count++;
            notePosition = notePosition * gravity;
            note.style.bottom = notePosition + 'px';
        }, 20);
    }

    document.addEventListener('keydown', control);
    document.addEventListener('touchstart', control, { passive: true }); // Agregar evento touchstart como pasivo
});
//ends JS
