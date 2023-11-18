import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../redux/usersSlice"
import { setUserInfo } from "../redux/authSlice"
import { toast } from "react-toastify"
import Loading from "../components/Loading"

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading, error }] = useLoginMutation()
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard")
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await login({ email, password }).unwrap()
      dispatch(setUserInfo({ ...response }))
      navigate("/dashboard")
    } catch (err) {
      toast.error(err.data.error || "یه مشکلی پیش اومد")
    }
  }
  return (
    <>
      <div className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700 ">
        <div className="text-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4  ">
          <h1 className="text-4xl font-semibold  ">ورود</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
        >
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center">
            <button
              className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
              type="submit"
              disabled={isLoading}
            >
              ورود
            </button>
            <div className="flex flex-col">
              <span>حساب کاربری ندارید؟</span>
              <Link className="text-teal-500" to="/signup">
                ثبت نام
              </Link>
            </div>
          </div>
        </form>
        {isLoading && <Loading />}
      </div>
    </>
  )
}

export default Signin
