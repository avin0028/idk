import { getDollarprice } from "./dollarRate.js"
const wishlistItem = {
  name: "Playstaion 5",
  price: 500,
  allocatedwage: 2000000,
}
const getTomanPrice = async (price) => {
  const dollarRate = await getDollarprice()

  return dollarRate.rate5 * price
}
const price = await getTomanPrice(wishlistItem.price)
const remainedMonths = Math.ceil(price / wishlistItem.allocatedwage)
console.log(remainedMonths)
