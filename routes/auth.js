const express = require('express');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { join, login, logout } =require('../controllers/auth');

const router = express.router();

// POST /auth/join
router.post('join', isNotLoggedIn, join);

// POST /auth/login
router.post('login', isNotLoggedIn, login);

// POST /auth/logout
router.post('logout', isNotLoggedIn, logout);

module.exports = router;