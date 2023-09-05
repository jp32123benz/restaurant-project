const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        paymentMode: {
            type: String,
            required: [true, "Payment mode is compulsary"],
            default: 'cod'
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        foodId:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RestaurantFoodModel",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
