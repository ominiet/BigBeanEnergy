'use strict';
let express = require('express'),
    path    = require('path'),
    https   = require('https'),
    http    = require('http'),
    fs      = require('fs');

// const options = {
//     key: fs.readFileSync('./certs/key.pem'),
//     cert: fs.readFileSync('./certs/cert.pem')
// };

const PORT = process.env.PORT || 8000;

let app = express();

app.use('/assets',express.static(__dirname + '/public'));
app.use('/packages', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/dist'));

//Wildcard must be registered after actual route
//Route must include / at start
//
app.get('/home', (req, res) => {
  res.send('home route');
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

http.createServer(app).listen(PORT);
console.log(`App listening to ${PORT}....`);
console.log('Press Ctrl+C to quit.')
// https.createServer(options, app).listen(8443);
