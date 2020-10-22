var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight;

function setup() {
	var canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	frameRate(5);
}

function draw() {

	stroke(255, 255, 255, 20);

	let r = random(parentWidth);
	let i = random(parentHeight);
	let g = random(parentWidth);
	let p = random(parentHeight);
	line(r,i,g,p);
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
