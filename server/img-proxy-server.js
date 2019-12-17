const http = require('http');
const axios = require("axios");
//create a server object:
http.createServer(function (req, res) {

    console.log(req.url.substr(1))
    axios.get(req.url.substr(1))
        .then(r=>{
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.write(r.data);
            res.end(); //end the response
        })
        .catch(e=>console.log(e.message))
}).listen(8080); //the server object listens on port 8080
