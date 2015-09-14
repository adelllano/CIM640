function setup() {

    createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
  	
	shape1(mouseX,mouseY);
    shape2();
    shape3(mouseX);
	
}
function shape1(x,y) {
    
    stroke(155,200,90);
    strokeWeight(2);
    fill(200,60,200);
    ellipse (x,y,y,y);
}

function shape2()  {
     
    stroke(200,20,155);
    fill (255);
    rect (20,20,30,30);
    
   
}

function shape3(x)  {
     
    stroke (50,0,240);
    line (x,80,500,1000);
    
   
}