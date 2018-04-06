// importing the modules for the creating the server
var http = require('http');
var fs = require('fs');
var path = require('path');

// hostname and port no. i.e. http://localhost:3000
var hostname = 'localhost';
var port = '3000';

// Creating the server with the GET method.
// Server will only response when the request in the GET method is used
var server = http.createServer(function(request, response){
	console.log("Request for " +request.url + " by method " + request.method);
	if (request.method == 'GET') {
		var fileUrl;
		if (request.url == '/') fileUrl = '/index.html';
		else fileUrl = request.url;
		var filePath = path.resolve('./public' + fileUrl);
		// Checking the file extension in the public directory...
		var fileExt = path.extname(filePath);
		if (fileExt == '.html'){
			fs.exists(filePath, function(exists){
				if(!exists){
					response.writeHead(404, {'Content-Type': 'text/html' });
					response.end('<html><body><h1>Error 404: ' + fileUrl + 
                        ' not found</h1></body></html>');
					return;
				}
				response.writeHead(200, {'Content-Type': 'text/html'});
				fs.createReadStream(filePath).pipe(response);
			});
		}
		else{
			response.writeHead(404, {'Content-Type': 'text/html'});
			response.end('<html><body><h1>Error 404: ' + fileUrl + 
                ' not a HTML file</h1></body></html>');
		}
	}
	else{
		response.writeHead(404, {'Content-Type': 'text/html'});
		response.end('<html><body><h1>Error 404: ' + fileUrl + 
            ' not a HTML file</h1></body></html>');		
	}
});

// Setting the server hostname and port in which it is running...
server.listen(port, hostname, function(){
	console.log('Server running at http://${hostname}:${port}');
})



