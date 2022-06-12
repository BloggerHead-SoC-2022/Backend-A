const mongoose = require('mongoose')

const blogdata = mongoose.Schema({
    title: String,
    content: String,
    userID: String,
});

module.exports = mongoose.model("Blogdata", blogdata);