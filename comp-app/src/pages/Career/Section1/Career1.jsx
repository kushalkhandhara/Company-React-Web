import CareerCard from "../../../components/CareerCard/CareerCard";
import "./Career1.css";

export default function Career1() {
  return (
    <div className="career1 container">
        <div className="career1-header">
            <h3>Are You Ready To <span>Join Our Team?</span></h3>
        </div>
        <div className="career1-cards">
            <CareerCard title="Data Scientist" salary="2000$" />
            <CareerCard title="WordPress Developer" salary="2500$" />
            <CareerCard title="Frontend Developer" salary="2500$" />
            <CareerCard title="Backend Developer" salary="2400$" />
            <CareerCard title="Full Stack Developer" salary="2000$" />
            <CareerCard title="IOS Developer" salary="1000$" />
        </div>
    </div>
  )
}
