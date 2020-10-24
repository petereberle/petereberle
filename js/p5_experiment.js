// Experiment.. scale up whole canvas



var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight;

var outsideWidth = parentWidth * 1.5;
var outsideHeight = parentHeight * 1.5;

var startTime;

function start(){
	startTime = millis();
}

function setup() {
	var canvas = createCanvas(outsideWidth, outsideHeight);
	canvas.parent('sketch-div');
	innerCanvas = createGraphics(parentWidth, parentHeight);
	frameRate(5);
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
//restart after 30secs

	if (currentTime > startTime + runTime){
		clear();
		start();
	}
}

var newWidth = document.querySelector(".heading_block").offsetWidth;
var newHeight = document.querySelector(".heading_block").offsetHeight;

function windowResized() {
  resizeCanvas(newWidth, newHeight);
}


/// SAVE

var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight;

var startTime;

function start(){
	startTime = millis();
}

function setup() {
	var canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	frameRate(5);
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
//restart after 30secs

	if (currentTime > startTime + runTime){
		clear();
		start();
	}

}

var newWidth = document.querySelector(".heading_block").offsetWidth;
var newHeight = document.querySelector(".heading_block").offsetHeight;


function windowResized() {
  resizeCanvas(newWidth, newHeight);
}

