var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    if (response.statusCode < 200 || response.statusCode >= 300) {
      console.log('Error Code: ', response.statusCode);
      throw Error();
    }
    console.log('Response Status Code: ', response.statusCode);
    console.log('Response Status Message: ', response.statusMessage);
    console.log('Response Content Type: ', response.headers['content-type']);
    console.log('Downloading image...');
  })
  .on('end', function(response) {
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));