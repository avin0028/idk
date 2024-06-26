import users from "../models/usersSchema.js"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await users.findOne({ email })
  if (userExists) {
    return res.status(400).json({ error: "User already exists" })
  }

  const user = await users.create({
    name,
    email,
    password,
  })

  if (user) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "21d",
    })

    res.cookie("jwttoken", token, {
      maxAge: 21 * 24 * 60 * 60 * 1000, //21 days
      httpOnly: true,
      // sameSite: "strict",
      // secure: process.env.NODE_ENV !== "development",
    })

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await users.findOne({ email })

  if (user && (await user.checkPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "21d",
    })

    res
      .cookie("jwt", token, {
        maxAge: 21 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
      })
      .json({
        id: user._id,
        name: user.name,
        email: user.email,
      })
  } else {
    res.status(401).json({ error: "ایمیل یا رمزعبور اشتباه است" })
  }
}
const logoutUser = async (req, res) => {
  res.clearCookie("jwt")
  res.status(200).json({ message: "Successfully logged out" })
}
const changepass = async (req, res) => {
  const { email, pastpass, newpass } = req.body
  const user = await users.findOne({ email })

  if (user && user.checkPassword(pastpass)) {
    users.findOneAndUpdate({ password: pastpass }, newpass)
    res.json({ message: "رمز عبور تغییر یافت" }).status(200)
  } else {
    res.status(400).json({ message: "رمز عبور اشتباه وارد شد" })
  }
}
const changename = async (req, res) => {
  const { email, newname } = req.body

  try {
    const result = await users.findOneAndUpdate({ email, name: newname })
    res.status(200).json({ message: "نام حساب تغییر یافت", statuscode: 200 })
  } catch (err) {
    res.json({ message: err.data?.message, statuscode: 400 }).status(400)
  }
}
export { loginUser, logoutUser, registerUser, changepass, changename }
