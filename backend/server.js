import express from "express"
import "dotenv/config"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/usersRoutes.js"
import wishlistRoutes from "./routes/wishlistRoutes.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
connectDB()

app.use("/api/users", userRoutes)
app.use("/api/wishlist", wishlistRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
