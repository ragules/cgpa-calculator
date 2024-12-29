var http = require('http');

var server = http.createServer((request, response) => {

        if(request.url == "/") {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write("Hello!");
            console.log(request.url);
            response.end();
        }

        else if(request.url == "/student"){
            response.writeHead(200, {'Content-Type': ''})
        }
});


server.listen(8080);