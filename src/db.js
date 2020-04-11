const mongoose = require("mongoose");
const User = require("./main/Models/User");
const Watch = require("./main/Models/Watch")

class Database {
  constructor() {
    this.mongo();
  }
  mongo() {
    this.mongoDB = mongoose.connect("mongodb://localhost:27017/watchstore", {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    });
  }
}

module.exports = new Database();
