import "./Career.css";
import HeroImg from "../../components/HeroImg/HeroImg"
import Career1 from "./Section1/Career1";
import CareerForm from "./Section2/CareerForm";
import Footer from "../../components/Footer/Footer"
export default function Career() {
  return (
    <div className="career">
        <HeroImg header="Career & Culture" data="“We have faith in a work culture that empoers and persuades you towards innovativeness and development.”" />
        <Career1/>
        <CareerForm/>
        <Footer/>
    </div>
  )
}
