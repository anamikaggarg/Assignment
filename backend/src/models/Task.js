const mongoose = require("mongoose")

module.exports = mongoose.model("Task", new mongoose.Schema({
  title: String,
  user: mongoose.Schema.Types.ObjectId
}))
