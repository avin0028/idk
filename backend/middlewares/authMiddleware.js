import jwt from "jsonwebtoken"
import users from "../models/usersSchema.js"

const authorization = async (req, res, next) => {
  const token = req.cookies.jwttoken

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await users.findById(decoded.userId).select("-password")

      next()
    } catch (error) {
      console.error(error)
      res.status(401).json({ error: "not authorized, token failed" })
    }
  } else {
    res.status(401).json({ error: "not authorized, token not found" })
  }
}
export default authorization
