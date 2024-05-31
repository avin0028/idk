import express from "express"
const router = express.Router()
import {
  changepass,
  changename,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/usersController.js"

router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/register", registerUser)
router.post("/changepass", changepass)
router.post("/changename", changename)
export default router
