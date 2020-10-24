var startTime;

function start(){
	startTime = millis()
}

function setup() {

	let parentWidth = document.querySelector(".heading_block").offsetWidth;
	let parentHeight = document.querySelector(".heading_block").offsetHeight;

	let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	frameRate(7);
	start();
}

function draw() {

	stroke(255, 255, 255, 30);

	let l = random(parentWidth);
	let i = random(parentHeight);
	let n = random(parentWidth);
	let e = random(parentHeight);
	line(l,i,n,e);

	var currentTime = millis();
	var runTime = 30 * 1000;

	//restart after 30 secs

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