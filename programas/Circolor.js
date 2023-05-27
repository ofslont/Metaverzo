window.addEventListener("DOMContentLoaded", function() {
    var divContenedor = document.getElementById("juego2Prog");
    var pantalla = document.createElement("canvas");
    divContenedor.appendChild(pantalla);
    var pincel = pantalla.getContext("2d");
    var colores = ["blue", "red", "green", "white","black","pink"];
    var indiceColorActual = 0; // comienza con blue

    function dibujarCirculo(evento) {
        var rect = pantalla.getBoundingClientRect();
        var x = evento.clientX - rect.left;
        var y = evento.clientY - rect.top;
        pincel.fillStyle = colores[indiceColorActual];
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * Math.PI);
        pincel.fill();
        console.log(x + "," + y);
    }

    function ajustarCanvas() {
        pantalla.width = divContenedor.clientWidth;
        pantalla.height = divContenedor.clientHeight;
    }

    pantalla.onclick = dibujarCirculo;

    function alterarColor(evento) {
        evento.preventDefault();
        indiceColorActual++;
        if (indiceColorActual >= colores.length) {
            indiceColorActual = 0; //vuelve para el primer color, blue
        }
    }

    pantalla.oncontextmenu = alterarColor;

    window.addEventListener("resize", ajustarCanvas);
    ajustarCanvas();
});
