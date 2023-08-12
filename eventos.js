//Seleccionar los elementos div y button.
let div = document.getElementById("miDiv");

let boton = document.getElementById("miBtn");

//Crear una funcion que de una alerta
function saludarDiv() {
    alert("Hola! Soy el div");
}

//Añadir eventos a los elementos
div.addEventListener("click", saludarDiv);

boton.addEventListener("click", function() {
    alert('Hola!');
    event.stopPropagation();
});

//Anteriormente quise utilizar removeEventListener,
// pero solo funcionaba si hacias click en el div y luego
// en el botón. Ahora no importa el orden del click.