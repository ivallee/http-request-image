const request = require('request');
const fs = require('fs');

console.log('Downloading image...');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    throw err;
  })
  .on('response', function (response) {
    console.log('Response Message: ', response.statusMessage + "\n", response.headers["content-type"]);
    console.log('Download Complete');
  })
  .pipe(fs.createWriteStream('./future.jpg'));
