// contact.js
import { burgerMenu, typingEffectVariousLines } from './main.js';

// Burger menu
burgerMenu();

// Typing effect
const typing = document.querySelectorAll('.titleInstruments');
typingEffectVariousLines(typing);

// SCORES JS
let previewContainer = document.querySelector('.scores-preview');
let previewBox = previewContainer.querySelectorAll('.preview-s');

document.querySelectorAll('.scores-container .score').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.ri-close-fill').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

