// Obtener el botón y el contenido de la página
const btnTop = document.getElementById('btnTop');
const container = document.querySelector('.header');
let isScrolling = false;
// Mostrar u ocultar el botón cuando se desplaza la página hacia abajo
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            if (window.pageYOffset > 100) {
                btnTop.style.opacity = '1';
                btnTop.style.transform = 'scale(1)';
                btnTop.style.display = 'block';
            } else {
                btnTop.style.opacity = '0';
                btnTop.style.transform = 'scale(0)';
                btnTop.style.display = 'none';
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});
// Ocultar el botón cuando se hace scroll hacia arriba
window.addEventListener('scroll', () => {
    if (window.pageYOffset < 100) {
        btnTop.style.opacity = '0';
        btnTop.style.transform = 'scale(0)';
        btnTop.style.display = 'none';
    }
});
// Volver arriba cuando se hace clic en el botón
btnTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


