let express = require('express'),
    path    = require('path');

const PORT = process.env.PORT || 8080

let app = express();

app.use(express.static(__dirname + '/public'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
});
