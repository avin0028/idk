import {
  FaBookmark,
  FaHeartCirclePlus,
  FaKey,
  FaArrowRightFromBracket,
  FaUser,
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
      <div className="hidden sm:block float-right sm:static p-2 h-[95vh] fixed right-0 bg-[#303439] text-white w-1/5   ">
        <div className="flex items-center mt-6 cursor-pointer	hover:opacity-75">
          <FaBookmark className="w-10 h-10 text-[color:#6B7283] " />
          <Link to="/dashboard" className="text-lg mr-2">
            مشاهده آیتم ها
          </Link>
        </div>
        <div className="flex items-center mt-8 cursor-pointer hover:opacity-75	 ">
          <FaHeartCirclePlus className="w-10 h-10  text-[color:#6B7283]" />
          <Link to="additem" className="text-lg  mr-2">
            اضافه کردن آیتم
          </Link>
        </div>
        <div className="flex items-center mt-8 cursor-pointer hover:opacity-75	">
          <FaKey className="w-10 h-10  text-[color:#6B7283]" />
          <Link to="changepass" className="text-lg  mr-2">
            تغییر رمز عبور
          </Link>
        </div>
        <div className="flex flex-center items-center  mt-8 cursor-pointer hover:opacity-75 ">
          <FaUser className="w-10 h-10  text-[color:#6B7283]" />
          <Link to="changename" className="text-lg mr-2 ">
            تغییر نام
          </Link>
        </div>
        <div
          className="flex items-center mt-8 cursor-pointer hover:opacity-75"
          onClick={logouthandler}
        >
          <FaArrowRightFromBracket className="w-10 h-10  text-[color:#6B7283]" />
          <span className="text-lg mr-2">خروج از حساب</span>
        </div>
      </div>
      <div className=" z-10	 sm:hidden h-[7vh] flex flex-row justify-between fixed bottom-0 w-full text-white  bg-[#303439] p-2">
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
        <div className="flex flex-col items-center ">
          <FaUser className="w-6 h-6  text-[color:#6B7283]" />
          <Link to="changepass" className="text-sm ">
            تغییر نام
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
