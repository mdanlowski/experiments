// built with p5.js library
// https://p5js.org/reference/

// debugger

  var side = 100;
  var dx = 0;
  var dy = 0;

function setup() {  // #########################################
  createCanvas(600, 600, WEBGL);

}

function draw() {   // #########################################

	background(200);

	rotateX(dx);
	rotateY(dy);

	// stroke(0);
	// noFill();

	// ambientLight(255,0,0);
	// directionalLight(0, 150, 150, 100, 100, 0);

	box(side, side, side);
	
	plane(10000, 3);
		rotateY(PI/2);
	plane(10000, 3);
		rotateZ(PI/2);
	plane(10000, 3);

	translate(0, 0, side);
		box(side, side, side);
  	translate(side, 0, -side);
		box(side, side, side);
	translate(-side, side, 0);
		box(side, side, side);

}

function mouseDragged(){

  dy += -0.0036*(pmouseX - mouseX); // we create an increment proportional to the speed
  									// of mouse in between frames, then use it to rotate the cube
  dx += -0.0036*(pmouseY - mouseY);

}
