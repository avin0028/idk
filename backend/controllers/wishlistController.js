import wishlist from "../models/wishlistModel.js"
import { getDollarprice } from "../utils/dollarRate.js"
const getItems = async (req, res) => {
  const { pageNumber, pageWidth } = req.query
  let pageSize
  if (pageWidth >= 1034) {
    pageSize = 8
  } else if (pageWidth >= 700) {
    pageSize = 3
  } else {
    pageSize = 2
  }
  const page = Number(pageNumber) || 1
  const count = await wishlist.countDocuments()
  const itemsData = await wishlist
    .find({ user: req.user._id })
    .limit(pageSize)
    .skip(pageSize * page - 1)

  // needs an dollar price api. scraping is slow...
  const items = itemsData.map((item) => {
    let updatedData = {
      savingsD: Math.ceil(item.savings / 50000),
      savings: item.savings,
      image: item.image,
      name: item.name,
      price: item.price,
      priceR: Math.ceil(item.price * 50000),
      _id: item._id,
    }
    return updatedData
  })

  res.json({ items, page, pages: Math.ceil(count / pageSize) })
}

const addItem = async (req, res) => {
  const { name, price, savings, image } = req.body
  const item = await wishlist.create({ user: req.user._id, name, price, savings, image })
  res.json(item)
}
const deleteItem = async (req, res) => {
  const itemId = req.body.item
  const response = await wishlist.deleteOne({ _id: itemId })
  res.json({ message: "آیتم حذف شد" })
}
const addSavings = async (req, res) => {
  const { savings, itemId, newsavings } = req.body
  const newAmmount = savings + parseInt(newsavings)
  const response = await wishlist.findOneAndUpdate(
    { _id: itemId },
    { savings: newAmmount },
    { upsert: true }
  )
  console.log(response)
  res.json({ message: "مبلغ جدید اضافه شد" })
}

export { getItems, addItem, deleteItem, addSavings }
7760099
