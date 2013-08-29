var httpProxy = require('http-proxy'),
    http = require('http'),
    //app = express(),
    proxy = new httpProxy.RoutingProxy();
    
http.createServer(function (req, res) {
  //
  // Put your custom server logic here, then proxy
  //
  proxy.proxyRequest(req, res, {
    host: 'todohq.herokuapp.com',
    port: 80,
    changeOrigin: true
  });
}).listen(8001);