// function InferClass(initX, initY, color_){
var InferClass/*(initX, initY, color_)*/ = Object.create(new SuperClass(100,100,'red')){
	this.xpos = initX;
	this.ypos = initY;
	this.clr = color_;

	this.update = function(){
		console.log(this.constructor.name + " Update")
	}

	this.calculatePosition = function(){

	}
}