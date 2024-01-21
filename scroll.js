// scroll.js

$(document).ready(function () {
    // Selecciona todos los enlaces de la barra de navegación
    $('a.nav-link').on('click', function (event) {
        // Asegúrate de que this.hash tenga un valor antes de prevenir el comportamiento predeterminado
        if (this.hash !== "") {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();

            // Almacena el hash
            var hash = this.hash;

            // Usa jQuery para animar el desplazamiento
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Agrega el hash (#) a la URL cuando haya terminado de desplazarse
                window.location.hash = hash;
            });
        }
    });
});
