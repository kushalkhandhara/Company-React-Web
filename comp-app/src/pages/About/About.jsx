import "./About.css"
import HeroImg from "../../components/HeroImg/HeroImg"
import About1 from "./Section1/About1"
import CountSection from "../../components/CountSection/CountSection"
import Footer from "../../components/Footer/Footer"
export default function About() {
  return (
    <div className="about">
      <HeroImg header = "About Us" data="Who Are We?" />
      <About1/>
      <CountSection/>
      <Footer/>
    </div>
  )
}
