const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionsSchema = new Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model("Actions", actionsSchema);
