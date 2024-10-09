window.onload=function(){

    var cargar = document.getElementById("cargar");

    var div1 = document.getElementById("div1");

    var div2 = document.getElementById("div2");
       
            cargar.style.display="block"

            setTimeout(() => {

                cargar.style.display="none"

                div1.style.display="block"

            }, 1000);

        

}