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
var gun1 = {
  projType : "bullet",
  projSpeed : 8,
  fireMode : "single"
}
var gun2 = {
  projType : "laser",
  projSpeed : 15,
  fireMode : "auto"
}
var gun = gun1;

var projectiles = [];


function setup() {
  createCanvas(600, 600);
  textSize(20);

}

function draw() {
  background(0, 50, 100);

  plr.calcPos();
  plr.redraw();

  for(let obj of projectiles){
    obj.calcPos();
    obj.redraw();
  }

  debugInfo(plr);
}

function keyPressed() {
  if (keyCode === 49){
    gun = gun1;
  }
  if (keyCode === 50){
    gun = gun2;
  }
}

function mousePressed() {
  projectiles.push(new Projectile(plr, [mouseX, mouseY], gun));
}

function debugInfo(plr_){

  stroke(0);
  fill(255);
  strokeWeight(1);

  line(plr_.xpos, plr_.ypos, mouseX, mouseY);

  text(keyCode_, 100, 100);
  if(projectiles.length){
    text(Object.values(projectiles[projectiles.length-1].heading), 100, 50);
  }

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