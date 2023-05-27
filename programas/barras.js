let barWidth = 30;
let lastBar = -1;
let canvas;

function setup() {
  let container = document.getElementById("barrasProg");
  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;
  canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent("barrasProg");
  colorMode(HSB, width, 100, height);
  noStroke();
  background(0);
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(barX, 300, mouseY);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
}

// Iniciar el programa cuando se cargue la página
window.onload = function() {
  let sketch = new p5(function(p) {
    p.setup = setup;
    p.draw = draw;
  }, "barrasProg");
};




// let barWidth = 30;
// let lastBar = -1;

// function setup() {
//   createCanvas(800, 360);
//   colorMode(HSB, width, 100, height);
//   noStroke();
//   background(0);
// }

// function draw() {
//   let whichBar = mouseX / barWidth;
//   if (whichBar !== lastBar) {
//     let barX = whichBar * barWidth;
//     fill(barX, 300, mouseY);
//     rect(barX, 0, barWidth, height);
//     lastBar = whichBar;
//   }
// }




