const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require('validator')

const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: [true, "Restaurant name is required"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Restaurant email is required"],
    validate(value) {
      if (validator.isEmail(value))
        true
      else
        throw new Error('email not valid')
    },
    lowercase: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Restaurant password is required"]
  },
  address: {
    type: String,
    unique: true,
    required: [true, "Address of the Restaurant is required"],
    trim: true,
    lowercase: true,
  },
  contactNo: {
    type: String,
    unique: true,
    required: [true, "Contact No. of the Restaurant is required"],
  },
  cuisineType: {
    type: String,
    required: [true, "Cuisine Type of the Restaurant is required"],
    trim: true,
    lowercase: true,
  },
  openingTime: {
    type: String,
    required: [true, "Opening Time of the Restaurant is required"],
  },
  closingTime: {
    type: String,
    required: [true, "Closing Time of the Restaurant is required"],
  },
  profile: {
    type: String,
    required: true,
  },
  token: String
});

restaurantSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign(
    { _id: this._id },
    process.env.SECRET_KEY
  );
  this.token = token;
  await this.save();
  return token;
};

module.exports = mongoose.model("Restaurant", restaurantSchema);
