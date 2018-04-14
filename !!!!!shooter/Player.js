// Blueprint for player

function Player(initX, initY, hp_, ammo_, color_){
	this.xpos = initX;
	this.ypos = initY;
	this.hp = hp_;
	this.ammo = ammo_;
	this.clr = color_;

	this.redraw = function(){
		fill( this.clr );
		stroke(0);
		ellipse(this.xpos, this.ypos, 25, 25);

		line(this.xpos, this.ypos, mouseX, mouseY);

	}


	this.calcPos = function(){
		if (keyIsDown(LEFT_ARROW)) {
			this.xpos -= 2;
		}

		if (keyIsDown(RIGHT_ARROW)) {
			this.xpos += 2;
		}

		if (keyIsDown(UP_ARROW)) {
			this.ypos -= 2;
		}

		if (keyIsDown(DOWN_ARROW)) {
			this.ypos += 2;
		}

	}


}

// export { Player };