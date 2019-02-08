var http = require('http');

var server = http.createServer(function(req, res) {
  var n = parseInt(Math.random() * 10000);
  if(n===6666) {
      throw new Error("err: 6666, ip: "+req.connection.remoteAddress);
  }
  res.end('num: ' + n);
  console.log('req.connection.remoteAddress:', req.connection.remoteAddress);
});
 
server.listen(3000);
