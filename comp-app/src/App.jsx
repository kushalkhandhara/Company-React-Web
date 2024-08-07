import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar/Navbar"
import Expertise from "./pages/Expertise/Expertise"

function App() {
  return (
    <>
    <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/expertise" element={<Expertise/>} />
      </Routes>
    
    </>
  )
}

export default App
