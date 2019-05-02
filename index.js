var server = require('./server');
var router = require('./router');
var handlers = require('./handlers');

var handle = {
  '/': handlers.start,
  '/start': handlers.start,
  '/upload': handlers.upload,
  '/show': handlers.show
};

server.start(router.route, handle);
