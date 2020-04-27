const User = require("../Models/User");
const bcrypt = require("bcrypt");

class UserController {
  //this hopefully creates a user
  async store(req, res) {
    try {
      const { username, password, email } = req.body;
      const hashedPassword = await bcrypt.hash(password, 8);

      const user = await User.create({
        username,
        email,
        password: hashedPassword
      });

      return res.json(user);
    } catch (err) {
      return res.json(err);
    }
  }
}

module.exports = new UserController();
