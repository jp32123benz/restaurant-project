const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Name is required'],
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
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
    role: {
        type: String,
        default: "User",
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "User number is required"],
        unique: true,
        maxLength: 10
    },
    address: {
        type: String,
        trim: true,
        lowercase: true,
    },
    profile: {
        public_id: {
            type: String,
            requried: true
        },
        url: {
            type: String,
            required: true
        }
    },
    token: {
        type: String,
        // required: true
    }
})


userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: '30d' })
    this.token = token
    await this.save()
    return token
}

module.exports = mongoose.model('User', userSchema)