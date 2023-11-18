import express from "express"
import "dotenv/config"
import path from "path"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/usersRoutes.js"
import wishlistRoutes from "./routes/wishlistRoutes.js"
import cors from "cors"
import uploadController from "./controllers/uploadController.js"
const app = express()
const PORT = process.env.PORT || 3000

app.set("trust proxy", 1) // trust first proxy

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))
connectDB()

app.use("/api/users", userRoutes)
app.use("/api/wishlist", wishlistRoutes)
app.use("/api/upload", uploadController)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
