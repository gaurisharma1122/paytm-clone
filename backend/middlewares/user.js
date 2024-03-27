const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const userAuthMiddleware = (req, res, next) => {
    const token = request.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(411).json({});
    }

    const words = token.split(" ");
    const jwt_token = words[1];

    try {
        const userId = jwt.verify(jwt_token, JWT_SECRET).userId;
        if (userId) {
            req.userId = userId;
            next();
        } else {
            return res.status(411).json({
                message: "You are not authenticated"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { userAuthMiddleware };