var selectedWord;
var wordLocation;

function setup() {
	createCanvas(windowWidth, windowHeight); 
	selectedWord = 0;
	wordLocation = [150,250,350,450,550,650,750];
}

function draw() {
	background(255);
    fill (255,51,153);
	textSize(100);
	textAlign(CENTER);
	text("HELLO", mouseX, mouseY, wordLocation[selectedWord], wordLocation[selectedWord]);
}

function mousePressed() {
	selectedWord++;
    
}
