const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow } = require('../controllers/user');
const { route } = require('./page');

const router = express.Router();

// POST /user/:id/follow
route.post('/:id/follow', isLoggedIn, follow);

module.exports = router;