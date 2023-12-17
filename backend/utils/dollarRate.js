import puppeteer from "puppeteer"

const getDollarprice = async (rialPrice) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  const page = await browser.newPage()
  await page.goto("https://www.tgju.org/profile/price_dollar_rl")
  await page.setViewport({ width: 1080, height: 810 })

  let rate1 = await page.waitForSelector("span[data-col='info.last_trade.PDrCotVal'", {
    waitUntil: "domcontentloaded",
  })
  let rate2 = await page.evaluate((el) => el.textContent, rate1)
  let rate3 = rate2.replace(",", "")
  let rate4 = parseInt(rate3)
  let rate5 = Math.floor(rate4 / 10)

  browser.close()
  console.log(rate5)
  return rate5 * rialPrice
}
export { getDollarprice }
