import {
  FaBookmark,
  FaHeartCirclePlus,
  FaKey,
  FaArrowRightFromBracket,
} from "react-icons/fa6"
import { useLogoutMutation } from "../redux/usersSlice"
import { useNavigate } from "react-router-dom"
import { logout } from "../redux/authSlice"
import { useDispatch } from "react-redux"

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logouthandler = async () => {
    await logoutApiCall().unwrap()
    dispatch(logout())
    navigate("/signin")
  }
  return (
    <div className="p-2 h-full bg-[#303439] text-white w-48 ">
      <div className="flex items-center mt-8 cursor-pointer	hover:opacity-75">
        <FaBookmark className="w-6 h-6 text-[color:#6B7283] " />
        <span className=" text-xl mr-2">مشاهده آیتم ها</span>
      </div>
      <div className="flex items-center mt-8 cursor-pointer hover:opacity-75	 ">
        <FaHeartCirclePlus className="w-6 h-6  text-[color:#6B7283]" />
        <span className="text-xl mr-2">اضافه کردن آیتم</span>
      </div>
      <div className="flex items-center mt-8 cursor-pointer hover:opacity-75	">
        <FaKey className="w-6 h-6  text-[color:#6B7283]" />
        <span className="text-xl mr-2">تغییر رمز عبور</span>
      </div>
      <div
        className="flex items-center mt-8 cursor-pointer hover:opacity-75"
        onClick={logouthandler}
      >
        <FaArrowRightFromBracket className="w-6 h-6  text-[color:#6B7283]" />
        <span className="text-xl mr-2">خروج از حساب</span>
      </div>
    </div>
  )
}

export default Sidebar
