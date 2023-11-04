import express from "express"
const router = express.Router()
import { getItems, addItem } from "../controllers/wishlistController.js"
import auth from "../middlewares/authMiddleware.js"

router.get("/getitems", auth, getItems)
router.post("/additem", auth, addItem)

export default router
