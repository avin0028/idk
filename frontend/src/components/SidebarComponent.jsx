import {
  FaBookmark,
  FaHeartCirclePlus,
  FaKey,
  FaArrowRightFromBracket,
} from "react-icons/fa6"
import { useLogoutMutation } from "../redux/usersSlice"
import { useNavigate } from "react-router-dom"
import { logout } from "../redux/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Menu, Sidebar } from "react-pro-sidebar"

// NOTE : this code is not optimized for best performance. actually it's worse because of the duplicate code

const SidebarComponent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logouthandler = async () => {
    await logoutApiCall().unwrap()
    dispatch(logout())
    navigate("/signin")
  }
  return (
    <>
      <div className="hidden sm:block float-right sm:static p-2 h-[95vh] fixed right-0 bg-[#303439] text-white w-1/6   ">
        <div className="flex items-center mt-8 cursor-pointer	hover:opacity-75">
          <FaBookmark className="w-6 h-6 text-[color:#6B7283] " />
          <Link to="/dashboard" className=" sm:text-lg text-xl mr-2">
            مشاهده آیتم ها
          </Link>
        </div>
        <div className="flex items-center mt-8 cursor-pointer hover:opacity-75	 ">
          <FaHeartCirclePlus className="w-6 h-6  text-[color:#6B7283]" />
          <Link to="additem" className="sm:text-lg text-xl mr-2">
            اضافه کردن آیتم
          </Link>
        </div>
        <div className="flex items-center mt-8 cursor-pointer hover:opacity-75	">
          <FaKey className="w-6 h-6  text-[color:#6B7283]" />
          <Link to="changepass" className="sm:text-lg text-xl mr-2">
            تغییر رمز عبور
          </Link>
        </div>
        <div
          className="flex items-center mt-8 cursor-pointer hover:opacity-75"
          onClick={logouthandler}
        >
          <FaArrowRightFromBracket className="w-6 h-6  text-[color:#6B7283]" />
          <span className="sm:text-lg text-xl mr-2">خروج از حساب</span>
        </div>
      </div>
      <div className=" sm:hidden flex flex-row justify-between fixed bottom-0 w-full text-white  bg-[#303439] h-14 p-2">
        <div className="flex flex-col items-center ">
          <FaBookmark className="w-6 h-6 text-[color:#6B7283] " />
          <Link to="" className="  text-sm ">
            مشاهده آیتم ها
          </Link>
        </div>
        <div className="flex flex-col items-center ">
          <FaHeartCirclePlus className="w-6 h-6  text-[color:#6B7283]" />
          <Link to="additem" className="text-sm ">
            اضافه کردن آیتم
          </Link>
        </div>
        <div className="flex flex-col items-center ">
          <FaKey className="w-6 h-6  text-[color:#6B7283]" />
          <Link to="changepass" className="text-sm ">
            تغییر رمز عبور
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <FaArrowRightFromBracket className="w-6 h-6  text-[color:#6B7283]" />
          <span className=" text-sm">خروج از حساب</span>
        </div>
      </div>
    </>
  )
}

export default SidebarComponent
