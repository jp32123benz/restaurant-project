require("dotenv").config({ path: "config/congif.env" });
require("../config/database");
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter");
const cookieParser = require("cookie-parser");
const restaurantRouter = require("./router/restaurantRouter");
const restaurantFoodRouter = require("./router/restaurantFoodRouter");
// const categoryRouter = require("./router/categoryRouter");
const cloudinary = require('cloudinary').v2
const cors = require('cors')
const morgan = require('morgan')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET,
  secure: true
})
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '100mb' }));
app.use(morgan('dev'))
app.use("/api/v1/user", userRouter);
app.use("/api/v1/restaurant", restaurantRouter);
// app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/restaurants-food", restaurantFoodRouter);

// All Routes
// const app = require('./router')

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});