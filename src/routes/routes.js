const express = require('express')
const routes = express.Router()
const SessionController = require('./main/controllers/sessionController')
const UserController = require('./main/controllers/userController')
const WatchController = require('./main/controllers/watchController')
const SeedController = require('./main/controllers/seedController')
const authMiddleware = require('./main/middlewares/auth')

// crud operations will be done here
// GET, POST, UPDATE, DELETE

routes.get('/seed', SeedController.store)
routes.post('/session', SessionController.session)
routes.post('/createUser', UserController.store)
routes.post('/createWatch', WatchController.store)
routes.get('/findWatch', WatchController.index)
// routes.update('/watch/:id', WatchController.update)
routes.delete('/watch/:id', WatchController.delete)

// ANY ROUTE BELOW HERE WILL REQUIRE AUTHENTICATION
routes.use(authMiddleware)
routes.put('/watch/:id', WatchController.update)


module.exports = routes
