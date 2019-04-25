const express = require('express');
const path = require('path');
const app = express();

/*
app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'));
});
*/
app.use('/', express.static('dist'))


app.listen(8080, '0.0.0.0', () => {
    console.info('Server is up');
});
