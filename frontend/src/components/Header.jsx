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

  return (
    <header className="bg-[#2F729D] text-white	justify-between	p-4 flex">
      <div>خوش آمدید {userInfo.name} جان</div>
      <div className="">امروز {date.toLocaleDateString("fa-IR", dateoptions)}</div>
    </header>
  )
}

export default Header
