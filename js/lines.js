var startTime;

function start(){
	startTime = millis()
}

function setup() {

	let parentWidth = document.querySelector(".heading_block").offsetWidth;
	let parentHeight = document.querySelector(".heading_block").offsetHeight;

	let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	frameRate(5);
	start();
}

function draw() {

	stroke(104, 103, 109, 20);

	let perspectiveX1 = parentWidth*.45;
	let perspectiveX2 = parentWidth*.55;

	let l = random(parentWidth);
	let i = 0;
	let n = random(perspectiveX1, perspectiveX2);
	let e = parentHeight;
	line(l,i,n,e);

	var currentTime = millis();
	var runTime = 40 * 1000;

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