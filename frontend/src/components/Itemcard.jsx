const Itemcard = ({ itemData }) => {
  return (
    <>
      <div className="bg-gray-200  rounded-2xl p-6 ">
        <h1 className="text-3xl text-center	">{itemData.name}</h1>
        <img className="mt-6 object-cover w-full " src={itemData.image} />
        <div className="flex-col content-center justify-center mt-2">
          <div className="flex content-center justify-center mt-2">
            <div className="flex-col">
              <p>قیمت دلاری: {itemData.price} دلار </p>
              <p>پس انداز دلاری: {itemData.savingsD} دلار </p>
            </div>
            <div className="flex-col">
              <p className="mr-2"> قیمت ریالی: {itemData.priceR} تومان </p>
              <p className="mr-2"> پس انداز فعلی: {itemData.savings} تومان </p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${itemData.progress}%` }}
            ></div>
            <div className="text-center ">{itemData.progress} درصد تکمیل شده است </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Itemcard
