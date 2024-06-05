import Carousel1 from "../../components/Carousel/Carousel"
import CountSection from "../../components/CountSection/CountSection"
import Footer from "../../components/Footer/Footer"
import Customer from "./Customer/Customer"
import "./Home.css"
import Section1 from "./Section/Section1"
import Service from "./Services/Service"

export default function Home() {
  return (
    <div className="home">
      <Carousel1/>
      <Section1/>
      <Service/>
      <CountSection/>
      <Customer/>
      <Footer/>
    </div>
  )
}
