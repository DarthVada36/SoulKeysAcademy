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
    const obstacle = document.getElementById('obstacle');
    const scoreElement = document.getElementById('score');
    const game = document.getElementById('game');

    let score = 0;
    let isJumping = false;
    let isGameOver = false;
    let gravity = 0.9;
    let notePosition = 0;
    let gameSpeed = 10;
    let obstaclePosition = 1000;

    function startGame() {
        score = 0;
        notePosition = 0;
        isJumping = false;
        isGameOver = false;
        obstaclePosition = 1000;

        document.addEventListener('keydown', control);
        obstacle.style.right = '-20px';
        moveObstacle();
        updateScore();
    }

    function control(e) {
        if (e.keyCode === 32 && !isJumping) { // Space key
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

    function moveObstacle() {
        if (isGameOver) return;

        let timerId = setInterval(() => {
            if (obstaclePosition < -20) {
                clearInterval(timerId);
                score++;
                obstaclePosition = 1000;
                moveObstacle();
            }
            if (obstaclePosition > 50 && obstaclePosition < 100 && notePosition < 50) {
                clearInterval(timerId);
                isGameOver = true;
                alert('Game Over! Your score is ' + score);
                document.location.reload();
            }
            obstaclePosition -= gameSpeed;
            obstacle.style.left = obstaclePosition + 'px';
        }, 20);
    }

    function updateScore() {
        setInterval(() => {
            if (!isGameOver) {
                score++;
                scoreElement.innerHTML = 'Score: ' + score;
            }
        }, 1000);
    }

    startGame();
});
