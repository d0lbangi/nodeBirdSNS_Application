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

// kakao login router
// GET /auth/kakao
router.get('/kakao', passport.authenticate('kakao'));

// GET /auth/kakao/callback
router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/?loginError=카카오로그인 실패',
}), (req, res) => {
  res.redirect('/'); 
});

module.exports = router;