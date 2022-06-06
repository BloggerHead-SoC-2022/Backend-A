const mongoose = require('mongoose')
 
const sedata = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("App", sedata);