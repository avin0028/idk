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
export { loginUser, logoutUser, registerUser }
