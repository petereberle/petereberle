function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-div');
	frameRate(5);
}

function draw() {

	stroke(255, 255, 255, 20);

	let r = random(windowWidth);
	let i = random(windowHeight);
	let g = random(windowWidth);
	let p = random(windowHeight);
	line(r,i,g,p);
}