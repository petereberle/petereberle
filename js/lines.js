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
		start();
	}
}

$('.heading_block').resize( function(){

	var newWidth = document.querySelector(".heading_block").offsetWidth;
	var newHeight = document.querySelector(".heading_block").offsetHeight;
	
	function windowResized() {
  		resizeCanvas(windowWidth, windowHeight);
	}
});

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
