import mongoose from "mongoose"

const wishlistSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    savings: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestapms: true }
)

const wishlist = mongoose.model("Wishlist", wishlistSchema)
export default wishlist
