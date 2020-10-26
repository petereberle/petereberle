var startTime;

function start(){
	startTime = millis()
}

//var fadeIn;
//var fadeAmount = 1;
var cachedWidth = $(window).width();

var r, g, b;


function setup() {

	let parentWidth = document.querySelector(".heading_block").offsetWidth;
	let parentHeight = document.querySelector(".heading_block").offsetHeight;

	let canvas = createCanvas(parentWidth, parentHeight);
	canvas.parent('sketch-div');
	frameRate(3);
	//fadeIn = 0;
	start();
	//r = random(96, 116);
	//g = random(99, 119);
	//b = random(102, 122);
}

function draw() {

	stroke(106, 109, 112, 50);

	let perspectiveX1 = parentWidth*.75;
	let perspectiveX2 = parentWidth*.8;

	let perspectiveX3 = parentWidth*.70;
	let perspectiveX4 = parentWidth*.85;

	//let randomParent = random(parentWidth*.6, parentWidth);

	let perspectiveY1 = 0;

	if(cachedWidth < 900){

			perspectiveX1 = 0;
			perspectiveX2 = parentWidth;

			perspectiveX3 = 0;
			perspectiveX4 = parentWidth;

			//if (fadeIn < 0) fadeAmount = 1;

			//if (fadeIn > 50) fadeAmount = -10;

	//} else{

			//if (fadeIn < 0) fadeAmount = 1;

			//if (fadeIn > 70) fadeAmount = -10;
	}

	let l = random(perspectiveX3, perspectiveX4);
	let i = perspectiveY1;
	let n = random(perspectiveX3, perspectiveX4);
	let e = parentHeight;
	
	line(l,i,n,e);

	//fadeIn += fadeAmount;

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
