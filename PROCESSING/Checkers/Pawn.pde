class Pawn {
  private int x, y;
  private boolean team;
  
  Pawn(int _x, int _y, boolean _team){
    x = _x;
    y = _y;
    team = _team;
    drawPawn();
  }
  
  public void movePawn() {
  }
  
  public void drawPawn() {
      strokeWeight(3);
        if (team) fill(180, 120, 0);
        else fill(10);
        ellipse(x, y, 75, 75);
      strokeWeight(1);
  }
  
  public void mouseDragged(){
    x = mouseX;
    y = mouseY;
  }
    
}