const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('.', 'index.html'));
});

app.listen(8080, () => {
    console.info('Server is up');
});
