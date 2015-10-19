var canvas;
var ballSize1;
var ballSize2;
var ballColor1;
var ballColor2;
function setup() {
	canvas = createCanvas(500, 500); 
	ballColor1 = document.getElementById('colorSelector1');
    ballColor2 = document.getElementById('colorSelector2');
	ballSize1 = document.getElementById('ballSlider1');
    ballSize2 = document.getElementById('ballSlider2');
	canvas.parent('middle_panel');
	background(0);
}

function draw() {
	background(0);
	fill(255);
	fill(ballColor1.value);
	ellipse(width/2, height/2, ballSize1.value, ballSize1.value);
    fill(ballColor2.value);
    ellipse(width/3, height/3, ballSize2.value, ballSize2.value);
}