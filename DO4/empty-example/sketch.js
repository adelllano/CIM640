function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0,122,68);
}

function draw() {
	textSize(32);
    fill(0,255,122);
    text("type 'P5JS' to see something cool", 250, 150);

}

function keyPressed() {
	if (key == 'P'){
		fill(255,36,45);
        noStroke();
        ellipse(50,80,50,50);
        ellipse(100,80,50,50);
        ellipse(75,110,75,75);
        fill(0);
        rect(60, 120, 30, 10);
        fill(255);
        ellipse(60, 100, 20, 20);
        ellipse(90, 100, 20, 20);
	}
    
	else if(key == '5') {
		fill(186,255,45);
        noStroke();
        ellipse(50,80,50,50);
        ellipse(100,80,50,50);
        ellipse(75,110,75,75);
        fill(0);
        rect(60, 120, 30, 10);
        fill(255);
        ellipse(60, 100, 20, 20);
        ellipse(90, 100, 20, 20);
	}
    
	else if(key == 'J'){
        fill(186,36,255);
        noStroke();
        ellipse(50,80,50,50);
        ellipse(100,80,50,50);
        ellipse(75,110,75,75);
        fill(0);
        rect(60, 120, 30, 10);
        fill(255);
        ellipse(60, 100, 20, 20);
        ellipse(90, 100, 20, 20);
	}
    
    else if(key == 'S'){
        fill(0,50,150);
        noStroke();
        ellipse(50,80,50,50);
        ellipse(100,80,50,50);
        ellipse(75,110,75,75);
        fill(0);
        rect(60, 120, 30, 10);
        fill(255);
        ellipse(60, 100, 20, 20);
        ellipse(90, 100, 20, 20);
	}

}