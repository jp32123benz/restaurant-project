const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET,
    secure: true
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: { folder: 'userImages' }
});

const upload = multer({ storage })

module.exports = upload