//original sketch: https://editor.p5js.org/arthurrc/sketches
let inc;
let scl;
let cols;
let rows;

let zoff;

let fr;

let particles = [];

let flowField = [];

var cachedWidth = $(window).width();

var startTime;

function start(){
	startTime = millis()
}

function setup() {
  let parentWidth = document.querySelector(".heading_block").offsetWidth;
  let parentHeight = document.querySelector(".heading_block").offsetHeight;
  let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');

  zoff = 0;
  scl = 10;
  inc = 0.1;
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP();

  for (let i = 0; i < 2000; i++) {
    particles[i] = new Particle();
  }
 
}

function draw() {
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * cols);
      let angle = noise(xoff, yoff, zoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index] = v;
      xoff += inc;
      
    }
    yoff += inc;
    zoff += 0.0002;

    var currentTime = millis();
	var runTime = 45 * 1000;

	//restart after 40 secs

	if (currentTime > startTime + runTime){

				clear();
				start();

	}

  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].edges();
    particles[i].show();    
    particles[i].follow(flowField);
  }
  fr.html(floor(frameRate()) + " fps");
}

var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight;

function windowResized() {

parentWidth = document.querySelector(".heading_block").offsetWidth;
parentHeight = document.querySelector(".heading_block").offsetHeight;

var newWidth = $(window).width();
        
        if(newWidth !== cachedWidth){  

         resizeCanvas(parentWidth, parentHeight);

         var windowWidth = $(window).width();

    	cachedWidth = newWidth;
    }

}