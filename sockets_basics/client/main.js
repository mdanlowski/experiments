var socket = io();

var socketAction = function(callingAgent){
	socket.emit(callingAgent.msg, {
		identifier : "unique client " + callingAgent.identifier,
	});

	socket.on('serverMsg', function(data){
		console.log(data.msg);
	});
}

// example object
var exampleCaller = {
	msg : "chatMessage",
	identifier : Math.random()
}

function setup() {
    createCanvas(640, 640);
}

function draw() {
    background(0, 255, 100);
}
