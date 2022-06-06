const express = require('express');
const App = require('../controllers/controllers');
const router = express.Router();

// router.route('/').post(App.create);

router.route('/')
        .post(App.create)
        .get(App.retrieve)
        .delete(App.deleteMsg)
        .put(App.update)

module.exports = router;