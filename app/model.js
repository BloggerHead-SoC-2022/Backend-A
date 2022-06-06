const mongoose = require('mongoose')
 
const sedata = mongoose.Schema({
    name: String,
    email: String,
    number: String,
});

module.exports = mongoose.model("App", sedata);