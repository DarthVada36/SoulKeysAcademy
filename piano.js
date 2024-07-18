// Mostrar el modal cuando se carga la página
window.onload = function () {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("modal__close")[0];
    modal.style.display = "flex";
  
    // Cerrar el modal cuando el usuario hace clic en (x)
    span.onclick = function () {
      modal.style.display = "none";
    }
  
  }
  // Contador de pulsaciones de teclas y MODAL
  let keyPressCount = 0;
  document.addEventListener('keypress', function () {
    keyPressCount++;
    if (keyPressCount === 60) {
      keypressModal = document.getElementById("keypressModal");
      keypressModal.style.display = "flex";
      keyPressCount = 0; // Reiniciar el contador si deseas seguir contando después del alert
    }
  });
  
  // FUNCIÓN PARA HACER CLICK EN LA 'X' Y CERRAR EL MODAL
  let spans = document.getElementsByClassName("modal__close");
  
  for (let i = 0; i < spans.length; i++) {
      spans[i].onclick = function () {
          keypressModal.style.display = "none";
      }
  }
  
 
  
  // FUNCIÓN PARA ELEGIR QUE PARTITURA MOSTRAR  //
  function mostrarPartitura(partitura) {
    let imagen = document.getElementById("partitura");
    if (partitura.target.value === "2") {
      imagen.setAttribute("src", "../public/assets/images/partituras/cumpleaños feliz.PNG")
    }
    if (partitura.target.value === "3") {
      imagen.setAttribute("src", "../public/assets/images/partituras/parti1.PNG")
    }
    if (partitura.target.value === "4") {
      imagen.setAttribute("src", "../public/assets/images/partituras/parti2.PNG")
    }
    if (partitura.target.value === "5") {
      imagen.setAttribute("src", "../public/assets/images/partituras/parti3.PNG")
    }
    if (partitura.target.value === "6") {
      imagen.setAttribute("src", "../public/assets/images/partituras/parti4.PNG")
    }
    if (partitura.target.value === "1") {
      imagen.setAttribute("src", "../public/assets/images/partituras/parti5.PNG")
    }
  }


//FUNCIÓN PARA SILENCIAR LAS NOTAS //
function StopNotas(){
    let sonido = document.getElementById("sonido");
    let sonido2 = document.getElementById("sonido2");
    let sonido3 = document.getElementById("sonido3");
    let sonido4 = document.getElementById("sonido4");
    let sonido5 = document.getElementById("sonido5");
    let sonido6 = document.getElementById("sonido6");
    let sonido7 = document.getElementById("sonido7");
    sonido.pause();
    sonido2.pause();
    sonido3.pause();
    sonido4.pause();
    sonido5.pause();
    sonido6.pause();
    sonido7.pause();
  }


// Arrays de teclas y notas
const teclas = ['d', 'f', 'g', 'h','j','k','l','z','x','c','v','b','n','m'];
const notas = ['../public/assets/sounds/piano/do1.mp3', '../public/assets/sounds/piano/re1.mp3', '../public/assets/sounds/piano/mi1.mp3', '../public/assets/sounds/piano/fa1.mp3','../public/assets/sounds/piano/sol1.mp3','../public/assets/sounds/piano/la1.mp3','../public/assets/sounds/piano/si1.mp3','../public/assets/sounds/piano/do1.mp3', '../public/assets/sounds/piano/re1.mp3', '../public/assets/sounds/piano/mi1.mp3', '../public/assets/sounds/piano/fa1.mp3','../public/assets/sounds/piano/sol1.mp3','../public/assets/sounds/piano/la1.mp3','../public/assets/sounds/piano/si1.mp3'];
const notasBateria = ['./assets/sounds/batewria/bat1.mp3','bat2','bat3','bat4','bat5','bat6','bat7'];
const notasFlauta = ['fla1','fla2','fla3','fla4','fla5','fla6','fla7'];


// Función para reproducir la nota
function reproducirNota(nota) {
    let audio = new Audio(nota);
    audio.play();
}


// Event listener para 'keydown'
document.addEventListener('keydown', function(pulsarTecla) {
    let key = pulsarTecla.key; // La tecla presionada

    if (teclas.includes(key)) { // Verifica si la tecla está en el array 'teclas'
        let indice = teclas.indexOf(key); // Obtiene el índice de la tecla
        let nota = notas[indice]; // Obtiene la nota correspondiente
        reproducirNota(nota); // Reproduce la nota
        
        let teclaElement = document.getElementById('tecla-' + key);
        if (teclaElement) {
            teclaElement.classList.add('key-gray');
        }
    } 

});

// Event listener para 'keyup'
document.addEventListener('keyup', function(soltarTecla) {
    let key = soltarTecla.key; // La tecla presionada

    if (teclas.includes(key)) { // Verifica si la tecla está en el array 'teclas'
        let indice = teclas.indexOf(key); // Obtiene el índice de la tecla
        let nota = notas[indice]; // Obtiene la nota correspondiente
        StopNotas(nota); // silencia la nota
        
        let teclaElement = document.getElementById('tecla-' + key);
        if (teclaElement) {
            teclaElement.classList.remove('key-gray');
        }
    } 

});
