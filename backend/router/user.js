const { Router } = require('express');
const { userSignup, userSignin, userUpdate, getUsers } = require('../controllers/user');
const { userAuthMiddleware } = require('../middlewares/user');
const router = Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.put('/', userAuthMiddleware, userUpdate);
router.get('/bulk', getUsers);

module.exports = router;