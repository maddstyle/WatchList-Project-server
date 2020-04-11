const User = require("../Models/User");

class UserController {
  //this hopefully creates a user
  async store(req, res) {
    try {
      const { username, password, email } = req.body;
      console.log(req.body);
      const user = await User.create({
        username,
        password,
        email
      });

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}

module.exports = new UserController();
