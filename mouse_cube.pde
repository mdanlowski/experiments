float dx, dy, dz;
PImage piesel;

void setup() {
  size(1024, 768, P3D);
  textSize(16);
  piesel = loadImage("ayy.jpg");
  piesel.resize(250,250);
    
}

void draw() {
 
  background(50, 50, 50);
    
  text("x = " + dx, 10, 15); // drukuj wartosc kata w osi x
  text("y = " + dy, 10, 35); // itd
  text("z = " + dz, 10, 55);
  text("----------", 10, 75);
  text("dx = " + -1*(pmouseX - mouseX), 10, 95);
  text("dy = " + -1*(pmouseY - mouseY), 10, 110);
  
  stroke(255, 0, 0);
    // szescian
    translate(width/2, height/2); // ustaw punkt referencyjny na srodek ekranu
    rotateX(dy);
    rotateY(dx);
    //rotateZ(dz);
    //directionalLight(0, 255, 0, 150, 100, 100);
    //ambientLight(0, 0, 200);
      box(250);  // narysuj szescian o boku 150px
      translate(0, 0, 125); // przesun kolejny obiekt o 75 px w osi Z (obraz)
      image(piesel, -125, -125); // rysuj zdjecie
      noFill();  // pokazuj tylko krawedzie
      
      //_rotate();
      
}

void /*_rotate()//*/mouseDragged() 
{
  dx += -0.01*(pmouseX - mouseX); // oblicz predkosc myszki
  if (dx > 6.2) {                 // i proporcjonalnie zwiekszaj kat obrotu
    dx = 0;        //6.2 ok??
  }
  dy += 0.01*(pmouseY - mouseY);
  if (dy > 6) {
   dy = 0;
  }
}