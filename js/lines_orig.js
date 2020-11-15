var fadeIn;
var fadeAmount = 1;
var cachedWidth = $(window).width();

//var r, g, b;

var yoff = 0.0;  



function setup() {

	let parentWidth = document.querySelector(".heading_block").offsetWidth;
	let parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;

	let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	fadeIn = 30;
}

function draw() { 

	  clear();

  fill(255, 255, 255, 70);
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  noStroke();
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= windowHeight; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(yoff, xoff), 0, 1, cappedFirst, cappedSecond); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    vertex(y, x); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(0, windowHeight);
  vertex(0, 0);
  endShape(CLOSE);

}

var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;

var cappedFirst = parentWidth*.9;
var cappedSecond = parentWidth;


function windowResized() {

parentWidth = document.querySelector(".heading_block").offsetWidth;
parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;

cappedFirst = parentWidth*.9;
cappedSecond = parentWidth;

var newWidth = $(window).width();
        
        if(newWidth !== cachedWidth){  

         resizeCanvas(parentWidth, parentHeight);

         var windowWidth = $(window).width();

    	cachedWidth = newWidth;
    }

}
