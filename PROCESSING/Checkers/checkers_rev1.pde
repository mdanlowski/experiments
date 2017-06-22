boolean colour = false;

Pawn[] ptop = new Pawn[8];
Pawn[] pbot = new Pawn[8];

void setup() {
  size(800, 800);
}

void draw() {
  background(0);
  drawBoard();
  //Pawn p = new Pawn(150, 50, false);

  //noLoop();
  
}

void drawBoard() {
  // draw board
    noStroke();
  for( int rows = 0; rows <= 800; rows += 100 ) {
    for( int cols = 0; cols <= 800; cols += 100 ) {
        if (colour) fill(180, 120, 0, 180);
        else fill(50);
        rect(rows, cols, 100, 100);
        colour = !colour;
    }
  }     
    colour = !colour;
    stroke(0);
  // draw top team (black)
    for (int i = 0; i < 4; i++){
      ptop[i] = new Pawn(150 + i*200, 50, false);
    } 
    for (int i = 4; i < 8; i++){
      ptop[i] = new Pawn(-750 + i*200, 150, false);
    }
    for (int i = 0; i < 4; i++){
      ptop[i] = new Pawn(150 + i*200, 250, false);
    }
    
  // draw bottom team (white)
    for (int j = 0; j < 4; j++){
      ptop[j] = new Pawn(50 + j*200, 650, true);
    } 
    for (int j = 4; j < 8; j++){
      ptop[j] = new Pawn(-650 + j*200, 750, true);
    }
    for (int j = 0; j < 4; j++){
      ptop[j] = new Pawn(150 + j*200, 550, true);
    } 
    
  
}
