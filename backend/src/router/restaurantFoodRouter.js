const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
// const RestaurantFood = require('../models/restaurantFoodModel')
const upload = require('../Controller/utilityController/multerFood')
// const fs = require('fs')
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

const router = express.Router();

router.post(
  "/create-restaurant-food", restaurantFoodValidation, AuthMiddleware, upload.array('foodImages', 4),
  createRestaurantFood
);

router.put("/update-restaurant-food-image", AuthMiddleware, updateRestaurantFoodImage);

router.put("/update-restaurant-food", AuthMiddleware, updateRestaurantFood);

router.get("/find-restaurant-food", AuthMiddleware, findRestaurantFood);

router.get("/find-restaurant-food/:id", AuthMiddleware, findSingleRestaurantFood);

router.delete("/delete-restaurant-food/:id", AuthMiddleware, deleteRestaurantFood);

router.delete("/delete-restaurant-food-image/:id/:public_id", AuthMiddleware, deleteRestaurantFoodImage);

module.exports = router;