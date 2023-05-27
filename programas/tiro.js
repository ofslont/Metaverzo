var pantalla;
var pincel;

var radio = 10;
var xAleatorio;
var yAleatorio;

function setup() {
    pantalla = createCanvas(windowWidth, windowHeight);
    pantalla.parent("juego1Prog");
    pincel = pantalla.drawingContext;

    actualizarCanvas();

    setInterval(actualizarCanvas, 1500);
}

function draw() {
    // No es necesario implementar nada en esta función
}

function actualizarCanvas() {
    resizeCanvas(windowWidth, windowHeight);
    background("lightgrey");

    xAleatorio = random(width);
    yAleatorio = random(height);
    diseharObjetivo(xAleatorio, yAleatorio);
}

function diseharCircunferencia(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
}

function diseharObjetivo(x, y) {
    diseharCircunferencia(x, y, radio + 20, "red");
    diseharCircunferencia(x, y, radio + 10, "white");
    diseharCircunferencia(x, y, radio, "red");
}

function disparar(evento) {
    var rect = pantalla.canvas.getBoundingClientRect();
    var x = evento.clientX - rect.left;
    var y = evento.clientY - rect.top;

    var distancia = dist(x, y, xAleatorio, yAleatorio);

    if (distancia <= radio) {
        alert("Acertaste");
    }
}

window.addEventListener("click", disparar);
window.addEventListener("resize", actualizarCanvas);
