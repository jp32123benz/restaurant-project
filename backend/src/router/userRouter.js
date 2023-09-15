const express = require('express')
const { createUser, loginUser, updateUser, deleteUser, getUser, updateUserPassword, forgotUserPassword } = require('../Controller/userController')
const { registerValidation, loginValidation } = require('../middleware/validationMiddleware')
const AuthMiddleware = require('../middleware/AuthMiddleware')
const upload = require('../Controller/utilityController/multer')

const router = express.Router()

router.post('/create-user', registerValidation, createUser)

router.post('/login-user', loginValidation, loginUser)

router.put('/update-user', AuthMiddleware, upload.single('profile'), updateUser)

router.delete('/delete-user', AuthMiddleware, deleteUser)

router.get('/get-user/:id', AuthMiddleware, getUser)

router.post('/forgot-user-password', forgotUserPassword)

router.put('/password-reset/:id/:token', AuthMiddleware, updateUserPassword)

module.exports = router