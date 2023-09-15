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
    const { id, public_id } = req.params
    const key = 'foodImages/' + public_id
    try {
      const isId = await RestaurantFood.findOne({ _id: id })
      if (isId) {
        const filteredImgDataisId = isId.foodImages.filter((val) => val.public_id !== key)
        await isId.updateOne({ foodImages: filteredImgDataisId })
        await cloudinary.uploader.destroy(key, { type: 'upload', resource_type: 'image' })
        return res.status(200).json({ statusCode: 200, msg: "Image Deleted Successfully" })
      } else {
        return res.status(400).json({ statusCode: 200, msg: "Failed to Delete Image" })
      }
    }
    catch (err) {
      res.status(400).json({ statusCode: 200, msg: "Failed to Delete Image", err })
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
        res.status(200).json({ statusCode: 200, msg: "Data Fetched Successfully", findSingleData });
      else
        res.status(400).json({ statusCode: 400, msg: "Data doesn't exist" });
    } catch (err) {
      res.status(400).json({ statusCode: 400, err, msg: "Data doesn't exist" });
    }
  },

  updateRestaurantFood: async (req, res) => {
    const newData = req.body;
    if (newData.foodImages.length < 4) {
      const allImageData = newData.foodImages.slice(0, -1)
      try {
        const result = await cloudinary.uploader.upload(newData.foodImages.pop().imageData, { folder: 'foodImages' });
        let uploadedImages = { url: result.secure_url, public_id: result.public_id };
        allImageData.push(uploadedImages)
        const updateData = await RestaurantFood.findByIdAndUpdate(
          { _id: req.body.foodId },
          { ...newData, foodImages: allImageData },
          { new: true }
        );
        if (updateData.modifiedCount !== 0)
          res.status(200).json({
            statusCode: 200,
            msg: "Restaurant Food updated Succesfully",
            updateData,
          });
        else res.status(400).json({ statusCode: 400, msg: "Restaurant Food can't be updated", });
      } catch (err) {
        res.status(400).json({
          statusCode: 400,
          err,
          msg: "Restaurant Food can't be updated",
        });
      }
    } else {
      return res.status(400).json({ statusCode: 400, msg: "You can't add more than 4 images", });
    }
  },

  // updateRestaurantFoodImage: async (req, res) => {
  //   try {
  //     const findData = await RestaurantFood.findOne({ _id: req.body.id });
  //     const newData = [...findData.foodImages, ...req.files.map((val) => val.filename)]
  //     const updateData = await RestaurantFood.updateOne({ foodImages: newData })
  //     if (updateData.modifiedCount !== 0)
  //       res.status(201).json({
  //         statusCode: 201,
  //         msg: "Restaurant Food's image uploaded Succesfully",
  //         updateData,
  //       });
  //     else throw new Error();
  //   } catch (err) {
  //     res.status(400).json({
  //       statusCode: 400,
  //       err,
  //       msg: "Restaurant food image can't be uploaded may be you've uploaded more than 4 images",
  //     });
  //   }
  // },

};
