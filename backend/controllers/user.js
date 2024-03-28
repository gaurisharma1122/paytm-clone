const zod = require('zod');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
const { JWT_SECRET } = require('../config');

const userSignup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const userSchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
        firstName: zod.string().max(50),
        lastName: zod.string().max(50),
    });
    const result = userSchema.safeParse({ email, password, firstName, lastName });
    if (result.error) {
        res.status(411).json({
            message: `Incorrect inputs: ${result.error}`
        });
    }
    try {
        //checking if email has been already taken
        const user = await User.findOne({ email });
        if (user) {
            return res.status(411).json({
                message: "Email already taken"
            });
        } else {
            //if not then creating a new user
            const newUser = await User.create({ email, password, firstName, lastName });
            return res.status(200).json({
                message: "User created successfully"
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message
        });
    }
};

const userSignin = async (req, res) => {
    const { email, password } = req.body;
    const userSchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });
    const result = userSchema.safeParse({ email, password });
    if (result.error) {
        res.status(411).json({
            message: `Incorrect inputs: ${result.error}`
        });
    }
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            const jwt_token = jwt.sign({ userId: user._id }, JWT_SECRET);
            return res.status(200).json({
                token: jwt_token
            });
        } else {
            return res.status(411).json({
                message: "User does not exist"
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message
        });
    }
}

const userUpdate = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.userId });
        if (user) {
            const userUpdateSchema = zod.object({
                password: zod.string().optional(),
                firstName: zod.string().optional(),
                lastName: zod.string().optional(),
            });
            const { success } = userUpdateSchema.safeParse(req.body);
            if (success) {
                const updatedUser = await User.updateOne({ _id: req.userId }, req.body);
                return res.status(200).json({
                    message: "Updated successfully"
                });
            } else {
                return res.status(411).json({
                    message: "Error while updating information"
                });
            }
        } else {
            return res.status(411).json({
                message: "User doesn't exist"
            });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message
        });
    }

};

const getUsers = async (req, res) => {
    try {
        const filter = req.query.filter || "";
        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            }, {
                lastName: {
                    "$regex": filter
                }
            }]
        });
        return res.status(200).json({
            users: users.map((item) => {
                const { _id, email, firstName, lastName } = item;
                return { _id, email, firstName, lastName };
            })
        });
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { userSignup, userSignin, userUpdate, getUsers };