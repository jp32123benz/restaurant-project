const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const RestaurantFood = require('../models/restaurantFoodModel')
const multer = require("multer");
const fs = require('fs')
const {
  createRestaurantFood,
  findRestaurantFood,
  deleteRestaurantFood,
  findSingleRestaurantFood,
  updateRestaurantFood,
  updateRestaurantFoodImage,
  deleteRestaurantFoodImage
} = require("../Controller/restaurantFoodController");
const { restaurantFoodValidation } = require("../middleware/restaurantValidationMiddleware");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "src/restaurantFoodImages");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({
  storage,
  // fileFilter: (req, file, cb) => {
  //   if (file.mimetype == 'image/jpg' ||
  //     file.mimetype == 'image/jpeg' ||
  //     file.mimetype == 'image/png'
  //   ) {
  //     cb(null, true)
  //   } else {
  //     cb(null, false)
  //     return cb(Error('Only .png, .jpg and .jpeg format allowed!'))
  //   }
  // }
})
const router = express.Router();

router.post(
  "/create-restaurant-food",
  restaurantFoodValidation,
  AuthMiddleware,
  createRestaurantFood
);

router.put("/update-restaurant-food-image", AuthMiddleware, upload.array('foodImages'), updateRestaurantFoodImage);

router.put("/update-restaurant-food", AuthMiddleware, updateRestaurantFood);

router.get("/find-restaurant-food", AuthMiddleware, findRestaurantFood);

router.get("/find-restaurant-food/:id", AuthMiddleware, findSingleRestaurantFood);

router.delete("/delete-restaurant-food", AuthMiddleware, deleteRestaurantFood);

router.delete("/delete-restaurant-food-image", AuthMiddleware, deleteRestaurantFoodImage);



module.exports = router;
