const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  const hash = await bcrypt.hash(password, 10)
  await User.create({ name, email, password: hash })
  res.json({ message: "Registered" })
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: "Invalid" })

  const ok = await bcrypt.compare(password, user.password)
  if (!ok) return res.status(400).json({ message: "Invalid" })

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  )

  res.json({ token })
})

module.exports = router
