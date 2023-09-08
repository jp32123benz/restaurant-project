const Category = require('../models/categoryModel')
const User = require('../userModel')

module.exports = {
    createCategory: async (req, res) => {
        try {
            const isExist = await User.findOne({ name: req.body.name })
            if (isExist) {
                return res.status(400).json({ statusCode: 400, msg: "Category already Exists" })
            } else {
                const data = new Category(req.body)
                await data.save()
                return res.status(200).json({ statusCode: 200, msg: "Name Registered Succesfully" })
            }
        } catch (err) {
            return res.status(400).json({ statusCode: 400, err, msg: "Please enter correct details" })
        }
    },
    getCategory: async (req, res) => {
        try {
            const findData = await Category.find();
            if (findData != [] && findData) {
                res.status(201).json({ statusCode: 201, findData });
            }
            else
                res.status(400).json({ statusCode: 400, msg: "Data doesn't exist" });
        } catch (err) {
            res.status(400).json({ statusCode: 400, err, msg: "Data doesn't exist" });
        }
    },
}