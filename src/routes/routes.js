const express = require("express");
const routes = express.Router();
const multer = require("multer");
const uploadCloud = require("../../config/cloudinary-setup");
const NotificationController = require("../main/controllers/notificationController");
const SessionController = require("../main/controllers/sessionController");
const UserController = require("../main/controllers/userController");
const WatchController = require("../main/controllers/watchController");
const SeedController = require("../main/controllers/seedController");
const authMiddleware = require("../main/middlewares/auth");
const FileController = require("../main/controllers/FileController");

const upload = multer(uploadCloud);
// crud operations will be done here
// GET, POST, UPDATE, DELETE

routes.get("/seed", SeedController.store);
routes.post("/session", SessionController.session);
routes.post("/createUser", UserController.store);
routes.post("/createWatch", WatchController.store);
routes.get("/findWatch", WatchController.index);
routes.put("/watch/:id", WatchController.update);
routes.delete("/watch/:id", WatchController.delete);
routes.post("/createNotification", NotificationController.store);

routes.post("/files", upload.single("path"), FileController.store);

// ANY ROUTE BELOW HERE WILL REQUIRE AUTHENTICATION

/**
 * @config----
 * @create multer configuration
 * @routes ---
 * @import multer configuration in routes.js
 * @require multer if not installed install ^
 * @create const upload const upload = multer(multerConfig)
 * @controller
 * in routes.js
 * routes.post('/files', upload.single('file'), FileController.store)
 */

module.exports = routes;
