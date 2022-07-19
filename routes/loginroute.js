const express = require('express');
const logincontrollers = require('../controllers/logincontrollers');
const loginrouter = express.Router();

loginrouter.route('/login')
        .post(logincontrollers.logincheck);

module.exports = loginrouter;
