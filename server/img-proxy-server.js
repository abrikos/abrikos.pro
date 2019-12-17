const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.write(req.url.substr(1));
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
