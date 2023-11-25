import { useSelector } from "react-redux"
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
    <header className="bg-[#2F729D] text-white	justify-between h-[5vh]	p-4 flex">
      <div> {userInfo.name} عزیز خوش آمدید</div>

      <div className="">امروز {date.toLocaleDateString("fa-IR", dateoptions)}</div>
    </header>
  )
}

export default Header
