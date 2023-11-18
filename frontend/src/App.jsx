import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./globals.css"
import Signin from "./pages/SignIn"
import Signup from "./pages/signUp"
import Notfound from "./pages/Notfound"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <>
      {/* <h1>head</h1> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <ToastContainer rtl />
      </Router>
    </>
  )
}

export default App
