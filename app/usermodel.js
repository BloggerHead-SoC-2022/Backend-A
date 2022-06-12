const mongoose = require('mongoose')
 
const userdata = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});


module.exports = mongoose.model("Userapp", userdata);