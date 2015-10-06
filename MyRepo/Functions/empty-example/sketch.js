function setup() {
  createCanvas(800, 800);
    background (80,25,65);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255,88,150);
  }
  ellipse(mouseX, mouseY, 55, 55);
}
    
var d = myFunction(10,30);

function myFunction(a,b) {
    return a * b /2;
}
