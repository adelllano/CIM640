var Ball = function(x, y) {
	this.x = x;
	this.y = y;
	this.diameter = random(10,100);
    this.speedX= random(-1,1);
    this.color= color(random(255), random(255), random(255));
}

var balls = [];


function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);
    
  for (var i = 0; i < balls.length; i++) {
      fill(random(255), random(255), random(255)); 
      noStroke();
      ellipse(balls[i].x, balls[i].y, balls[i].diameter, balls[i].diameter);
  	balls[i].x = balls[i].x + balls[i].speedX;
  }

}
function mousePressed() {
	balls.push( new Ball(mouseX, mouseY) );
} 
