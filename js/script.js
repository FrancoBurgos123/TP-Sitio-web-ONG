window.onload = function () {
    alert("¡Bienvenido a Red Asistencia Solidaria!");
}

const boton = document.getElementById("modoOscuro");

boton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});