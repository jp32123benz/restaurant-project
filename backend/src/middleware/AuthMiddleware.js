const jwt = require('jsonwebtoken')

const AuthMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    console.log('token=========', token);
    if (token) {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        if (decodedToken) {
            next()
        } else {
            res.status(400).json({ statusCode: 400, msg: "Invalid User" })
        }
    }
}

module.exports = AuthMiddleware