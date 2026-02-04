const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))

app.use("/api/auth", require("./routes/auth"))
app.use("/api/tasks", require("./routes/task"))

module.exports = app
