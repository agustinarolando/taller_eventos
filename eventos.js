function saludarDiv() {
    alert("Hola! Soy el div");
}

document.getElementById("miDiv").addEventListener("click", saludarDiv);

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    alert('Hola!');
    document.getElementById("miDiv").removeEventListener("click", saludarDiv)
})
// Otra forma de añadir la misma alerta
// document.getElementsByTagName("div")[0].addEventListener("click", saludarDiv);