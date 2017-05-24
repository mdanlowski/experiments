/*  RUNS IN THE PROCESSING IDE
    WRITTEN IN PROCESSING 3.0.2
    Marcin Danlowski - May 2017
    PROCESSING REQUIRES JAVA
*/

float dx, dy, dz;
PImage piesel; // create instance of PImage class

void setup() {
  size(1024, 768, P3D);
  textSize(16);
  piesel = loadImage("ayy.jpg"); // load image of the doge face
  piesel.resize(250,250); // resize the doge
    
}

void draw() {
 
  background(50, 50, 50);
    
  text("x = " + dx, 10, 15); // print how much the cube is rotated along the X axis
  text("y = " + dy, 10, 35); // and so on
  text("z = " + dz, 10, 55);
  text("----------", 10, 75);
  text("dx = " + -1*(pmouseX - mouseX), 10, 95); // print the temporal mouse speed x
  text("dy = " + -1*(pmouseY - mouseY), 10, 110); // mouse speed y
  
  stroke(255, 0, 0);
    // szescian
    translate(width/2, height/2); // set ref point to center in the canvas
    rotateX(dy);
    rotateY(dx);
    //rotateZ(dz);
    //directionalLight(0, 255, 0, 150, 100, 100);
    //ambientLight(0, 0, 200);
      box(250);  // draw a cube of 250px on the side
      translate(0, 0, 125); // translate the object BELOW by 125px in Z
      image(piesel, -125, -125); // the object is the doge photo
      noFill();  // only show borders of 3D objects
      
      //_rotate();
      
}

void /*_rotate()//*/mouseDragged() 
{
  dx += -0.01*(pmouseX - mouseX); // calculate the X mouse speed with framerate as the time interval and change the value used to to draw the cube
  if (dx > 6.2) {
    dx = 0;        //6.2 ok??
  }
  dy += 0.01*(pmouseY - mouseY);
  if (dy > 6) {
   dy = 0;
  }
}
