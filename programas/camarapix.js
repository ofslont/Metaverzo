let video;
let pixeles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("camarapixProg");

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  for (let i = 0; i < 2500; i++) {
    pixeles[i] = new Pixel();
  }
  background(0);
}

function draw() {
  tint(random(255), mouseY, mouseX);
  image(video, 0, 0, width, height);

  for (let i = 0; i < pixeles.length; i++) {
    pixeles[i].display();
    pixeles[i].move();
  }
}

class Pixel {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    let a = random(TWO_PI);
    let speed = random(1, 2);
    this.vx = cos(a) * speed;
    this.vy = sin(a) * speed;
  }

  display() {
    noStroke();
    let c = get(int(this.x), int(this.y));
    fill(c, 50);
    ellipse(this.x, this.y, 12, 12);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < 0) {
      this.y = height;
    }

    if (this.y > height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }

    if (this.x > width) {
      this.x = 0;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}





  
