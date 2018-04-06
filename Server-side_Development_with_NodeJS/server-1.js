var http = require('http');

var hostname = "localhost";
var port = 3000;

var server = http.createServer(function(request, response){
	console.log(request.headers);
	response.writeHead(200, {'Content-Type': 'text/html' });
	response.end('<html><body><h1>Hello World</h1></body></html>');
});
server.listen(port, hostname, function(){
	console.log('server running at http://${hostname}:${port}');
});