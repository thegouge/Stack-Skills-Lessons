var http = require('http');
var connect = require('connect');
var fs = require('fs');
var app = connect();

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

function images(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Welcome to the images page");
    response.end();
}

function response_404 (response) {
    response.writeHead(404, {"Content-Type": "Text/plain"});
    response.write("Sorry, the page you are looking for can't be found");
    response.end();
}

app.use("/home", onRequest);
app.use("/images", images);

http.createServer(app).listen(3000);
console.log("Server up and running!");
