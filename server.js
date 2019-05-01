var http = require('http');
var url = require('url');

function start(route, handle) {
  http.createServer(function(req, res) {
    var postData = '';
    var pathname = url.parse(req.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    req.setEncoding("utf8");

    // Listening to POST request & getting data
    req.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log('postDataChunk: ' + postDataChunk);
    });

    // POST end event passing postData to route
    req.addListener('end', function() {
      route(handle, pathname, res, postData);
    });

  }).listen(8000);
}

console.log('Server running at http://127.0.0.1:8000/');

exports.start = start;
