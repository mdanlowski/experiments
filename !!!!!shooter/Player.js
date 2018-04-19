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

	}


	this.calcPos = function(){
		if (keyIsDown(65)) {
			this.xpos -= 2;
		}

		if (keyIsDown(68)) {
			this.xpos += 2;
		}

		if (keyIsDown(87)) {
			this.ypos -= 2;
		}

		if (keyIsDown(83)) {
			this.ypos += 2;
		}

	}


}

// export { Player };