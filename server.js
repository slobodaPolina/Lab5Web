const express = require('express');
const path = require('path');
const db = require('./src/server/db.js');
const bodyParser = require('body-parser');

const app = express();

app.use('/', express.static('dist'));
app.use(bodyParser.json());

app.post('/edit', (req, res) => {
    var data = req.body;
    if (data.id == "new") {
        db.insert(data.title, data.text);
    } else {
        db.update(data.id, data.title, data.text);
    }
});

app.get('/index', async function (req, res) {
    res.json(await db.selectAll());
});

app.listen(8080, '0.0.0.0', () => {
    console.info('Server is up');
});
