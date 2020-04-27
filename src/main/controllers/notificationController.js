const Notification = require("../Models/Notification");

class NotificationController {
  async store(req, res) {
    try {
      const { content, user, read } = req.body;
      const notification = await Notification.create({
        content,
        user,
        read
      });
      return res.json(notification);
    } catch (err) {
      return res.json(err);
    }
  }
}

module.exports = new NotificationController();
