var webpack, WebpackDevServer, config,
    port, serverProcess, server;

webpack = require('webpack');
WebpackDevServer = require('webpack-dev-server');
config = require('./webpack.config');
port = process.env.PORT || 3001;

config.entry = config.entry.map(function(entry) {
  return entry.replace('PORT', port);
});

server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
});

serverProcess = function(error, result) {
  if (error) {
    console.log(error);
  }
  console.log('Listening at 0.0.0.0:' + port);
};

server.listen(port, '0.0.0.0', serverProcess);
