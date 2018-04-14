// Prototype project I :: Shooter game
/* KEY CODES:
  37 = LEFT_ARROW
  38 = UP_ARROW
  39 = RIGHT_ARROW
  40 = DOWN_ARROW
  32 = SPACE

*/
// import { Player } from "Player";

var keyCode_ = "";

var plr = new Player(300, 300, 100, 10, 'green');

function setup() {
  createCanvas(600, 600);
  textSize(20);


}

function draw() {
  background(0, 255, 100);
  fill(255);

  debugInfo(plr);

  plr.calcPos();
  plr.redraw();

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
  keyCode_ = keyCode;
}

function debugInfo(plr_){

  text(keyCode_, 100, 100);

  switch(keyCode_){
    case 37:
      text("LEFT_ARROW", 200, 100);
      break;
    case 38:
      text("UP_ARROW", 200, 100);
      break;
    case 39:
      text("RIGHT_ARROW", 200, 100);
      break;
    case 40:
      text("DOWN_ARROW", 200, 100);
      break;
  }

  text(plr_.xpos, 100, 130);
  text(plr_.ypos, 150, 130);

}