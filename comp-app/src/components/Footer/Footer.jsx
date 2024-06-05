import imgLogo from "../../assets/logo.jpg"
import "./Footer.css"
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiLogoSkype } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="row p-4">

            <div className="col-sm-4">
                <div className="footer-sec1 p-2">
                    <div className="footer-logo">
                        <img src={imgLogo} className="img-fluid" alt="" />
                    </div>
                    <div className="footer-sec1-desc">
                        <p>
                        Manage your complete business IT infrastructure with Sutish Tech Solutions.
                        </p>
                        <div className="phone-icons"  >
                            <FaPhoneAlt fontSize={20} />
                            <span>
                                +91 6355700939
                            </span>
                        </div>
                        <div className="phone-icons"  >
                            <CiMail fontSize={24}/>
                            <span>
                            info@sutishtechsolutions.com
                            </span>
                        </div>
                        <div className="social-icons d-flex gap-4 mt-5">
                            <BiLogoSkype fontSize={22}/>
                            <FaInstagram fontSize={20} />
                            <BsTwitterX fontSize={20} />
                            <FaLinkedin fontSize={20}/>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-sm-4">
                <div className="footer-sec2 p-3">
                    <h1>Locations</h1>

                    <div className="location  align-items-center">
                        <FaLocationDot fontSize={35} style={{color:"red"}} />
                        <span>
                            India: 006, Panchaheel, Near Dharmarasik, Berrage Road, Vasana, Ahmedabad, GJ IN.
                        </span>
                    </div>
                    <div className="location align-items-center">
                        <FaLocationDot fontSize={35} style={{color:"red"}} />
                        <span>
                            United Kingdom: 20 holliers way, AL10 8HL postcode, Hatfield, Hertfordshire.
                        </span>
                    </div>
                    <div className="location  align-items-center">
                        <FaLocationDot fontSize={35} style={{color:"red"}} />
                        <span>
                            Canada: Rue Alexandra, Local 108 Montreal, H2S 3J5 Quebec.
                        </span>
                    </div>
                    <div className="location  align-items-center">
                        <FaLocationDot fontSize={34} style={{color:"red"}} />
                        <span>
                            USA: 4718 Belwood Green, Halethorpe – Maryland – 21227.
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="col-sm-4">
                <div className="footer-sec3 p-3">
                    <h1>Quick Links</h1>
                    <div className="quick-links">
                        <div className="link" >
                            <span>Home</span>
                            <span>About Us</span>
                        </div>
                        <div className="link" >
                            <span>Career</span>
                            <span>Expenses</span>
                        </div>
                        <div className="link" >
                            <span>Industries</span>
                            <span>Blog</span>
                        </div>
                        <div className="link" >
                            <span>Conatact Us</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="copyright-section p-4">
            <p>Copyright © 2022 - All Rights Reserved. Sutish Tech Solutions Pvt. Ltd.</p>
        </div>

    </div>
    </>
  )
}
