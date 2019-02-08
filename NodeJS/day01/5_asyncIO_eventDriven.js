var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req,res) {
    var ip = req.connection.remoteAddress;
    // console.log('ip: '+ip+", begin to read file...");
    console.log("ip: "+ip+"begins to compute...");

    fs.readFile("./public/a.html",function (err, data) {
        res.setHeader("Content-Type","text/html;charset=UTF-8");
        res.end(data);
        console.log("finished to read.");
    });
});

server.listen(3000);