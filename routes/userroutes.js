const express = require('express');
const UserApp = require('../controllers/usercontrollers');
const userrouter = express.Router();

// router.route('/').post(App.create);

userrouter.route('/users')
        .post(UserApp.createuser)
        .get(UserApp.retrieveuser)
        .delete(UserApp.deleteuser)
        .put(UserApp.updateuser)



module.exports = userrouter;
