window.onload=function(){

    var boton = document.getElementById("boton");

        boton.addEventListener("mouseover",function(){

            boton.style.display="none";

            setTimeout(() => {

                boton.style.display="block"

            }, 2000);
    });

}


