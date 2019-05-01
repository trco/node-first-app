var exec = require('child_process').exec;

function start(res) {
  console.log('Handler "start" was called.');
  exec('ls -lah', function (err, stdout, stderr) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.write(stdout);
    res.end();
  });
}

function upload(res) {
  console.log('Handler "upload" was called.');
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.write('Hello Upload.');
  res.end();
}

exports.start = start;
exports.upload = upload;
