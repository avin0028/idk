import express, { Router } from "express"
const router = express.Router()
import {
  getItems,
  addItem,
  deleteItem,
  addSavings,
} from "../controllers/wishlistController.js"
import auth from "../middlewares/authMiddleware.js"

router.get("/getitems", auth, getItems)
router.post("/additem", auth, addItem)
router.delete("/deleteitem", auth, deleteItem)
router.put("/addsavings", auth, addSavings)
export default router
