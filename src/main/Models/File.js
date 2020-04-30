const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
  path: {
    type: String
  },
});

module.exports = mongoose.model("File", FileSchema);
