/*
  Travelling salesperson problem

  Given a map of cities (nodes)
  find the sequence of nodes that result in a shortest path connecting them
  
  Written with help of terrific tutorials by mr Dan Shiffman (https://github.com/shiffman/)
  
  STAGE 1: RANDOM SHUFFLING OF NODES
*/

  var nodes = [];
  var totalNodes = 7;

  var recordDistance;
  var optimal;

function setup() {  // #########################################
  createCanvas(400, 400);

  for (var i = 0; i < totalNodes; i++) {
    let v = createVector(random(width), random(height)); // create mathematical vectors with coordinates between 0 and canvas's w/h
    nodes[i] = v;
  }

  var d = calcDist(nodes);
  recordDistance = d;
  optimal = nodes.slice();
  console.log(recordDistance);

}

function draw() { // #########################################
  background(0);

  for (var i = 0; i < nodes.length; i++) {
    ellipse(nodes[i].x, nodes[i].y, 8, 8);
  }
      stroke(255);
      strokeWeight(2);
      noFill();

  beginShape();
  for (var i = 0; i < nodes.length; i++) {
    vertex(nodes[i].x, nodes[i].y);
  }
  endShape();

      stroke(255, 0, 0);
      strokeWeight(4);
      noFill();

  beginShape();
  for (var i = 0; i < nodes.length; i++) {
    vertex(optimal[i].x, optimal[i].y);
  }
  endShape();

    let a = floor(random(nodes.length));  // FOR NOW WE ARE RANDOMLY SWAPPING NODES
    let b = floor(random(nodes.length));  // NOT REALLY THAT METHODIC
  // swap(nodes, a, b);

  let d = calcDist(nodes);
  if(d < recordDistance){
    recordDistance = d;
    optimal = nodes.slice();
    console.log(recordDistance);
  }

}
// #########################################
function swap(arr, i, j){   // i.e. we want [A][B][C] to become [A][C][B]
  if((i <= arr.length-1) && (j <= arr.length-1)){
    let hold = arr[i];
    arr[i] = arr[j];
    arr[j] = hold;
  }
  else{
    console.log("ERR");
  }
}
// #########################################
function calcDist(points){

  let sum = 0;
  for (var i = 0; i < points.length - 1; i++) {
    let d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y); // dist - p5 native
    sum += d;
  }
  return sum;
}
