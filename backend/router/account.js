const { Router } = require('express');
const { getBalance, transferMoney } = require('../controllers/account');
const { userAuthMiddleware } = require('../middlewares/user');
const router = Router();

router.get('/getBalance', userAuthMiddleware, getBalance);
router.post('/transferMoney',userAuthMiddleware, transferMoney);


module.exports = router;