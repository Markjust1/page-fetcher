const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

const url = args[0];
const filePath = args[1];


request(url, (error, response, body) => {
  if (error) { console.log("error found") }

  fs.writeFile(filePath, body, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);

  });
});