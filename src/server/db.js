const mongoose = require('mongoose');
const shema = { title: String, text: String };

let Doc;

mongoose.connect(
    'mongodb://127.0.0.1:27017/my_documents',
    { useNewUrlParser: true, user: "polina", pass: "1234" }
).then(() => {
    Doc = mongoose.model('Doc', new mongoose.Schema(shema));
});

function validate(value) {
    return value !== "";
}

function insert(title, text) {
    if (!validate(title) || !validate(text)) {
        return;
    }
    new Doc({ title: title, text: text })
        .save()
        .then(() => {
            console.log('inserted data');
            return this._id;
        });
}

async function update(id, title, text) {
    if (!validate(title) || !validate(text)) {
        return;
    }
    const document = await Doc.findById(id);
    document.title = title;
    document.text = text;
    document.save()
        .then(() => console.log('updated data'));
}

function selectAll() {
    return new Promise((resolve, reject) => {
        Doc.find((err, docs) => {
            if (err) {
                reject(err);
            }
            resolve(docs);
        });
    })
}

module.exports = {
    insert,
    update,
    selectAll
}
