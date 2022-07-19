const mongoose = require('mongoose');

const userdata = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
});


module.exports = mongoose.model("User", userdata);