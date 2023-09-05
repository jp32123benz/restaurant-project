const Restaurant = require("../models/not needed/restaurantModel");
const bcrypt = require('bcryptjs')
const fs = require('fs')

module.exports = {
  createRestaurant: async (req, res) => {
    const data = new Restaurant({ ...req.body, profile: req.file.path });
    try {
      data.password = await bcrypt.hash(data.password, 10)
      await data.save();
      res
        .status(201)
        .json({ statusCode: 201, msg: "Restaurant created Succesfully" });
    } catch (err) {
      res
        .status(400)
        .json({ statusCode: 400, err, msg: "Restaurant can't be created" });
    }
  },


  loginRestaurant: async (req, res) => {
    const { email, password } = req.body
    try {
      const isEmail = await Restaurant.findOne({ email })
      if (isEmail) {
        const isMatch = await bcrypt.compare(password, isEmail.password)
        if (isMatch) {
          const token = await isEmail.generateAuthToken()
          res.cookie('token', token)
          res.status(200).json({ statusCode: 200, msg: "Restaurant Login Successfully", token })
        } else {
          throw new Error
        }
      } else {
        throw new Error
      }
    } catch (err) {
      res.status(400).json({ statusCode: 400, msg: "Restaurant Login Failed" })
    }
  },

  updateRestaurantDetails: async (req, res) => {
    const { id } = req.params
    const newData = req.body;
    try {
      const updateData = await Restaurant.findByIdAndUpdate(
        { _id: id },
        newData,
        { new: true }
      );
      if (updateData.modifiedCount !== 0)
        res.status(201).json({
          statusCode: 201,
          msg: "Restaurant updated Succesfully",
          updateData,
        });
      else throw new Error();
    } catch (err) {
      res
        .status(400)
        .json({ statusCode: 400, err, msg: "Restaurant can't be updated" });
    }
  },


  updateRestaurantProfile: async (req, res) => {
    const { id } = req.params
    const newData = req.file.path;
    try {
      const findData = await Restaurant.findOne({ _id: id });
      if (findData) {
        const updateData = await Restaurant.updateOne({ profile: newData })
        if (updateData.modifiedCount !== 0) {
          // console.log(findData.profile);
          fs.unlink(findData.profile, function (err) {
            if (err) return console.log(err);
            console.log('file deleted successfully');
          });
          res.status(201).json({
            statusCode: 201,
            msg: "Restaurant updated Succesfully",
            updateData,
          });
        }
        else throw new Error();
      }
      else throw new Error();
    } catch (err) {
      res
        .status(400)
        .json({ statusCode: 400, err, msg: "Restaurant can't be updated" });
    }
  },

  deleteRestaurant: async (req, res) => {
    const { id } = req.body;
    try {
      const findData = await Restaurant.findOne({ _id: id });
      if (findData) {
        fs.unlink(findData.profile, function (err) {
          if (err) return console.log(err);
          console.log('file deleted successfully');
        });
        const deleteData = await Restaurant.deleteOne({ _id: id });
        res.status(201).json({
          statusCode: 201,
          msg: "Restaurant deleted Succesfully",
          deleteData,
        });
      } else throw new Error
    } catch (err) {
      res
        .status(400)
        .json({ statusCode: 400, err, msg: "Restaurant can't be created" });
    }
  },

  findRestaurant: async (req, res) => {
    try {
      const findData = await Restaurant.find();
      res.status(201).json({ statusCode: 201, findData });
    } catch (err) {
      res.status(400).json({ statusCode: 400, err, msg: "Data doen't exist" });
    }
  },
  findSingleRestaurant: async (req, res) => {
    const { id } = req.params;
    try {
      const findSingleData = await Restaurant.findOne({ _id: id });
      res.status(201).json({ statusCode: 201, findSingleData });
    } catch (err) {
      res.status(400).json({ statusCode: 400, err, msg: "Data doen't exist" });
    }
  },
};
