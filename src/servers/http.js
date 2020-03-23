const http = require('http');

module.exports = (api) => {
  const server = http.Server(api);

  const port = parseInt(process.env.PORT, 10) || 8080;
  api.set('port', port);

  return server.listen(api.get('port'));
};
