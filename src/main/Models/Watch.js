const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  description: {
    type: String
  },
  pictureUrl: {
    type: String
  }
});

module.exports = mongoose.model("Watch", watchSchema);
