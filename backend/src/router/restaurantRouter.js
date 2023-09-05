const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const {
  restaurantRegistrationValidation, restaurantLogin,
} = require("../middleware/restaurantValidationMiddleware");
const router = express.Router();
const multer = require("multer");
const {
  createRestaurant,
  deleteRestaurant,
  findSingleRestaurant,
  findRestaurant,
  loginRestaurant,
  updateRestaurantDetails,
  updateRestaurantProfile,
} = require("../Controller/restaurantController");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "src/restaurantProfileImgUpload");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post(
  "/create-restaurant",
  upload.single("profile"),
  restaurantRegistrationValidation,
  createRestaurant
);

// ------------------------To Be Tested -----------------------------//

router.post('/login-restaurant', restaurantLogin, loginRestaurant)

router.delete("/delete-restaurant", AuthMiddleware, deleteRestaurant);

router.put("/update-restaurant-details/:id", AuthMiddleware, updateRestaurantDetails);

router.put("/update-restaurant-profile/:id", AuthMiddleware, upload.single("profile"), updateRestaurantProfile);

router.get("/find-restaurant", AuthMiddleware, findRestaurant);

router.get("/find-restaurant-single/:id", AuthMiddleware, findSingleRestaurant);

module.exports = router;
