// Inicializamos el array de alumnos, y si ya existe en LocalStorage, lo recuperamos
// JSON.parse() convierte el string almacenado en un array de objetos.
// Si no hay datos almacenados, se inicializa un array vacío.
var alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

window.onload = function() {
    // Añadimos un event listener al formulario para que, al hacer submit, se ejecute la función agregarAlumno.
    document.getElementById("formulario").addEventListener("submit", agregarAlumno);
    // Mostramos los alumnos almacenados en la página apenas se carga.
    mostrarAlumnos();  
};

function agregarAlumno(event) {
    event.preventDefault();  // Prevenir el envío del formulario (para que la página no se recargue).

    // Capturar valores del formulario, usando .value para obtener el valor ingresado.
    var nombre = document.getElementById("nombre").value.trim(); // .trim() elimina los espacios al inicio y final.
    var apellido = document.getElementById("apellido").value.trim();
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value); // Convertir string a número flotante.
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);

    // Validaciones:
    // Comprobar que el nombre no esté vacío.
    if (nombre === "") {
        alert("El nombre no puede estar vacío"); // Mostrar un mensaje de alerta si el nombre está vacío.
        return;  // Detener la ejecución de la función si la validación falla.
    }

    // Comprobar que las calificaciones estén entre 1 y 10.
    if (isNaN(calificacion1) || calificacion1 < 1 || calificacion1 > 10 ||
        isNaN(calificacion2) || calificacion2 < 1 || calificacion2 > 10 ||
        isNaN(calificacion3) || calificacion3 < 1 || calificacion3 > 10) {
        alert("Las calificaciones deben estar entre 1 y 10"); // Mostrar un mensaje si la validación falla.
        return;  // Detener la ejecución si las calificaciones no son válidas.
    }

    // Calcular el promedio sumando las tres calificaciones y dividiéndolas por 3.
    var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

    // Crear un nuevo objeto alumno con los datos ingresados.
    var nuevoAlumno = {
        nombre: nombre,
        apellido: apellido,
        promedio: promedio.toFixed(2)  // .toFixed(2) redondea el promedio a 2 decimales.
    };

    // Agregar el nuevo alumno al array de alumnos.
    alumnos.push(nuevoAlumno);

    // Guardar el array de alumnos actualizado en LocalStorage.
    // JSON.stringify() convierte el array en una cadena JSON para almacenarla.
    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    // Limpiar el formulario después de agregar el alumno.
    document.getElementById("formulario").reset();

    // Actualizar la lista visible de alumnos.
    mostrarAlumnos();
}

function mostrarAlumnos() {
    // Obtener el contenedor donde se mostrará la lista de alumnos.
    var listaAlumnos = document.getElementById("listaAlumnos");
    listaAlumnos.innerHTML = "";  // Limpiar la lista anterior para evitar duplicados.

    // Recorrer el array de alumnos y crear elementos HTML para cada uno.
    for (let i = 0; i < alumnos.length; i++) {
        // Crear un div que contendrá los datos del alumno.
        var alumnoDiv = document.createElement("div");
        alumnoDiv.classList.add("alumnoContainer"); // Añadir una clase CSS para estilizar el contenedor.

        // Crear un elemento <h1> para el nombre del alumno.
        var nombre = document.createElement("h1");
        nombre.textContent = alumnos[i].nombre;  // Asignar el nombre del alumno.

        // Crear un elemento <h2> para el apellido del alumno.
        var apellido = document.createElement("h2");
        apellido.textContent = alumnos[i].apellido;  // Asignar el apellido del alumno.

        // Crear un elemento <p> para mostrar el promedio del alumno.
        var promedio = document.createElement("p");
        promedio.textContent = "Promedio: " + alumnos[i].promedio;  // Asignar el promedio.

        // Crear un input tipo checkbox para marcar la asistencia del alumno.
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";  // Especificar que el input es de tipo checkbox.
        checkbox.name = "presente";  // Asignar un nombre al checkbox.
        checkbox.value = "presente"; // Asignar un valor al checkbox.
        
        // Crear un label para el checkbox.
        var labelCheckbox = document.createElement("label");
        labelCheckbox.textContent = "Presente";  // El texto que acompaña al checkbox.

        // Agregar los elementos al div contenedor del alumno.
        alumnoDiv.appendChild(nombre);
        alumnoDiv.appendChild(apellido);
        alumnoDiv.appendChild(promedio);
        alumnoDiv.appendChild(checkbox);
        alumnoDiv.appendChild(labelCheckbox);

        // Finalmente, agregar el contenedor del alumno al contenedor de la lista de alumnos.
        listaAlumnos.appendChild(alumnoDiv);
    }
}
