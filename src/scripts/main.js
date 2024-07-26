//NAV BAR JS
export function burgerMenu() {
    const nav = document.querySelector("#nav");
    const Abrir = document.querySelector("#Abrir");
    const Cerrar = document.querySelector("#Cerrar");
    
    Abrir.addEventListener("click", () => {
        nav.classList.add("visible");
        Abrir.style.visibility = "hidden";
    })
    
    Cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        Abrir.style.visibility = "visible";
    })
};

// Typing text effect: Efecto typing para varias líneas
function typingEffectVariousLines(texts) {
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
    setTimeout(() => typingEffectVariousLines(texts), delay);
};
export { typingEffectVariousLines };