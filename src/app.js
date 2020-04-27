const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
require("./db");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
  }
  routes() {
    this.server.use(routes);
  }
}

const app = new App().server;

module.exports = app;
