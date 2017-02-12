var theMedium;

function preload(){
	theMedium = loadImage('data/distanceKeepYou.jpg');
}

function setup(){
 createCanvas(windowWidth,windowHeight);
}

function draw(){
	image(theMedium,0,0, windowWidth, windowHeight);
}
