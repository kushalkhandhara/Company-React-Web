import HeroImg from "../../components/HeroImg/HeroImg";
import "./Expertise.css";
import Expertise1 from "./Section1/Expertise1";
import Footer from "../../components/Footer/Footer"
export default function Expertise() {
  return (
    <div className="expertise">
        <HeroImg header="Our Expertise"/>
        <Expertise1/>
        <Footer/>
    </div>
  )
}
