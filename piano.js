// FUNCIÓN PARA MOSTRAR EL MODAL CON TIP CUANDO SE CARGAR LA PÁGINA
window.onload = function () {
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("modal__close")[0];
  modal.style.display = "flex";

  // Cerrar el modal cuando el usuario hace clic en (x)
  span.onclick = function () {
    modal.style.display = "none";
  }

}
// CONTADOR DE PULSACIONES DE TECLAS y MODAL PARA OFRECER PLANES
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
function showSheetMusic(sheetmusic) {   // Cuando el usuario selecciona un elemento del select el evento onchange del HTML activa esta función
  let image = document.getElementById("sheetMusic");  //Obtenemos el elemento del HTML que tiene el id sheetMusic y se almacena en image
  if (sheetmusic.target.value === "2") {    //Aquí decimos si la opción seleccionada en el select es la 2
    image.setAttribute("src", "../public/assets/images/partituras/cumpleaños feliz.PNG")  //La imagen a mostrar va a ser la de la ruta especificada entre paréntesis, "src" hace referencia al atributo que queremos que cambie, "src" es la dirección d ela imágen a mostrar
  }
  if (sheetmusic.target.value === "3") {
    image.setAttribute("src", "../public/assets/images/partituras/parti1.PNG")
  }
  if (sheetmusic.target.value === "4") {
    image.setAttribute("src", "../public/assets/images/partituras/parti2.PNG")
  }
  if (sheetmusic.target.value === "5") {
    image.setAttribute("src", "../public/assets/images/partituras/parti3.PNG")
  }
  if (sheetmusic.target.value === "6") {
    image.setAttribute("src", "../public/assets/images/partituras/parti4.PNG")
  }
  if (sheetmusic.target.value === "1") {
    image.setAttribute("src", "../public/assets/images/partituras/noche de paz.PNG")
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


// ARRAYS QUE CONTIENEN TECLAS Y NOTAS
const keys = ['d', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const notes = ['../public/assets/sounds/piano/do1.mp3', '../public/assets/sounds/piano/re1.mp3', '../public/assets/sounds/piano/mi1.mp3', '../public/assets/sounds/piano/fa1.mp3', '../public/assets/sounds/piano/sol1.mp3', '../public/assets/sounds/piano/la1.mp3', '../public/assets/sounds/piano/si1.mp3', '../public/assets/sounds/piano/do1.mp3', '../public/assets/sounds/piano/re1.mp3', '../public/assets/sounds/piano/mi1.mp3', '../public/assets/sounds/piano/fa1.mp3', '../public/assets/sounds/piano/sol1.mp3', '../public/assets/sounds/piano/la1.mp3', '../public/assets/sounds/piano/si1.mp3'];
const drumNotes = ['../public/assets/sounds/bateria/Batdo.mp3', '../public/assets/sounds/bateria/Batre.mp3', '../public/assets/sounds/bateria/Batmi.mp3', '../public/assets/sounds/bateria/Batfa.mp3', '../public/assets/sounds/bateria/Batsol.mp3', '../public/assets/sounds/bateria/Batla.mp3', '../public/assets/sounds/bateria/Batsi.mp3','../public/assets/sounds/bateria/Batplado.mp3', '../public/assets/sounds/bateria/Batplare.mp3', '../public/assets/sounds/bateria/Batplami.mp3', '../public/assets/sounds/bateria/Batplafa.mp3', '../public/assets/sounds/bateria/Batplasol.mp3', '../public/assets/sounds/bateria/Batplala.mp3', '../public/assets/sounds/bateria/Batplasi.mp3'];
const guitarNotes = ['../public/assets/sounds/guitarra/Guido.mp3','../public/assets/sounds/guitarra/Guire.mp3','../public/assets/sounds/guitarra/Guimi.mp3','../public/assets/sounds/guitarra/Guifa.mp3','../public/assets/sounds/guitarra/Guisol.mp3','../public/assets/sounds/guitarra/Guila.mp3','../public/assets/sounds/guitarra/Guisi.mp3']
const fluteNotes = ['../public/assets/sounds/panflute/Fludo.mp3', '../public/assets/sounds/panflute/Flure.mp3', '../public/assets/sounds/panflute/Flumi.mp3', '../public/assets/sounds/panflute/Flufa.mp3', '../public/assets/sounds/panflute/Flusol.mp3', '../public/assets/sounds/panflute/Flula.mp3', '../public/assets/sounds/panflute/Flusi.mp3'];


// FUNCIÓN PARA REPRODUCIR LA NOTA
function reproduceNote(note) {
  let audio = new Audio(note);
  audio.play();
}


// FUNCIÓN PARA ELEGIR EL INSTRUMENTO A SONAR CON CONTROL DE FLUJO SWITCH//
let currentNotes = notes;
document.getElementById('miSelectSound').addEventListener('change', function (changing) {  //Selecciona el elemento HTML que tiene el id mySelectSound(es nuestro select) - luego decimos al elemento(mySelectSound) que se le aplique el evento 'change' que funciona cada vez que cambia el valor del select - y luego tenemos la función changing que se ejecuta cuando ocurre el evento 'change'
  const mySelectedSound = changing.target.value;  //Creamos la variable myselectedSound que almacena el valor de la opción que se selecciona de entre los values del select del HTML-changing=función,target=mySelectSound y value=el valor de la opción seleccionada.
  switch (mySelectedSound) {   //Con el control de flujo switch vamos diciendo en caso de que el valor seleccionado sea piano, vete al array notes, si el valor seleccionado es drums vete al array drumNotes y así....y si no por defecto vete al array notes
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


// FUNCIÓN PARA QUE SUENEN LAS NOTAS AL HACER CLICK CON EL MOUSE //
document.addEventListener('click', function (clickMouse) {
  let target = clickMouse.target; // El elemento clicado

  // Verifica si el elemento clicado tiene un id que empieza con 'key-'
  if (target.id && target.id.startsWith('key-')) {
    let key = target.id.replace('key-', ''); // Obtiene la tecla del id del elemento

    if (keys.includes(key)) { // Verifica si la tecla está en el array 'keys'
      let index = keys.indexOf(key); // Obtiene el índice de la tecla
      let note = currentNotes[index]; // Obtiene la note de la posición correspondiente
      reproduceNote(note); // Reproduce la note

    }
  }
});


// FUNCIÓN PARA QUE SUENEN LAS NOTAS AL PRESIONAR LAS TECLAS Y SE PONGA GRIS LA TECLA QUE SE TOQUE
document.addEventListener('keydown', function (preesKey) {
  let key = preesKey.key; // La tecla presionada

  if (keys.includes(key)) { // Verifica si la tecla está en el array 'keys'
    let index = keys.indexOf(key); // Obtiene el índice de la tecla
    let note = currentNotes[index]; // Obtiene la note de la posición correspondiente
    reproduceNote(note); // Reproduce la note

    let keyElement = document.getElementById('key-' + key); // Traemos el elemento del HTML que tenga el ID de key-letra y lo almacenamos en keyElement
    if (keyElement) {  //Aquí verificamos que keyElement existe y si keyElement existe... (por ejemplo key-d que es el id de la tecla d)
      keyElement.classList.add('key-gray'); //Decimos a keyElement aplícale la clase key-gray que tenemos creada en stylesPiano.css
    }
  }

});



// FUNCIÓN PARA QUE DEJEN DE SONAR LAS NOTAS AL DEJAR DE PRESIONAR LAS TECLAS Y SE QUITE EL GRIS
document.addEventListener('keyup', function (keyUp) {
  let key = keyUp.key; // La tecla presionada


  if (keys.includes(key)) { // Verifica si la tecla está en el array 'teclas'
    let index = keys.indexOf(key); // Obtiene el índice de la tecla
    let note = currentNotes[index]; // Obtiene la note correspondiente
    StopNotas(note); // silencia la nota

    let keyElement = document.getElementById('key-' + key);  // Traemos el elemento del HTML que tenga el ID de key-letra y lo almacenamos en keyElement
    if (keyElement) {   //Aquí verificamos que keyElement existe y si keyElement existe... (por ejemplo key-d que es el id de la tecla d)
      keyElement.classList.remove('key-gray');   //Decimos a keyElement elimina la clase key-gray que tenemos creada en stylesPiano.css
    }
  }

});



