import "./Contact2.css";
import { CiPhone } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
export default function Contact2() {
  return (
    <div className="contact2">
        <div className="contact2-main">
            <div className="contact2-side1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d918.0764200636443!2d72.52391289932581!3d23.012545965631332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851af5a194c7%3A0xf38146457fd83093!2sSutish%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1723417270959!5m2!1sen!2sin" loading="lazy" ></iframe>
            </div>
            <div className="contact2-side1">
                <div className="contact2-meet">
                    <div className="contact2-header">
                        <h2>
                            Meet Us
                        </h2>
                    </div>
                    <div className="contact2-det">
                        <div className="contact2-det-side1">
                            <span><CiPhone size={38} color="rgb(0, 157, 113)" /></span>
                            <span>
                                +911234567890
                            </span>
                        </div>
                        <div className="contact2-det-side1">
                            <span><MdAlternateEmail size={38} color="rgb(0, 157, 113)" /></span>
                            <span>
                                tech@gmail.com
                            </span>
                        </div>
                        <div className="contact2-det-side1">
                            <span><CiLocationOn size={38} color="rgb(0, 157, 113)" /></span>
                            <span >
                                Titanium City Center
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="contact2-side1">
                <div className="contact2-business">
                    <div className="contact2-header">
                        <h2>
                            Grow With Us
                        </h2>
                    </div>
                    <div className="contact2-para">
                        <p>
                            &quot;Join us on a journey of growth and innovation. Together, we&apos;ll reach new heights and achieve success.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
