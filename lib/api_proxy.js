var httpProxy = require('http-proxy');

/**
 * On the client, we want to be able to just send API requests to the
 * main web server using a relative URL, so we proxy requests to the
 * API server here.
 */
var proxy = new httpProxy.RoutingProxy();

module.exports.proxyMiddleware = function(apiPort) {
  return function(req, res, next) {
    proxy.proxyRequest(req, res, {
      host: 'localhost',
      port: apiPort
    });
  };
};
