var express = require('express');
var app = express();
var srv = require('http').Server(app);

// Routing
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

srv.listen(2000);
console.log('--> server initialized');

// Sockets
var io = require('socket.io')(srv, {});
io.sockets.on('connection', function(socket){
	console.log('--> client connected');

	socket.on('handshake', function(data) {
		console.log('New ' + data.identifier);
	});

	socket.emit('serverMsg', { 
		msg : 'hello'
	});

});