import { useState } from "react"
import { useAddsavingsMutation } from "../redux/wishlistSlice"
import { toast } from "react-toastify"
const addSavings = ({ selectNo, itemKey, savings }) => {
  const [inputvalue, setInputvalue] = useState("")
  const [updateAmmount, { error, loading }] = useAddsavingsMutation()
  const handleSubmit = async () => {
    try {
      const response = await updateAmmount({
        itemId: itemKey,
        savings,
        newsavings: inputvalue,
      }).unwrap()
      toast.success(response.message)
    } catch (error) {
      toast.error(error.message)
    }

    selectNo()
  }
  return (
    <div className=" text-center p-2 bg-white w-1/3 h-1/3 flex flex-col  justify-between">
      <p className="font-bold">مبلغ پس انداز را وارد کنید</p>
      <input
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
        placeholder="مبلغ پس انداز"
        type="number"
        className=" mx-auto p-2 appearance-none block w-1/2 bg-gray-200 placeholder-gray-400 rounded border focus:border-teal-500"
      />
      <div className="flex justify-between">
        <button onClick={selectNo} className="bg-red-600 text-white rounded w-1/5  p-1">
          کنسل
        </button>
        <button
          onClick={handleSubmit}
          className="bg-lime-500 text-white rounded w-1/8 sm:w-1/4	 p-1"
        >
          ثبت مبلغ جدید
        </button>
      </div>
    </div>
  )
}
export default addSavings
