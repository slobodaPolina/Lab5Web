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

async function insert(title, text) {
    if (!validate(title) || !validate(text)) {
        return;
    }
    let doc = new Doc({ title: title, text: text });
    await doc.save();
    return doc._id;
}

async function update(id, title, text) {
    if (!validate(title) || !validate(text)) {
        return;
    }
    const document = await Doc.findById(id);
    document.title = title;
    document.text = text;
    await document.save();
    return document._id;
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
