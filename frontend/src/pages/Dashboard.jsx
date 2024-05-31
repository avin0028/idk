import Header from "../components/Header"
import SidebarComponent from "../components/SidebarComponent"
import { Route, Routes } from "react-router-dom"
import Showitems from "../components/Showitems"
import Additem from "../components/Additem"
import Changepass from "../components/Changepass"
import Changename from "../components/Changename"

const Dashboard = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Showitems />} />
          <Route path="/:pageNumber" element={<Showitems />} />
          <Route path="/additem" exact element={<Additem />} />
          <Route path="/changepass" exact element={<Changepass />} />
          <Route path="/changename" exact element={<Changename />} />
        </Routes>
        <SidebarComponent />
      </div>
    </>
  )
}
export default Dashboard
