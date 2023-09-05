const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const fs = require('fs')
const cloudinary = require('cloudinary').v2

module.exports = {
    createUser: async (req, res) => {
        try {
            const isExist = await User.findOne({ email: req.body.email })
            if (isExist) {
                return res.status(400).json({ statusCode: 400, msg: "User Already Exists" })
            } else {
                const upload = await cloudinary.uploader.upload(req.body.profile, { folder: 'userImages' })
                const data = new User({ ...req.body, profile: { public_id: upload.public_id, url: upload.secure_url } })
                data.password = await bcrypt.hash(data.password, 10)
                await data.save()
                return res.status(200).json({ statusCode: 200, msg: "User Registered Succesfully" })
            }
        } catch (err) {
            return res.status(400).json({ statusCode: 400, err, msg: "Please enter correct details" })
        }
    },
    loginUser: async (req, res) => {
        const { email, password } = req.body
        try {
            const isEmail = await User.findOne({ email })
            if (isEmail) {
                const isMatch = await bcrypt.compare(password, isEmail.password)
                if (isMatch) {
                    const token = await isEmail.generateAuthToken()
                    res.status(200).json({ statusCode: 200, msg: "User Login Successfully", token, role: isEmail.role, id: isEmail._id })
                } else {
                    res.status(400).json({ statusCode: 400, msg: "User Login Failed" })
                }
            } else {
                res.status(400).json({ statusCode: 400, msg: "User Login Failed" })
            }
        } catch (err) {
            res.status(400).json({ statusCode: 400, msg: "User Login Failed" })
        }
    },
    updateUser: async (req, res) => {
        const isId = await User.findOne({ _id: req.body._id })
        if (isId) {
            const updatedData = { ...req.body, profile: req.file.path }
            fs.unlink(isId.profile, (err) => {
                if (err) {
                    throw err;
                }
                console.log("Delete File successfully.");
            });
            const Update = await isId.updateOne(updatedData)
            if (Update.modifiedCount != 0) {
                res.status(200).json({ statusCode: 200, msg: "User updated successfully", updatedData })
            } else {
                res.status(400).json({ statusCode: 400, msg: "User Update Failed" })
            }
        } else {
            res.status(400).json({ statusCode: 400, msg: "User Update Failed" })
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.body
        try {
            const deleteData = await User.deleteOne({ _id: id })
            if (deleteData.deletedCount !== 0)
                res.status(201).json({ statusCode: 201, msg: "User Deleted Succesfully", deleteData })
            else
                res.status(400).json({ statusCode: 400, err, msg: "User doen't exist or already deleted" })
        } catch (err) {
            res.status(400).json({ statusCode: 400, err, msg: "User doen't exist or already deleted" })
        }
    },
    getUser: async (req, res) => {
        const { id } = req.body
        try {
            const GetData = await User.findOne({ _id: id })
            if (GetData) {
                res.status(200).json({ statusCode: 200, GetData })
            }
        } catch (err) {
            res.status(400).json({ statusCode: 400, err, msg: "User doesn't exist" })
        }
    }
}