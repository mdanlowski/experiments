
var xoff = 0;
var yoff = 0;
var bufxn = [];
var bufxr = [];
var bufy = [];
var bufx = [];

function setup() {
    createCanvas(640, 640);
}

let testCrt = new Creature(300,300, 5, 2, 'red', 'A');

function draw() {
    background(0, 255, 100);
    
    testCrt.calculatePosition();
    testCrt.update();  

}

function Creature(initx, inity, velocity, acclr, color_, class_) {
    this.x = initx;
    this.y = inity;
    this.v = velocity;
    this.a = acclr;
    this.clr = color_;
    this.cls = class_;

    this.update = function( x=this.x, y=this.y ){
        switch(this.cls){
            case 'A':
                fill(this.clr);
                strokeWeight(2);
                ellipse(x,y, 50,50);
                strokeWeight(1);

                break;

            case 'B':
                break;

            default:

                break;
        }
    }

    this.calculatePosition = function(){
        // x += dv
        this.x = mouseX + this.vx;
        this.y = mouseY + this.vy;
        this.vx += this.ax;
        this.vy += this.ay;
    }

}





    
    // var x = 320;
    // // var x = random(width);
    // var x = 400 + noise(xoff)*100; // -> returns [0,1]
    // // var y = noise(yoff)*height; // -> returns [0,1]
    // var xr = 150 + random(0,100);

    // bufxn.push(x);
    // bufxr.push(xr);
    // bufy.push(yoff);

    // xoff += 0.015;
    // yoff += 0.5;
    
    // noFill();
    