function route(handle, pathname, res, postData) {
  console.log('Routing request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, postData);
  } else {
    console.log('No request handler found for ' + pathname);
    res.writeHead(404, {'Content-type': 'text/plain'});
    res.write('404 Not found.');
    res.end();
  }
}

exports.route = route;
