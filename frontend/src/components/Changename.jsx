import { useChangenameMutation } from "../redux/usersSlice"
import { useState } from "react"
import { toast } from "react-toastify"
import Loading from "./Loading"

const Changename = () => {
  const [newname, setNewname] = useState("")
  const [changenameAction, { isLoading, error }] = useChangenameMutation()
  const { email } = JSON.parse(localStorage.getItem("userinfo"))
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await changenameAction({ email, newname }).unwrap()
    console.log(response.statuscode)
    if (response.statuscode === 200) {
      toast.success(response.message)
    } else if (response.statuscode === 400) {
      toast.error(response.message)
    } else {
      toast.error("مشکل ")
    }
    // } catch (err) {
    // toast.error("مشکلی پیش آمد")
  }
  return (
    <>
      <div className="float-left container w-full sm:w-4/5  h-[83vh] sm:h-[90vh]  mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700 ">
        <div className="text-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4  ">
          <h1 className="text-3xl font-semibold  ">تغییر نام</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
        >
          <label className="text-xl">نام جدید</label>
          <input
            value={newname}
            onChange={(e) => setNewname(e.target.value)}
            type="text"
            className="mt-2 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
          />

          <button
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
          >
            تفییر نام
          </button>
        </form>
        {isLoading && <Loading />}
      </div>
    </>
  )
}
export default Changename
