const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/User");

class SessionController {
  async session(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email: email });

      if (!user) return res.json("user not found");
      const compare = await bcrypt.compare(password, user.password);

      if (!compare) return res.status(401).json("wrong password");
      const { id } = user;
      console.log(user);

      return res.json({
        user,
        // bobcat is the secret  required by jwt
        token: jwt.sign({ id }, "bobcat", {
          expiresIn: "1d"
        })
      });
    } catch (err) {
      console.error(err.message);
    }
  }
}

module.exports = new SessionController();
