import NoImage from "../no-image-icon.png"
import { FaRegTrashCan } from "react-icons/fa6"
import Modalcontainer from "./Modalcontainer"
import { useState } from "react"
const Itemcard = ({ itemData }) => {
  const [modalState, setModalstate] = useState(false)
  const [modalComponent, setModalcomponent] = useState(null)
  const handleOnclose = () => setModalstate(false)

  return (
    <>
      <div className="bg-gray-200  rounded-2xl p-2 ">
        <h1 className="text-2xl text-center	">{itemData.name}</h1>
        {!itemData.image ? (
          <img
            className="  object-center h-1/3  mx-auto w-2/3	 aspect-square object-fill "
            src={NoImage}
          />
        ) : (
          <img
            className="  object-center mx-auto	 aspect-square object-fill w-2/3	 h-1/3 "
            src={`http://localhost:5000${itemData.image}`}
          />
        )}

        <div className="flex-col content-center justify-center mt-2">
          <div className="h-1/3 grid grid-cols-2 grid-rows-2">
            <p className="text-sm ">قیمت دلاری: {itemData.price}$ </p>
            <p className="text-sm">پس انداز دلاری: {itemData.savingsD}$</p>
            <p className="text-sm ">
              قیمت ریالی: <br /> {itemData.priceR} ت{" "}
            </p>
            <p className="text-sm">
              پس انداز فعلی: <br /> {itemData.savings} ت{" "}
            </p>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${itemData.progress}%` }}
            ></div>
            <div className="text-center text-sm	 ">
              {itemData.progress} درصد تکمیل شده است
            </div>
          </div>
          <div className="flex items-center  mt-4 md:mt-8 lg:mt-4 justify-between">
            <FaRegTrashCan
              onClick={() => {
                setModalstate(true)
                setModalcomponent("delete")
              }}
              className="mt-2 w-1/5 h-1/5 md:w-1/6 md:h-1/6 cursor-pointer  bg-[#FF5C5C] text-white  p-1 rounded font-semibold hover:opacity-75"
            />
            <button
              onClick={() => {
                setModalstate(true)
                setModalcomponent("addSaving")
              }}
              className="mt-2 mr-2 p-0  sm:p-1  bg-[#2F739C] text-white  rounded  hover:opacity-75"
            >
              اضافه کردن پس انداز
            </button>
          </div>
        </div>
      </div>
      <Modalcontainer
        component={modalComponent}
        onClose={handleOnclose}
        visible={modalState}
        props={itemData}
      />
    </>
  )
}
export default Itemcard
