const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  namne: String,
  imageUrl: String
});

module.exports = mongoose.model("File", FileSchema);
