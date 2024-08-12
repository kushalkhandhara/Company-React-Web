import "./Blog.css";
import HeroImg from "../../components/HeroImg/HeroImg"
import Blog1 from "./Section1/Blog1";
import Footer from "../../components/Footer/Footer"

export default function Blog() {
  return (
    <div className="blog">
        <HeroImg header="Our Blogs"/>
        <Blog1/>
        <Footer/>
    </div>
  )
}
