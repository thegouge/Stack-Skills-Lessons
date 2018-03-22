var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    console.log("request from client");

    if (request.method == "GET" && request.url == "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('./learn-node/index.html').pipe(response);
    }
    else {
        response_404(response);
    }
}

function response_404 (response) {
    response.writeHead(404, {"Content-Type": "Text/plain"});
    response.write("Sorry, the page you are looking for can't be found");
    response.end();
}

http.createServer(onRequest).listen(3000);
console.log("The Server is working!");
