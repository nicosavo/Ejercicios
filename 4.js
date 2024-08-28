var alumno = [{
    "nombre":"Nicolás",
    "apellido":"Savo"
},
{ 
    "nombre":"Victoria",
    "apellido":"Gagliardi"
},
{ 
    "nombre":"Camila",
    "apellido":"Peretti" 
}
]   // el corchete permite agregar más de un alumno

window.onload=function() {
    var contenedor = document.getElementById("contenedor");
    for (let index = 0; index < alumno.length; index++){
        var nombre = document.createElement("h1");
        nombre.classList.add("nombre");
        contenedor.appendChild(nombre);
        nombre.textContent = alumno[index].nombre;

        var apellido = document.createElement("h2");
        nombre.classList.add("apellido");
        contenedor.appendChild(apellido);
        apellido.textContent = alumno[index].apellido;

        var section = document.createElement("section");
        section.classList.add("contenedorchiquito");

        var boton = document.createElement("input");
        boton.type="checkbox";
        section.appendChild(checkbox)
        

       contenedor.appendChild(section);
        // alert("nombre: "+ alumno[index].nombre + " apellido: " + alumno[index].apellido)
    }

}

