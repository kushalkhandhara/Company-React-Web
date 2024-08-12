import "./Contact.css";
import HeroImg from "../../components/HeroImg/HeroImg"
import Contact1 from "./Section1/Contact1";
import Contact2 from "./Section2/Contact2";
export default function Contact() {
  return (
    <div className="contact">
        <HeroImg header="Let's Have A Talk"/>
        <Contact1/>
        <Contact2/>
    </div>
  )
}
