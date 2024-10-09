// mostrar el gif de carga durante 1 segundo
window.onload = function() {
    setTimeout(function() {
      document.getElementById("carga").style.display = "none";
    }, 1000);
  
  
    // mostrar el contenido real cuando se presiona el botón
    document.getElementById("mostrarContenido").onclick = function() {
        document.getElementById("contenidoReal").style.display = "block";
    };
    
    // mostrar el pop-up después de 5 segundos
    setTimeout(function() {
        document.getElementById("popup").style.display = "block";
    }, 5000);
    
    // cerrar el pop-up
    document.getElementById("cerrarPopup").onclick = function() {
        document.getElementById("popup").style.display = "none";
    };
    
    // evento de scroll
    let mitadPaginaAlcanzada = false;
    let cookiesAceptadas = false;
    
    window.onscroll = function() {
        let alturaMitadPagina = document.body.scrollHeight / 2;
        if (window.scrollY >= alturaMitadPagina && !cookiesAceptadas) {
        mitadPaginaAlcanzada = true;
        document.getElementById("aceptarCookies").style.display = "block";
        document.body.style.overflow = "hidden"; // evitar que sigan scrolleando
        }
    };
    
    // aceptar las cookies y permitir el scroll
    document.getElementById("botonAceptar").onclick = function() {
        cookiesAceptadas = true;
        document.getElementById("aceptarCookies").style.display = "none";
        document.body.style.overflow = "auto"; // permitir el scroll nuevamente
    };

  };