import { Route,BrowserRouter as Router, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage/LandingPage"
import SeacrhCar from "./Pages/seacrhcar"

import Detail from "./Pages/detail"
import NotFound from "./Pages/notFound"

function App() {
  

  return (
    <>
  <Router>
    <Routes>
      <Route  path ="/home" element={<LandingPage />}></Route>
      <Route  path ="/seacrhcar" element={<SeacrhCar/>}></Route>
      <Route  path ="/detail/:id" element={<Detail />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
