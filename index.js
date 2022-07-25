var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
require('dotenv').config();

const port = process.env.PORT;

io.on('connection', function (socket) {
	console.log('connection from ', socket.id);

	socket.on('CH01', function (from, msg) {
		console.log(from, msg);
	});

	socket.once('disconnect', () => {
		console.log('client', socket.id, 'disconnected');
	});

});



http.listen(port, function () {
	console.log(`listening on *:${port}`);
});
