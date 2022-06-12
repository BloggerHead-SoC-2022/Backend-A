const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserRoutes = require('./routes/userroutes');
const BlogRoutes = require('./routes/blogroutes');

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
app.use('/api',UserRoutes);
app.use('/api',BlogRoutes);


app.listen(2000 , () => {                     //add port
    console.log("Server is running ");
});