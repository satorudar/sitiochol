document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");
    const menuOverlay = document.getElementById("menuOverlay");

    const submenus = document.querySelectorAll(".navbar .submenu");
    const menuLinks = document.querySelectorAll(".navbar a");

    if (!menuToggle || !navbar) {
        return;
    }


    /* =====================================================
       ABRIR MENÚ
       ===================================================== */

    function abrirMenu() {

        navbar.classList.add("menu-abierto");

        if (menuOverlay) {
            menuOverlay.classList.add("activo");
        }

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Cerrar menú");

        const icono = menuToggle.querySelector("i");

        if (icono) {
            icono.className = "fas fa-times";
        }

        document.body.classList.add("menu-bloqueado");
    }


    /* =====================================================
       CERRAR MENÚ
       ===================================================== */

    function cerrarMenu() {

        navbar.classList.remove("menu-abierto");

        if (menuOverlay) {
            menuOverlay.classList.remove("activo");
        }

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");

        const icono = menuToggle.querySelector("i");

        if (icono) {
            icono.className = "fas fa-bars";
        }

        document.body.classList.remove("menu-bloqueado");

        /* Cerramos también los submenús */

        submenus.forEach(function (submenu) {
            submenu.classList.remove("submenu-abierto");
        });
    }


    /* =====================================================
       BOTÓN PRINCIPAL
       ===================================================== */

    menuToggle.addEventListener("click", function () {

        const menuAbierto =
            navbar.classList.contains("menu-abierto");

        if (menuAbierto) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });


    /* =====================================================
       CLIC EN EL FONDO OSCURO
       ===================================================== */

    if (menuOverlay) {

        menuOverlay.addEventListener("click", function () {
            cerrarMenu();
        });

    }


    /* =====================================================
       SUBMENÚS EN CELULAR
       ===================================================== */

    submenus.forEach(function (submenu) {

        submenu.addEventListener("click", function (evento) {

            /* Solo hacemos esto en móvil/tablet */

            if (window.innerWidth <= 900) {

                /*
                 * Si se hizo clic sobre un enlace,
                 * dejamos que el enlace funcione normalmente.
                 */

                if (evento.target.closest("a")) {
                    return;
                }

                evento.stopPropagation();

                submenu.classList.toggle("submenu-abierto");
            }

        });

    });


    /* =====================================================
       CERRAR MENÚ AL SELECCIONAR UNA PÁGINA
       ===================================================== */

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 900) {
                cerrarMenu();
            }

        });

    });


    /* =====================================================
       TECLA ESCAPE
       ===================================================== */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {

            if (navbar.classList.contains("menu-abierto")) {
                cerrarMenu();
            }

        }

    });


    /* =====================================================
       SI LA VENTANA VUELVE A SER GRANDE
       ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {
            cerrarMenu();
        }

    });

});