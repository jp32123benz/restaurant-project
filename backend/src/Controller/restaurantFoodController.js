const RestaurantFood = require("../models/restaurantFoodModel");
const cloudinary = require('cloudinary').v2

module.exports = {
  createRestaurantFood: async (req, res) => {
    const { foodImages, restaurantId, foodName, foodCategory, price, foodLabel } = req.body
    const uploadedImages = [];
    try {
      const isExist = await RestaurantFood.findOne({ restaurantId, foodName })
      if (isExist) {
        return res.status(400).json({ statusCode: 400, msg: "Restaurant Food Already Exist" })
      }
      const data = new RestaurantFood({ restaurantId, foodName, foodCategory, price, foodLabel });
      await data.save();
      for (const imageUrl of foodImages) {
        try {
          const result = await cloudinary.uploader.upload(imageUrl, { folder: 'foodImages' });
          uploadedImages.push({ url: result.secure_url, public_id: result.public_id });
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
      data.foodImages = uploadedImages
      await data.save();
      return res.status(200).json({ statusCode: 200, msg: "Restaurant Food created Succesfully" });
    } catch (err) {
      return res.status(400).json({
        statusCode: 400,
        err,
        msg: "Restaurant Food can't be created",
      });
    }
  },
  deleteRestaurantFood: async (req, res) => {
    const { id } = req.params;
    try {
      const findData = await RestaurantFood.findOne({ _id: id });
      if (findData && findData != []) {
        let publicKeys = findData.foodImages.map((val) => val.public_id)
        const result = await Promise.all(publicKeys.map((publicId) => cloudinary.uploader.destroy(publicId, { type: 'upload', resource_type: 'image' })));
        if (result) {
          const deleteData = await RestaurantFood.deleteOne({ _id: id });
          return res.status(201).json({
            statusCode: 201,
            msg: "Restaurant Food deleted Succesfully",
            deleteData,
          });
        } else return res.status(400).json({ statusCode: 400, msg: "Restaurant Food can't be deleted", });
      } else return res.status(400).json({ statusCode: 400, msg: "Restaurant Food can't be deleted", });
    } catch (err) {
      return res.status(400).json({ statusCode: 400, err, msg: "Restaurant Food can't be deleted", });
    }
  },

  deleteRestaurantFoodImage: async (req, res) => {
    const { image, id } = req.body

    try {
      const isId = await RestaurantFood.findOne({ _id: id })
      if (isId) {
        const newData = isId.foodImages.filter((val) => val != image)
        const isDeleted = await RestaurantFood.updateOne({ _id: isId._id }, { $set: { foodImages: newData } })

        if (isDeleted.modifiedCount !== 0) {
          fs.unlink(`src/restaurantFoodImages/${image}`, (err) => {
            if (err) {
              res.status(400).json({ statusCode: 200, msg: "Failed to Delete Image" })
            }
          })
          res.status(200).json({ statusCode: 200, msg: "Image Deleted Successfully" })
        } else {
          res.status(400).json({ statusCode: 200, msg: "Failed to Delete Image" })
        }
      } else {
        res.status(400).json({ statusCode: 200, msg: "Failed to Delete Image" })
      }
    } catch (err) {
      res.status(400).json({ statusCode: 200, msg: "Failed to Delete Image" })
    }
  },

  findRestaurantFood: async (req, res) => {
    const pipeline = [
      {
        $lookup: {
          from: "users",
          localField: "restaurantId",
          foreignField: "_id",
          as: "RestaurantName",
        },
      },
      {
        $unwind: "$RestaurantName", // Unwind the RestaurantName array (if there are multiple matches)
      },
      {
        $project: {
          restaurantId: 0,
        }
      }
    ]
    try {
      const aggregationResult = await RestaurantFood.aggregate(pipeline)
      if (aggregationResult != [] && aggregationResult)
        res.status(201).json({ statusCode: 201, aggregationResult });
      else
        res.status(400).json({ statusCode: 400, err, msg: "Data doesn't exist" });
    } catch (err) {
      res.status(400).json({ statusCode: 400, err, msg: "Data doesn't exist" });
    }
  },
  findSingleRestaurantFood: async (req, res) => {
    const { id } = req.params;
    try {
      const findSingleData = await RestaurantFood.findOne({ _id: id });
      if (findSingleData != [] && findSingleData)
        res.status(201).json({ statusCode: 201, findSingleData });
      else
        throw new Error
    } catch (err) {
      res.status(400).json({ statusCode: 400, err, msg: "Data doesn't exist" });
    }
  },

  updateRestaurantFood: async (req, res) => {
    const newData = req.body;
    try {
      const updateData = await RestaurantFood.findByIdAndUpdate(
        { _id: req.body.id },
        newData,
        { new: true }
      );
      if (updateData.modifiedCount !== 0)
        res.status(201).json({
          statusCode: 201,
          msg: "Restaurant Food updated Succesfully",
          updateData,
        });
      else throw new Error();
    } catch (err) {
      res.status(400).json({
        statusCode: 400,
        err,
        msg: "Restaurant Food can't be updated",
      });
    }
  },

  updateRestaurantFoodImage: async (req, res) => {
    try {
      const findData = await RestaurantFood.findOne({ _id: req.body.id });
      const newData = [...findData.foodImages, ...req.files.map((val) => val.filename)]
      // if (newData.length >= 5) {
      //   fs.unlink(...req.files.map((val) => val.path), (err) => {
      //     if (err) {
      //       throw err;
      //     }
      //     console.log('Deleted Successfully');
      //   })
      //   throw new Error()
      // }
      const updateData = await RestaurantFood.updateOne({ foodImages: newData })
      if (updateData.modifiedCount !== 0)
        res.status(201).json({
          statusCode: 201,
          msg: "Restaurant Food's image uploaded Succesfully",
          updateData,
        });
      else throw new Error();
    } catch (err) {
      res.status(400).json({
        statusCode: 400,
        err,
        msg: "Restaurant food image can't be uploaded may be you've uploaded more than 4 images",
      });
    }
  },

};
