import express from "express"
const router = express.Router()
import { loginUser, logoutUser, registerUser } from "../controllers/usersController.js"

router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.post("/register", registerUser)

export default router
