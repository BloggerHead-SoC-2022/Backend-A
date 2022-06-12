const express = require('express');
const BlogApp = require('../controllers/blogcontrollers');
const blogrouter = express.Router();

blogrouter.route('/blogs')
        .post(BlogApp.createblog)
        .get(BlogApp.retrieveblog)
        .delete(BlogApp.deleteblog)
        .put(BlogApp.updateblog)

module.exports = blogrouter;
