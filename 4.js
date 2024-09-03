var alumno = [
    {
        "nombre": "Nicolás",
        "apellido": "Savo"
    },
    {
        "nombre": "Victoria",
        "apellido": "Gagliardi Rocha"
    },
    {
        "nombre": "Camila",
        "apellido": "Peretti"
    }
];

// Lista de alumnos en HTML
function mostrarAlumnos() {
    var listaAlumnos = document.getElementById("listaAlumnos");
    listaAlumnos.innerHTML = "";

    for (let index = 0; index < alumno.length; index++) {
        // Crea el div del alumno en lista
        var alumnoContainer = document.createElement("div");
        alumnoContainer.classList.add("alumnoContainer");

        // Crea y agrega el dato - Dato 1
        var nombre = document.createElement("h1");
        nombre.classList.add("nombre");
        nombre.textContent = alumno[index].nombre;
        alumnoContainer.appendChild(nombre);

        // Dato 2
        var apellido = document.createElement("h2");
        apellido.classList.add("apellido");
        apellido.textContent = alumno[index].apellido;
        alumnoContainer.appendChild(apellido);

        // Checkbox
        var section = document.createElement("section");
        section.classList.add("contenedorchiquito");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        section.appendChild(checkbox);

        // Agrega el checkbox al container
        alumnoContainer.appendChild(section);
        
        // Y despues añade el container a la lista
        listaAlumnos.appendChild(alumnoContainer);
    }
}

// Form
function agregarAlumno(event) {
    event.preventDefault(); // Previene que se recargue la página al enviar el formulario

    var nombreInput = document.getElementById("nombre");
    var apellidoInput = document.getElementById("apellido");

    // Nuevo objeto de alumno que se agrega al array
    var nuevoAlumno = {
        "nombre": nombreInput.value,
        "apellido": apellidoInput.value
    };

    alumno.push(nuevoAlumno); // Agrega el nuevo alumno al array

    // Limpia campos
    nombreInput.value = "";
    apellidoInput.value = "";

    // Actualizar la lista de alumnos
    mostrarAlumnos();
}

// Envío del formulario
window.onload = function() {
    document.getElementById("formularioAlumno").addEventListener("submit", agregarAlumno);

    mostrarAlumnos();
};
