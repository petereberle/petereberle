var startTime;

function start(){
	startTime = millis()
}

var fadeIn;
var fadeAmount = 1;


function setup() {

	let parentWidth = document.querySelector(".heading_block").offsetWidth;
	let parentHeight = document.querySelector(".heading_block").offsetHeight;

	let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	frameRate(7);
	fadeIn = 0;
	start();
}

function draw() {

	stroke(87, 90, 94, fadeIn);

	let perspectiveX1 = parentWidth*.65;
	let perspectiveX2 = parentWidth*.85;

	let perspectiveX3 = parentWidth*.7;
	let perspectiveX4 = parentWidth*.8;

	let l = random(perspectiveX1, perspectiveX2);
	let i = 0;
	let n = random(perspectiveX3, perspectiveX4);
	let e = parentHeight;
	
	line(l,i,n,e);

	if (fadeIn < 0) fadeAmount = 1;

	if (fadeIn > 70) fadeAmount = -10;

	fadeIn += fadeAmount;

	var currentTime = millis();
	var runTime = 5 * 1000;

	//restart after 40 secs

	if (currentTime > startTime + runTime){
		
				clear();
				start();

	}
}

var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight;

function windowResized() {

parentWidth = document.querySelector(".heading_block").offsetWidth;
parentHeight = document.querySelector(".heading_block").offsetHeight;

resizeCanvas(parentWidth, parentHeight);

}

//fade out canvas on complete
