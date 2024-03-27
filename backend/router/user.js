const { Router } = require('express');
const { userSignup, userSignin } = require('../controllers/user');
const router = Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);

module.exports = router;