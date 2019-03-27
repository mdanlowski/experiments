
var xoff = 0;
var yoff = 0;
var bufxn = [];
var bufxr = [];
var bufy = [];

function setup() {
    createCanvas(640, 640);
}

function draw() {
    background(0, 255, 100);
    
    // var x = 320;
    // var x = random(width);
    var x = 400 + noise(xoff)*100; // -> returns [0,1]
    // var y = noise(yoff)*height; // -> returns [0,1]
    var xr = 150 + random(0,100);

    bufxn.push(x);
    bufxr.push(xr);
    bufy.push(yoff);

    xoff += 0.015;
    yoff += 0.5;
    
    noFill();

    strokeWeight(1);
    beginShape();
    for (var i = bufxn.length - 1; i >= 0; i--) {
        vertex(bufxn[i], bufy[i]);
    }
    endShape();
        stroke(255,0,0);
        line(width/2, height, x, yoff);
        stroke(0);  

    strokeWeight(0.2);
    beginShape();
    for (var i = bufxr.length - 1; i >= 0; i--) {
        vertex(bufxr[i], bufy[i]);
    }
    endShape();
        strokeWeight(1);
        stroke(0,0,255);
        line(width/2, height, xr, yoff);
        stroke(0);
  

}
