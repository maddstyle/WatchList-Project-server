const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");



cloudinary.config({
  cloud_name: 'maddstyle',
  api_key: '629556217361481',
  api_secret: 'nYCYVH0Fcg_qHTSi6M5fI8amjHs'
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "watch_inventory", // The name of the folder in cloudinary
  allowedFormats: ["jpg", "png", "jpeg"],
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: (req, file, cb) => {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;