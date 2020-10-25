var startTime;

function start(){
	startTime = millis()
}

var fadeIn;
var fadeAmount = 1;
var cachedWidth = $(window).width();


function setup() {

	let parentWidth = document.querySelector(".heading_block").offsetWidth;
	let parentHeight = document.querySelector(".heading_block").offsetHeight;

	let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	frameRate(4);
	fadeIn = 0;
	start();
}

function draw() {

	stroke(96, 99, 102, fadeIn);

	let perspectiveX1 = parentWidth*.7;
	let perspectiveX2 = parentWidth;

	let perspectiveX3 = parentWidth*.79;
	let perspectiveX4 = parentWidth;

	if(cachedWidth < 900){

			perspectiveX1 = parentWidth*.75
			perspectiveX3 = parentWidth*.95;

			if (fadeIn < 0) fadeAmount = 1;

			if (fadeIn > 50) fadeAmount = -5;

	} else{

			if (fadeIn < 0) fadeAmount = 1;

			if (fadeIn > 70) fadeAmount = -5;
	}

	let l = random(perspectiveX1, perspectiveX2);
	let i = 0;
	let n = random(perspectiveX3, perspectiveX4);
	let e = parentHeight;
	
	line(l,i,n,e);

	fadeIn += fadeAmount;

	var currentTime = millis();
	var runTime = 45 * 1000;

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

var newWidth = $(window).width();
        
        if(newWidth !== cachedWidth){  

         resizeCanvas(parentWidth, parentHeight);

         var windowWidth = $(window).width();

    	cachedWidth = newWidth;
    }

}
