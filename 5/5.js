var materias = [
    {"nombre":"Plataformas Operativas","horario":"18:30"},
    {"nombre":"Cultura","horario":"20:30"},
    {"nombre":"Diseño Audiovisual","horario":"20:30"},
    {"nombre":"Publicidad","horario":"18:30"},
    {"nombre":"Practica","horario":"20:30"},
    {"nombre":"Seminario Final","horario":"18:30"}
];



//Crear una función en la que ingreso un número,
//y me devuelva la informacion de la materia.
//En caso de que materia no existe, devolver error.

function AgregarMateria(){
    var horario = "20:30";
    var nombre = "Nueva no se me ocurre nada";
    var nueva = {"nombre":nombre,"horario":horario};
    materias.push(nueva);
}


function MostrarMateria(){
    var pagina = document.getElementById("datos");
   var index = document.getElementById("numero").value;

   if (index>=0 && index<6) {
        console.log("Lo encontró")
       div.textContent = "Materias: " + materias [index].nombre + " Horario: " + materias [index].horario;
       } else {
    div.textContent = "Error, no existe la materia";

   }

}