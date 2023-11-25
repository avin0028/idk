import Itemcard from "./Itemcard"
const Showitems = () => {
  return (
    <>
      <div className=" relative container h-[95vh] float-left w-5/6 p-12 text-gray-700 ">
        <div className="w-full grid grid-cols-3 gap-4">
          <Itemcard
            itemData={{
              name: "پلی استیشن",
              price: 500,
              savings: 250000,
              savingsD: 20,
              priceR: 20000000,
              image: "http://localhost:5000/uploads/image-1700322450104.png",
              progress: 40,
            }}
          />
          <Itemcard
            itemData={{
              name: "پلی استیشن",
              price: 500,
              savings: 250000,
              savingsD: 20,
              priceR: 20000000,
              image: "http://localhost:5000/uploads/image-1700322450104.png",
              progress: 40,
            }}
          />
          <Itemcard
            itemData={{
              name: "پلی استیشن",
              price: 500,
              savings: 250000,
              savingsD: 20,
              priceR: 20000000,
              image: "http://localhost:5000/uploads/image-1700322450104.png",
              progress: 40,
            }}
          />
          <Itemcard
            itemData={{
              name: "پلی استیشن",
              price: 500,
              savings: 250000,
              savingsD: 20,
              priceR: 20000000,
              image: "http://localhost:5000/uploads/image-1700322450104.png",
              progress: 40,
            }}
          />
          <Itemcard
            itemData={{
              name: "پلی استیشن",
              price: 500,
              savings: 250000,
              savingsD: 20,
              priceR: 20000000,
              image: "http://localhost:5000/uploads/image-1700322450104.png",
              progress: 40,
            }}
          />
        </div>

        <nav className="absolute bottom-4 left-1/2">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  class="w-3 h-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Showitems
