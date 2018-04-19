function Projectile(origin_, heading_, weapon_){
	this.birthFrameCount = frameCount;
	this.xpos = origin_.xpos;
	this.ypos = origin_.ypos;
	this.heading = {
		x : 0.01*(heading_[0] - this.xpos),
		y : 0.01*(heading_[1] - this.ypos)
	}
	this.vel = weapon_.projSpeed;
	
	// var headingMag = (hx, hy) => Math.sqrt(hx**2 + hy**2);
	var headingMag = function(h = this.heading){ 
		return Math.sqrt(h.x**2 + h.y**2); // UNDEF?!?!?
  };

	this.calcPos = function() {
		// let headingMag = Math.sqrt(this.heading.x, this.heading.y);
		this.xpos += (1/headingMag()) * this.vel * this.heading.x;
		this.ypos += (1/headingMag()) * this.vel * this.heading.y;

	}

	this.redraw = function(){
		switch(weapon_.projType){
			case "bullet":
				noStroke();
				fill("lime");
				ellipse(this.xpos, this.ypos, 6, 6);
				break;

			case "laser":
				strokeWeight(3);
				stroke('cyan');
					// let laserLineX = this.xpos + (1/headingMag(this.heading.x, this.heading.y))*150*this.heading.x;
					let laserLineX = this.xpos + (1/headingMag()) * 150 * this.heading.x;
					let laserLineY = this.ypos + (1/headingMag()) * 150 * this.heading.y;
				line(this.xpos, this.ypos, laserLineX, laserLineY );
				break;

		}

		// nullifying objects for GC
		// if (frameCount - this.birthFrameCount > 1000){
		// 	for (var i = Object.keys(this).length - 1; i >= 0; i--) {
		// 	 	Object.keys(this)[i] = null;
		// 	 }
		// }
		
	}
}
