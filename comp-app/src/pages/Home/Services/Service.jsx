import "./Service.css"
import Service1 from "../../../assets/service1.png"
import Service2 from "../../../assets/service2.png"
import Service3 from "../../../assets/service3.png"
import Service4 from "../../../assets/service4.png"
import Service5 from "../../../assets/service5.png"
import Service6 from "../../../assets/service6.png"
export default function Service() {
  return (
    <div className="section-2">
        <div className="service-header">
            <h1>OUR SERVICES</h1>
            <span>&quot;Experience the excellence of our dedicated professionals who are adept in delivering top-notch solutions&quot;</span>
        </div>
        <div className="service-details">

            <div className="service-cards">

                <div className="service-card">
                   <div className="service-img">
                        <img src={Service1} className="img-fluid" alt="" />
                   </div>
                   <div className="service-desc">
                        <h3>Web & Mobile Apps</h3>
                        <p>Beauty and function with Quality code that lasts.</p>
                   </div>     
                </div>

                <div className="service-card">
                   <div className="service-img">
                        <img src={Service2} className="img-fluid" alt="" />
                   </div>
                   <div className="service-desc">
                        <h3>AR/VR</h3>
                        <p>We bridge the gaps between the virtual and real worlds by delivering AR/VR solutions.</p>
                   </div>
                </div>

                <div className="service-card">
                   <div className="service-img">
                        <img src={Service3} className="img-fluid" alt="" />
                   </div>
                   <div className="service-desc">
                        <h3>Digital Marketing</h3>
                        <p>Beauty and function with Quality code that lasts.</p>
                   </div>
                </div>

                <div className="service-card">
                   <div className="service-img">
                        <img src={Service4} className="img-fluid" alt="" />
                   </div>
                   <div className="service-desc">
                        <h3>Internet of Things</h3>
                        <p>Services that enable safer, efficient, and creative solutions.</p>
                   </div>
                </div>

                <div className="service-card">
                   <div className="service-img">
                        <img src={Service5} className="img-fluid" alt="" />
                   </div>
                   <div className="service-desc">
                        <h3>Geospatial Engineering</h3>
                        <p>Leave a lasting impression threw live updates.</p>
                   </div>
                </div>

                <div className="service-card">
                   <div className="service-img">
                        <img src={Service6} className="img-fluid" alt="" />
                   </div>
                   <div className="service-desc">
                        <h3>Geospatial Engineering</h3>
                        <p>Leave a lasting impression threw live updates.</p>
                   </div>
                </div>

 


       

            </div>

        </div>
    </div>
  )
}
