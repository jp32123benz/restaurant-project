const express = require('express')
const AuthMiddleware = require("../middleware/AuthMiddleware");
const { createCategory, getCategory } = require('../Controller/categoryController');

const router = express.Router();


router.post("/create-category", AuthMiddleware, createCategory);

router.get("/get-category", AuthMiddleware, getCategory);

// router.get("/get-category", AuthMiddleware, getCategory);

module.exports = router