import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar/Navbar"
import Expertise from "./pages/Expertise/Expertise"
import Career from "./pages/Career/Career"
import Industries from "./pages/Industries/Industries"
import Blog from "./pages/Blog/Blog"
import BlogPage from "./pages/Blog/BlogPage/BlogPage"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/expertise" element={<Expertise/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/industries" element={<Industries/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:blogId" element={<BlogPage/>} />
      </Routes>
    </>
  )
}

export default App
