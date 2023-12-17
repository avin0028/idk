import { useEffect, useState } from "react"
import { useGetitemsQuery } from "../redux/wishlistSlice"
import { useParams, Link } from "react-router-dom"
import Itemcard from "./Itemcard"
const Showitems = () => {
  const pageWidth = window.innerWidth
  console.log(pageWidth)
  const { pageNumber } = useParams()
  const { data, isLoading, isError } = useGetitemsQuery({ pageNumber, pageWidth })
  return (
    <>
      <div className=" container h-[83vh] sm:h-[90vh] float-left w-full sm:w-4/5 p-4 text-gray-700 ">
        <div className=" grid-rows-2  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-[98%] grid gap-2">
          {data?.items?.map((item) => (
            <Itemcard
              key={item._id}
              itemData={{
                name: item.name,
                price: item.price,
                savings: item.savings,
                savingsD: item.savingsD,
                priceR: item.priceR,
                image: item.image,
                progress: Math.ceil((item.savingsD / item.price) * 100),
                id: item._id,
              }}
            />
          ))}
        </div>
        <nav className="p-2  m-auto w-1/2">
          <ul className="flex items-center -space-x-px text-base">
            {[...Array(data?.pages).keys()].map((x) => (
              <Link
                key={x + 1}
                to={`/dashboard/${x + 1}`}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {x + 1}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Showitems
