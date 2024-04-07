const { Account } = require("../db");

const getBalance = async (req, res) => {
    try {
        const userId = req.userId;
        const account = await Account.findOne({ userId });
        if (account) {
            return res.status(200).json({
                balance: account.balance
            });
        } else {
            return res.status(411).json({
                message: "Account does not exist"
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { getBalance };