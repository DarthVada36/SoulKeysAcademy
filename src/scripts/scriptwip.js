// BEGIN JS - WIP

//Selecciona el elemento con el id note, que es la figura dentro del juego donde se realizará la acción de salto.
document.addEventListener('DOMContentLoaded', () => { //no espera a que cargue toda la página
    const note = document.getElementById('note');
    let isJumping = false; // Variable controla si el personaje está en medio de un salto para evitar saltos múltiples simultáneos.

//Escucha el evento keydown para detectar cuando se presiona la tecla Space o ArrowUp
document.addEventListener('keydown', event => {
    if ((event.code === 'Space' || event.code === 'ArrowUp') && !isJumping) {
        event.preventDefault(); // Evita el comportamiento predeterminado (desplazamiento de la página)
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