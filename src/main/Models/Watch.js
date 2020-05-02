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
  price: {
    type: Number
  },
  material: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  image: String
});

module.exports = mongoose.model("Watch", watchSchema);
