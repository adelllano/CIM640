//var myArrayone= [440, 255, 344, 185, 466, 110, ,177, 150, 515, 200, 190, 600, 790, 1190, 1100, 1800];
//var myArraytwo= [282, 300, 660, 710, 120, 500, 410, 810, 200, 999, 600, 1200, 1450, 874, 1020, 1890];

var xValues = [];
var yValues = [];
              
function setup() {
  createCanvas(windowWidth, windowHeight);
    
    for (var i = 0; i <= 1000; i++) {
        var x = random(width);
        var y = random(height);
        xValues.push(x);
        yValues.push(y);
    }
}

function draw() {

  background(0);
  fill(255);
  stroke(0);
  
  for (var i = 0; i < xValues.length; i++) {
        ellipse(xValues[i], yValues[i], 5, 5);
    }
    
}

function mousePressed() {
  xValues.push(mouseX);
  yValues.push(mouseY);

}