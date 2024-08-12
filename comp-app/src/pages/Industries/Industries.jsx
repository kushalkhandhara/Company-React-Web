import "./Industries.css";
import HeroImg from "../../components/HeroImg/HeroImg"
import Timeline from "./Section1/Timeline";
import Industries2 from "./Section2/Industries2";
import Footer from "../../components/Footer/Footer"
export default function Industries() {
  return (
    <div className="industries">
        <HeroImg header ="Industries" />
        <Timeline/>
        <Industries2/>
        <Footer/>
    </div>
  )
}
