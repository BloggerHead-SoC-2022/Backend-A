const express = require('express');
const app = express();
const mongoose = require('mongoose');
const AppRoutes = require('./routes/routes');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/bloggerhead", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

app.get('/', (req,res) => {
    res.json({"message": "Server is running"});
});


app.use(express.json());
app.use('/api',AppRoutes);


app.listen(2010 , () => {
    console.log("Server is running ");
});