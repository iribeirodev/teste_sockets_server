//server.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
	console.log('connection from ', socket.id);

	socket.on('CH01', function (from, msg) {
		console.log(from, msg);
	});

	socket.once('disconnect', () => {
		console.log('client', socket.id, 'disconnected');
	});

});



http.listen(3000, function () {
	console.log('listening on *:3000');
});
