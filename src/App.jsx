import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage"
import SeacrhCar from "./Pages/seacrhcar"
import Login from "./Pages/Login"
import Detail from "./Pages/detail"
import NotFound from "./Pages/notFound"
import Register from "./Pages/Register"

function App() {

  return (
    <>
  <Router>
    <Routes> 
      <Route  path ="/home" element={<LandingPage />}></Route>

      <Route  path ="/seacrhcar" element={<SeacrhCar/>}></Route>
      <Route  path ="/detail/:id" element={<Detail />}></Route>
      <Route  path ="/register" element={<Register />}></Route>
      <Route  path ="/login" element={<Login/>}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
