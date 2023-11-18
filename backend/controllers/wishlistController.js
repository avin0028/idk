import wishlist from "../models/wishlistModel.js"

const getItems = async (req, res) => {
  const items = await wishlist.find({ user: req.user._id })
  res.json(items)
}

const addItem = async (req, res) => {
  const { name, price, savings } = req.body
  const item = wishlist.create({ user: req.user._id, name, price, savings })
  res.json(item)
}

export { getItems, addItem }
