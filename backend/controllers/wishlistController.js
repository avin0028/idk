import wishlist from "../models/wishlistModel.js"

const getItems = async (req, res) => {
  const items = await wishlist.find({ user: req.user._id })
  res.json(items)
}

const addItem = async (req, res) => {
  const { name, price, savings, image } = req.body
  const item = wishlist.create({ user: req.user._id, name, price, savings, image })
  res.json(item)
}

export { getItems, addItem }
