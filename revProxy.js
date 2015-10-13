var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8001);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8002);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8003);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8004);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8005);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8006);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8007);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8008);
httpProxy.createProxyServer({target:'http://localhost:8083'}).listen(8009);

//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' +
JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
