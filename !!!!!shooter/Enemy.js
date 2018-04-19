// Blueprint for npc

function Enemy(initX, initY, heading_, vel_, hp_, ammo_, color_){
	this.xpos = initX;
	this.ypos = initY;
	this.vel = vel_;

	this.hp = hp_;
	this.ammo = ammo_;
	this.clr = color_;

	this.heading = {
		x : 0.01*(heading_[0] - this.xpos),
		y : 0.01*(heading_[1] - this.ypos)
	}

	this.redraw = function(){
		
	}
	
	this.behaviour = function(){
		this.xpos 
		this.ypos
	}

	this.calcPos = function(){

	}

}
