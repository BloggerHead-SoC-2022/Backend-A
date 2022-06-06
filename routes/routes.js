const express = require('express');
const UserApp = require('../controllers/controllers');
const router = express.Router();

// router.route('/').post(App.create);

router.route('/users')
        .post(UserApp.createuser)
        .get(UserApp.retrieveuser)
        .delete(UserApp.deleteuser)
        .put(UserApp.updateuser)

module.exports = router;