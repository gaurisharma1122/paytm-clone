const { Router } = require('express');
const { getBalance } = require('../controllers/account');
const { userAuthMiddleware } = require('../middlewares/user');
const router = Router();

router.get('/getBalance', userAuthMiddleware, getBalance);


module.exports = router;