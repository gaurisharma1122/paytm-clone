const mongoose = require('mongoose');
const { Account, User } = require("../db");

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

const transferMoney = async (req, res) => {
    try {
        const { to, amount } = req.body;
        const userId = req.userId;
        const userAccount = await Account.findOne({ userId });
        const receiverAccount = await Account.findOne({ userId: to });
        if (!receiverAccount || !userAccount) {
            return res.status(411).json({
                message: `${ !receiverAccount ? 'Receiver' : 'User' } account not found`
            });
        }
        const session = await mongoose.startSession();
        await session.startTransaction();

        if (amount > userAccount.balance) {
            await session.abortTransaction();
            return res.status(411).json({
                message: 'Insufficient Balance'
            });
        }

        await Account.updateOne({ userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amaount } }).session(session);

        await session.commitTransaction();

        return res.status(200).json({
            message: "Money transferred successfully",
            
        });
        
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { getBalance, transferMoney };