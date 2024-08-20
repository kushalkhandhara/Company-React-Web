import "./Carousel.css"

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import FirstImage from "../../assets/business.jpg"
// import SecondImage from "../../assets/business-1.avif"
import ThirdImage from "../../assets/business-2.jpg"
export default function Carousel1() {
  return (
    <>
    <div className="carousels">
    <Carousel fade indicators={false} controls={false}>
      <Carousel.Item>
        
            <img src={FirstImage} alt="" className="carousel-img img-fluid" />
            <Carousel.Caption>
                <h3>WELCOME TO</h3>
                <h1 >Sutish Tech Solutions</h1>
                <p>We Make Products that Unites,design technology and strategy.</p>
                <button>Request Demo</button>
            </Carousel.Caption>
    
      </Carousel.Item>



      <Carousel.Item>
       <img src={ThirdImage} alt="" className="carousel-img img-fluid" />
        <Carousel.Caption>
            <h1>Our Values</h1>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel, iure sit perferendis molestias mollitia quaerat cumque in consequuntur aliquam?</p> 
          </div>
          <button>Request Demo</button>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>





    </>
  )
}
