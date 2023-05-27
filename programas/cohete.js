let x;
let y;
let posX = [];
let posY = [];
let i = 0;
let radio = 10;
let img;
let canvas;
let div;

function preload() {
  img = loadImage("../programas/cohete.png");
}

function setup() {
  div = document.getElementById("coheteProg");
  let rect = div.getBoundingClientRect();
  canvas = createCanvas(1200, 400);
  canvas.parent("coheteProg");
  frameRate(50);
  background(0);
  x = width / 2;
  y = height;
}

function draw() {
  background(0);
  imageMode(CENTER);
  let imgX = min(max(mouseX, 0), width);
  let imgY = min(max(mouseY, 0), height);
  image(img, imgX, imgY, 50, 50);

  for (let j = 0; j < i; j++) {
    ellipse(posX[j], posY[j], radio, radio);
    fill(random(255), random(255), random(255));
    posX[j] += 0;
    posY[j]--;

    if (posY[j] < 0) {
      ellipse(posX[0], posY[0], 0, 0);
      fill(255, random(255), random(255));
    }
  }
}

function mousePressed() {
  posX[i] = mouseX;
  posY[i] = mouseY;
  i++;
}

function windowResized() {
  let rect = div.getBoundingClientRect();
  resizeCanvas(rect.width, rect.height);
}









  
