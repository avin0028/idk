import { useState } from "react"
import { useUploadimageMutation, useAdditemMutation } from "../redux/wishlistSlice"
import { toast } from "react-toastify"
import Loading from "./Loading"

const Additem = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [savings, setSavings] = useState("")
  const [uploadimage, { isLoading: isImageLoading, error }] = useUploadimageMutation()
  const [additem, { isLoading }] = useAdditemMutation()
  const [imagePath, setImagePath] = useState("")

  const fileUpload = async (e) => {
    const data = new FormData()
    data.append("image", e.target.files[0])
    try {
      const response = await uploadimage(data).unwrap()
      toast.success(response.message)
      setImagePath(response.image)
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name,
      price,
      savings,
      image: imagePath,
      user: JSON.parse(localStorage.getItem("userinfo")).id,
    }
    try {
      const response = await additem(data).unwrap()
      toast.success("آیتم با موفقیت اضافه شد")
    } catch (err) {
      toast.error("مشکلی پیش آمد")
    }
  }

  return (
    <>
      <div className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700 ">
        <form
          onSubmit={handleSubmit}
          className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6"
        >
          <label className="text-2xl">نام آیتم</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="پلی استیشن ۵"
            className="mt-2 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
          />
          <label className="text-2xl">قیمت آیتم(به دلار)</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="500"
            className="mt-2 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
          />
          <label className="text-2xl">مبلغ پس انداز فعلی(به تومان)</label>
          <input
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            type="number"
            placeholder="2,000,000"
            className="mt-2 mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
          />
          <label className="text-xl">تصویر آیتم(اختیاری)</label>
          <input name="image" type="file" onChange={fileUpload} />
          <button
            className="mt-2 ml-auto w-1/3 bg-[#2F739C] text-white p-2 rounded font-semibold hover:opacity-75"
            type="submit"
            disabled={isLoading}
          >
            ثبت
          </button>
        </form>
        {isImageLoading && <Loading />}
      </div>
    </>
  )
}
export default Additem