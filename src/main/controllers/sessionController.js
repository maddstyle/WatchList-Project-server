const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/User");

class SessionController {
  async session(req, res) {

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) return res.json("user not found");
    const hashedPassword = await bcrypt.hash(password, 8);
    const compare = await bcrypt.compare(hashedPassword, user.password);
    
    if (!compare) return res.status(401).json("wrong password");
    const { id } = user;

    return res.json({
      user,
      // bobcat is the secret  required by jwt
      token: jwt.sign({ id }, "bobcat", {
        expiresIn: "1d"
      })
    });
  }
}

module.exports = new SessionController();
