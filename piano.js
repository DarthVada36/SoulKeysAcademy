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
    keyPressCount = 0; // Reiniciar el contador después del alert
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
function showSheetMusic(sheetmusic) {
  let imagen = document.getElementById("sheetMusic");
  if (sheetmusic.target.value === "2") {
    imagen.setAttribute("src", "../public/assets/images/partituras/cumpleaños feliz.PNG")
  }
  if (sheetmusic.target.value === "3") {
    imagen.setAttribute("src", "../public/assets/images/partituras/parti1.PNG")
  }
  if (sheetmusic.target.value === "4") {
    imagen.setAttribute("src", "../public/assets/images/partituras/parti2.PNG")
  }
  if (sheetmusic.target.value === "5") {
    imagen.setAttribute("src", "../public/assets/images/partituras/parti3.PNG")
  }
  if (sheetmusic.target.value === "6") {
    imagen.setAttribute("src", "../public/assets/images/partituras/parti4.PNG")
  }
  if (sheetmusic.target.value === "1") {
    imagen.setAttribute("src", "../public/assets/images/partituras/noche de paz.PNG")
  }
}



//FUNCIÓN PARA SILENCIAR LAS NOTAS //
function StopNotas() {
  let sound = document.getElementById("sound");
  let sound2 = document.getElementById("sound2");
  let sound3 = document.getElementById("sound3");
  let sound4 = document.getElementById("sound4");
  let sound5 = document.getElementById("sound5");
  let sound6 = document.getElementById("sound6");
  let sound7 = document.getElementById("sound7");
  sound.pause();
  sound2.pause();
  sound3.pause();
  sound4.pause();
  sound5.pause();
  sound6.pause();
  sound7.pause();
}


// Arrays de teclas y notas
const keys = ['d', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const notes = ['../public/assets/sounds/piano/do1.mp3', '../public/assets/sounds/piano/re1.mp3', '../public/assets/sounds/piano/mi1.mp3', '../public/assets/sounds/piano/fa1.mp3', '../public/assets/sounds/piano/sol1.mp3', '../public/assets/sounds/piano/la1.mp3', '../public/assets/sounds/piano/si1.mp3', '../public/assets/sounds/piano/do1.mp3', '../public/assets/sounds/piano/re1.mp3', '../public/assets/sounds/piano/mi1.mp3', '../public/assets/sounds/piano/fa1.mp3', '../public/assets/sounds/piano/sol1.mp3', '../public/assets/sounds/piano/la1.mp3', '../public/assets/sounds/piano/si1.mp3'];
const drumNotes = ['../public/assets/sounds/bateria/bat1.mp3', 'bat2', 'bat3', 'bat4', 'bat5', 'bat6', 'bat7'];
const guitarNOtes = ['','','']
const fluteNotes = ['fla1', 'fla2', 'fla3', 'fla4', 'fla5', 'fla6', 'fla7'];


// Función para reproducir la nota
function reproduceNote(note) {
  let audio = new Audio(note);
  audio.play();
}


// FUNCIÓN PARA ELEGIR EL INSTRUMENTO A SONAR //

let currentNotes = notes;
document.getElementById('miSelectSound').addEventListener('change', function (event) {
  const miSelectSound = event.target.value;
  switch (miSelectSound) {
    case 'piano':
      currentNotes = notes;
      break;
    case 'drums':
      currentNotes = drumNotes;
      break;
    case 'guitar':
      currentNotes = drumNotes;
    case 'flute':
      currentNotes = fluteNotes;
      break;
    default:
      currentNotes = notes;
  }

});


document.addEventListener('click', function (clickMouse) {
  let target = clickMouse.target; // El elemento clicado

  // Verifica si el elemento clicado tiene un id que empieza con 'key-'
  if (target.id && target.id.startsWith('key-')) {
    let key = target.id.replace('key-', ''); // Obtiene la tecla del id del elemento

    if (keys.includes(key)) { // Verifica si la tecla está en el array 'keys'
      let index = keys.indexOf(key); // Obtiene el índice de la tecla
      let note = currentNotes[index]; // Obtiene la note correspondiente
      reproduceNote(note); // Reproduce la note

    }
  }
});


// Event listener para 'keydown'
document.addEventListener('keydown', function (preesKey) {
  let key = preesKey.key; // La tecla presionada

  if (keys.includes(key)) { // Verifica si la tecla está en el array 'keys'
    let index = keys.indexOf(key); // Obtiene el índice de la tecla
    let note = notes[index]; // Obtiene la note correspondiente
    reproduceNote(note); // Reproduce la note

    let teclaElement = document.getElementById('key-' + key);
    if (teclaElement) {
      teclaElement.classList.add('key-gray');
    }
  }

});



// Event listener para 'keyup'
document.addEventListener('keyup', function (keyUp) {
  let key = keyUp.key; // La tecla presionada


  if (keys.includes(key)) { // Verifica si la tecla está en el array 'teclas'
    let index = keys.indexOf(key); // Obtiene el índice de la tecla
    let note = notes[index]; // Obtiene la note correspondiente
    StopNotas(note); // silencia la nota

    let teclaElement = document.getElementById('key-' + key);
    if (teclaElement) {
      teclaElement.classList.remove('key-gray');
    }
  }

});



