const Yup = require("yup");
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validateUser = {
  registerValidation: async (req, res, next) => {
    const YupSchema = Yup.object().shape({
      username: Yup.string().min(5).max(50).required(),
      email: Yup.string().min(5).max(255).required().email(),
      phoneNumber: Yup.string().matches(
        phoneRegExp,
        "Phone number is not valid"
      ).required(),
      password: Yup.string().min(6).required(),
      profile: Yup.string().required(),
    });
    try {
      const { email, phoneNumber, password } =
        await YupSchema.validate(req.body);
      if (email && phoneNumber && password) {
        next();
      }
    } catch {
      res
        .status(400)
        .json({ msg: "Incorrect Details or Details already exists" });
    }
  },
  loginValidation: async (req, res, next) => {
    const data = { ...req.body };
    const YupSchema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(5).max(255).required(),
    });
    const { email, password } = await YupSchema.validate(data);
    if (email && password) {
      next();
    } else {
      res.status(400).json({ msg: "Please enter Details Correctly" });
    }
  },
  categoryValidation: async (req, res, next) => {
    const data = req.body;
    const YupSchema = Yup.object().shape({
      categoryType: Yup.string().min(3).max(6).required(),
      categoryName: Yup.string().min(2).max(20).required(),
    });
    try {
      const { categoryType, categoryName } = await YupSchema.validate(data);
      if (categoryType && categoryName) {
        next();
      }
    } catch (err) {
      res.status(400).json({ msg: "Please enter Details Correctly", err });
    }
  },
};

module.exports = validateUser;
