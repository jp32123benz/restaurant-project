const yup = require('yup');

module.exports = {
  restaurantRegistrationValidation: async (req, res, next) => {
    const yupSchema = yup.object().shape({
      restaurantName: yup.string().min(5).max(50).required(),
      address: yup.string().required(),
      email: yup.string().min(5).max(255).required().email(),
      password: yup.string().min(5).max(255).required(),
      contactNo: yup.string().max(11).required(),
      cuisineType: yup.string().required(),
      openingTime: yup.string().required(),
      closingTime: yup.string().required(),
      profile: yup.string()
    });
    const { restaurantName, address, contactNo, cuisineType, openingTime, closingTime } = await yupSchema.validate(
      req.body
    );
    if (restaurantName && address && contactNo && cuisineType && openingTime && closingTime) {
      next();
    } else {
      res.status(200).json({ msg: 'Incorrect Details or Details already exists' });
    }
  },
  restaurantLogin: async (req, res, next) => {
    const yupSchema = yup.object().shape({
      email: yup.string().min(5).max(255).required().email(),
      password: yup.string().min(5).max(255).required(),
    });
    const { email, password } = await yupSchema.validate(
      req.body
    );
    if (email && password) {
      next();
    } else {
      res.status(200).json({ msg: 'Incorrect Details or Details already exists' });
    }
  },
  restaurantFoodValidation: async (req, res, next) => {
    const yupSchema = yup.object().shape({
      foodName: yup.string().required(),
      restaurantId: yup.string().required()
    });
    const { foodName, restaurantId } = await yupSchema.validate(req.body);
    if (foodName && restaurantId) {
      next();
    } else {
      res.status(400).json({ msg: 'Incorrect Details' });
    }
  }
};
