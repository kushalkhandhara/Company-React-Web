import "./Cutomer.css"
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Customer() 
{
    const settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        waitForAnimate: false
      };
  return (
    <div className="customer-section">
        <div className="customer-header">
            <h1>What Customers Say About Us</h1>
        </div>
        
        <div className="customer-reviews ">
        <Slider {...settings}>
            
                <div>
                    <p>
                        Working with Sutish is easy, and they have delivered that outcome we wanted.
                    </p>
                    <h6>S. Saifi</h6>
                </div>

                <div>
                    <p>
                    We hire dedicated AI ML developers who are working with us in our R & D teams their quality and search skills are beyond the limits.
                    </p>
                    <h6>Pratik Shukla</h6>
                </div>

                <div>
                    <p>
                        Working with Sutish is easy, and they have delivered that outcome we wanted.
                    </p>
                    <h6>S. Saifi</h6>
                </div>
                <div>
                    <p>
                    We hire dedicated AI ML developers who are working with us in our R & D teams their quality and search skills are beyond the limits.
                    </p>
                    <h6>Pratik Shukla</h6>
                </div>

            </Slider>
        </div>
        
    </div>
  )
}
