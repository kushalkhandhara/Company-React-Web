import "./Section1.css";
import HomeImg from "../../../assets/Home.jpg"
export default function Section1() {
  return (
    <>
        <div className="section1 ">

            <div className="main d-flex align-items-center">
                
                <div className="left-side">
                    <img src={HomeImg} alt="" className="homeImg img-fluid" />
                </div>

                <div className="right-side">
                    <div className="desc">
                        <h2>
                            OUR MISSION, VISION & VALUES
                        </h2>
                        <br />
                        <p>Our Mission is to provide best services and support in Mobile, Branding, UX UI, 3D & Animation, Cloud, Integrations, Software Architecture and Web.</p>

                        <p>Vision is to deliver superior solutions to our customers globally, driven by innovation, technology, expertise and passion.</p>

                        <p>In this contemporary tech society Values are essential. We always strive to achieve our goals ethically, and with the highest integrity. We continuously work to improve our safety culture and performance worldwide. We are committed to improving the communities where we live and work. We embrace diversity and inclusion in order to attract, develop and retain the best talent and build high-performance teams. We hold ourselves accountable for our performance, individually and collectively.</p>
                        <button>About Us</button>
                    
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
