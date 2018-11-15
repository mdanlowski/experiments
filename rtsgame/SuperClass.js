function SuperClass(initX, initY, color_){
	this.xpos = initX;
	this.ypos = initY;
	this.clr = color_;

	this.update = function(){
		console.log(this.constructor.name + " Update")
	}

	this.calculatePosition = function(){

	}
}