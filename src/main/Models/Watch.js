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
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: "File"
  }
});

module.exports = mongoose.model("Watch", watchSchema);
