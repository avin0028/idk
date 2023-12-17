import { useDeleteitemMutation } from "../redux/wishlistSlice"
import { toast } from "react-toastify"
const Deleteitem = ({ selectNo, itemkey }) => {
  const [deleteitem, { loading, error }] = useDeleteitemMutation()
  const handleYes = async () => {
    try {
      const response = await deleteitem({ item: itemkey }).unwrap()
      toast.success(response.message)
    } catch (error) {
      toast.error(error.message)
    }

    selectNo()
  }
  return (
    <>
      <div className="  bg-white flex flex-col justify-between rounded p-2 w-2/4 md:w-1/5 h-1/5 text-center">
        <p className="  font-bold	">آیا از حذف این آیتم مطمین هستید؟</p>
        <div className="flex w-full justify-between">
          <button
            onClick={handleYes}
            className="bg-lime-500 text-white rounded w-1/4	 p-1"
          >
            بله
          </button>
          <button onClick={selectNo} className="bg-red-600 text-white rounded w-1/4 p-1">
            خیر
          </button>
        </div>
      </div>
    </>
  )
}
export default Deleteitem
