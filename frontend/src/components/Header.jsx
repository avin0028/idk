import { useSelector } from "react-redux"
import { FaBars } from "react-icons/fa6"
const Header = () => {
  const date = new Date()
  const dateoptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    // year: "numeric",
  }

  const { userInfo } = useSelector((state) => state.auth)
  const menuIconClick = () => {}

  return (
    <header className="bg-[#2F729D] text-white	justify-between	p-4 flex">
      {/* <FaBars
        className="text-3xl cursor-pointer hover:opacity-25"
        onClick={menuIconClick}
      /> */}

      <div className="">امروز {date.toLocaleDateString("fa-IR", dateoptions)}</div>
    </header>
  )
}

export default Header
