const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserRoutes = require('./routes/userroutes');
const BlogRoutes = require('./routes/blogroutes');
const Loginroutes = require('./routes/loginroute');
const passport = require('passport')
const User = require('./app/usermodel')
const LocalStrategy = require('passport-local').Strategy;

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

// passport.use(new LocalStrategy(User.authenticate())); 
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


app.use(express.json());
app.use('/api',UserRoutes);
app.use('/api',BlogRoutes);
app.use('/api',Loginroutes)


app.listen(5000 , () => {                     //add port
    console.log("Server is running ");
});