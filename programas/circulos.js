let canvas;
let i = 0;
let posX = new Array(500);
let posY = new Array(500);

function setup() {
  canvas = createCanvas(0, 0);
  canvas.parent("circulosProg");
}

function draw() {
  resizeCanvas(canvas.parent().clientWidth, canvas.parent().clientHeight);
  //background(0);

  for (let j = 0; j < i; j++) {
    ellipse(posX[j], posY[j], 30, 30);
    fill(random(255), random(255), random(255));
    noStroke();

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






  
