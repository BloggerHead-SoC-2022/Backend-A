const express = require('express');
const UserApp = require('../controllers/controllers');
const router = express.Router();

// router.route('/').post(App.create);

router.route('/users')
        .post(UserApp.create)
        .get(UserApp.retrieve)
        .delete(UserApp.deleteMsg)
        .put(UserApp.update)

module.exports = router;