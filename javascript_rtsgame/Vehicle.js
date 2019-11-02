
function Vehicle(initX, initY, hp_, ammo_, color_, combatClass_){
	this.xpos = initX;
	this.ypos = initY;
	this.hp = hp_;
	this.ammo = ammo_;
	this.clr = color_;

	this.combatClass = combatClass_;

	this.isSelected = false;

	this.redraw = function( x=this.xpos, y=this.ypos, c=this.clr, cClass=this.combatClass ){
		//check selection area
		if ( selectionOn && ( x>selectInitX && y>selectInitY && x<mouseX && y<mouseY ) ){
			this.isSelected = true;
		}
		if ( selectionOn && !( x>selectInitX && y>selectInitY && x<mouseX && y<mouseY ) ){
			this.isSelected = false;
		}

		if(this.isSelected){
			stroke('lime');
		}
		else {
			stroke('black');
		}

		strokeWeight(2);
		fill(c)

		switch(cClass){
			case 'LV' : {
				
				break;
			}
			case 'AV' : {
				
				break;
			} 
			case 'MV' : {
				
				break;
			} 
			case 'HV' : {
				
				break;
			} 
			case 'AT' : {
				
				break;
			} 
			case 'MT' : {
				
				break;
			}
			case 'HT' : {
				
				break;
			} 
			case 'UT' : {
				
				break;
			}
			case 'AL' : {
				
				break;
			}  
			case 'AH' : {
				
				break;
			}  
		}
	}
	
	this.calcPos = function(){

	}

}
