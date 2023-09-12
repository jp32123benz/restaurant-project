const mongoose = require("mongoose");

const restaurantFoodSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: [true, "Item name required"],
      lowercase: true,
      trim: true,
    },
    foodImages: [
      {
        url: {
          type: String,
        },
        public_id: {
          type: String,
        }
      },
    ],
    foodLabel: {
      type: String,
      default: 'veg',
      lowercase: true,
      trim: true,
      enum: ['veg', 'non-veg']
    },
    foodCategory: {
      type: String,
      lowercase: true,
      trim: true,
      default: "fast food",
      required: [true, "Food category is compulsary"]
    },
    price: {
      type: Number,
      required: [true, "Food Price is compulsary"],
      trim: true
    },
    restaurantId:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RestaurantFood", restaurantFoodSchema);
