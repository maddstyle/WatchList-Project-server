const express = require("express");
const routes = express.Router();
const SessionController = require("./main/controllers/sessionController");
const UserController = require("./main/controllers/userController");
const WatchController = require("./main/controllers/watchController")

routes.get("/session", SessionController.session);
routes.post("/createUser", UserController.store);
routes.post("/createWatch", WatchController.store);

module.exports = routes;
