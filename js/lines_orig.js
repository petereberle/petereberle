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
//modified sketch. original by Daniel Schmiffman
	clear();
	fill(255, 255, 255, 70);
	beginShape(); 
	noStroke();
  	var xoff = 0;       // Option #1: 2D Noise
  
  	// Iterate over horizontal pixels
  	for (var x = 0; x <= windowWidth; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(yoff, xoff), 0, 1, cappedFirst, cappedSecond);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);
  endShape(CLOSE);

}

var parentWidth = document.querySelector(".heading_block").offsetWidth;
var parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;

var cappedFirst = 0;
var cappedSecond = parentHeight*.25;


function windowResized() {

parentWidth = document.querySelector(".heading_block").offsetWidth;
parentHeight = document.querySelector(".heading_block").offsetHeight*1.1;

cappedFirst = 0;
cappedSecond = parentHeight*.25;

var newWidth = $(window).width();
        
        if(newWidth !== cachedWidth){  

         resizeCanvas(parentWidth, parentHeight);

         var windowWidth = $(window).width();

    	cachedWidth = newWidth;
    }

}
