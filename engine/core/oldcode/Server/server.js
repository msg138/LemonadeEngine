require("../engine.js");
require("../mirror.js");


// Server stuff
const server = require('http').createServer();
const io = require('socket.io')(server);
io.set('transports', ['websocket']);

io.on('connection', function (client) {
	
	console.log(client.id + " has connected.");
	
	// Set our constant reference to the socket.
	Lemonade.Mirror.Server.addClient(client);
	
});

// Start listening for the server.
server.listen(2424, function (err) {
	if (err) throw err;
	console.log('listening on port 2424');
});

server.on('/', function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});