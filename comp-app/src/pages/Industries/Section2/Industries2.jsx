import "./Industries2.css";
import { GoArrowRight } from "react-icons/go";

export default function Industries2() {
  return (
    <div className="industries2 container">
        <div className="industries2-header">
            <h2>
                Our Industries Expertise
            </h2>
            <p>
            Give yourself more variety than ever with our industries
            </p>
        </div>
        <div className="industries-det">
            <div className="row">
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>On-Demand App Development</span>
                </div>
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Logistics App Development</span>
                </div>
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Restaurant App Development</span>
                </div>

                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Enterprise App Development</span>    
                </div>
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>SAAS App Development</span>
                </div>
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Retail App Development</span>
                </div>

                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Travel App Development company</span>
                </div>
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Event App Development</span>
                </div>
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Sports App Development</span>
                </div>

                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Social Networking App Development</span>
                </div>
                <div className="col-sm-4 mt-4">
                    <GoArrowRight size={25} /> <span>Kiosk Application Development</span>
                </div>
            </div>
        </div>

    </div>
  )
}
