const jwt = require('jsonwebtoken')

const AuthMiddleware = (req, res, next) => {
    console.log('in auth middleware');
    const token = req.headers.authorization.split(' ')[1]
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