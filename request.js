const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Message: ', response.statusMessage + "\n", response.headers["content-type"]);
       })
       .pipe(fs.createWriteStream('./future.jpg'));