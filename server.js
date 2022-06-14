const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserRoutes = require('./routes/userroutes');
const BlogRoutes = require('./routes/blogroutes');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/bloggerhead", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Error...', err);
    process.exit();
});

app.get('/', (req,res) => {
    res.json({"message": "Server is running"});
});

// middlewares
app.use(express.json());
app.use('/api',UserRoutes);
app.use('/api',BlogRoutes);
app.use(bodyParser.json());
app.use(cors());

//routes middleware
app.use('/api', authRoutes);

//add port
app.listen(2000 , () => {                     
    console.log("Server is running on port 2000");
});