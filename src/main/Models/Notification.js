const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: String
  },
  read: {
    type: Boolean,
    default: false
  }
});

// { type: Schema.Types.ObjectId, ref: "Event" }
/**
 * @create get notifications
 * @select .select to get the user from the notification
 */

module.exports = mongoose.model("Notification", NotificationSchema);
