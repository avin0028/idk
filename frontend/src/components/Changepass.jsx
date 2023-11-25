import { useState } from "react"
import { toast } from "react-toastify"
import { useChangepassMutation } from "../redux/usersSlice"
import Loading from "./Loading"

const Changepass = () => {
  const [pastpass, setPastpass] = useState("")
  const [newpass, setNewpass] = useState("")
  const [newpass2, setNewpass2] = useState("")
  const [changepassAction, { isLoading, IsError }] = useChangepassMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newpass !== newpass2) {
      toast.error("رمز عبور جدید و تکرار آن تطابق ندارد")
      return
    }
    const { userEmail } = JSON.parse(localStorage.getItem("userinfo"))
    const data = {
      email: userEmail,
      pastpass,
      newpass,
    }
    try {
      const response = await changepassAction(data).unwrap()
      if (response.status === 200) {
        toast.success(response.data.message)
      } else if (response.status === 400) {
        toast.error(response.data.message)
      }
    } catch (err) {
      toast.error(err.message || err.data.message)
    }
  }
  return (
    <>
      <div className="float-left container w-5/6 mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700 ">
        <div className="text-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4  ">
          <h1 className="text-3xl font-semibold  ">تغییر رمز عبور</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
        >
          <label className="text-xl">رمز عبور قبلی:</label>
          <input
            value={pastpass}
            onChange={(e) => setPastpass(e.target.value)}
            type="password"
            className="mt-2 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
          />

          <label className="text-xl">رمز عبور جدید:</label>
          <input
            value={newpass}
            onChange={(e) => setNewpass(e.target.value)}
            type="password"
            className="mt-2 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
          />
          <label className="text-xl">تکرار رمز عبور جدید: </label>
          <input
            value={newpass2}
            onChange={(e) => setNewpass2(e.target.value)}
            type="password"
            className="mt-2 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
          />
          <button
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
            // disabled={isLoading}
          >
            ثبت رمز عبور جدید
          </button>
        </form>
        {isLoading && <Loading />}
      </div>
    </>
  )
}
export default Changepass
