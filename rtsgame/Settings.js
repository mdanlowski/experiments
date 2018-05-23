/*
	GLOBAL SELECTION SETTINGS
*/
var selectInitX;					// beginning coord X of rectangular selection
var selectInitY;					// beginning coord Y of rectangular selection
var selectionColor = 'cyan'; 		// color of selection border
var selectionOn = false;			// triggered true when selection takes place
/*
	GLOBAL KEY SETTINGS
*/
var selectionKey;					// key used for drawing selection area
var commandKey;						// key used to open commands menu




/*
	UNIT COMBAT CLASSES
*/
var combatClasses = {
	LI : "Light Infantry",
	HI : "Heavy Infantry",
	//-------------------
	LV : "Light Mobile",
	AV : "Light Anti-air Mobile",
	MV : "Armored Mobile",
	HV : "Heavy Mobile",
	//-------------------
	AT : "Light Anti-air Tank",
	MT : "Medium Tank",
	HT : "Main Battle Tank",
	UT : "Heavy Tank",
	//-------------------
	AL : "Artillery Low Range",
	AH : "Artillery High Range",
	//-------------------
	LA : "Airborne Scout",
	FA : "Fighter",
	BA : "Bomber",
	HA : "Heavy Battle Aircraft",
	//-------------------special:
	UAT : "Unarmed Transporter",
	UHC : "Ultra Heavy Crawler",


}

