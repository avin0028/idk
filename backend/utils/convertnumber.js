export const convertFAnumberToEN = (number) => {
  number = number.split("")
  let enNumber = ""
  for (let i = 0; i < number.length; i++) {
    switch (number[i]) {
      case "۰":
        enNumber += "0"

        break
      case "۱":
        enNumber += "1"

        break
      case "۲":
        enNumber += "2"

        break
      case "۳":
        enNumber += "3"

        break
      case "۴":
        enNumber += "4"

        break
      case "۵":
        enNumber += "5"

        break
      case "۶":
        enNumber += "6"

        break
      case "۷":
        enNumber += "7"

        break
      case "۸":
        enNumber += "8"

        break
      case "۹":
        enNumber += "9"

        break
      case ",":
      // enNumber += "."
      default:
    }
  }
  const finalNumber = parseInt(enNumber, 10)

  return finalNumber
}
