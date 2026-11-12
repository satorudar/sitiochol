// Obtenemos todas las secciones con la clase "espanol" y "chol1"
const seccionesEspanol = document.querySelectorAll('.parte.espanol');
const seccionesChol1 = document.querySelectorAll('.parte.chol1');

// Variable para llevar el seguimiento de la vista actual
let vistaActual = 'espanol';

// Función para alternar entre las vistas y cambiar el fondo
function alternarVista() {
    if (vistaActual === 'espanol') {
        // Ocultar secciones en español y mostrar secciones en chol1
        seccionesEspanol.forEach(seccion => seccion.style.display = 'none');
        seccionesChol1.forEach(seccion => seccion.style.display = 'block');
        document.body.classList.remove('fondo-espanol'); // Quita la clase de fondo en español
        document.body.classList.add('fondo-chol1'); // Agrega la clase de fondo en chol1
        vistaActual = 'chol1';
    } else {
        // Ocultar secciones en chol1 y mostrar secciones en español
        seccionesChol1.forEach(seccion => seccion.style.display = 'none');
        seccionesEspanol.forEach(seccion => seccion.style.display = 'block');
        document.body.classList.remove('fondo-chol1'); // Quita la clase de fondo en chol1
        /*document.body.classList.add('fondo-espanol'); // Agrega la clase de fondo en español*/
        vistaActual = 'espanol';
    }
}

// Agregamos un evento de clic al botón "TRADUCIR" para alternar las vistas y cambiar el fondo
const botonTraducir = document.getElementById('cambiarVista');
botonTraducir.addEventListener('click', alternarVista);
