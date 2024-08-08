import "./Blog1.css";
import BlogImg from "../../../assets/blog.jpg"
import {Link} from "react-router-dom";
export default function Blog1() {
  return (
    <div className="blog1 container">
        <div className="blog-main">
            <div className="blog-side1">
                
                <div className="blog-data">
                    <div className="blog-img">
                        <img src={BlogImg} alt="Error" className="img-fluid" />
                    </div>
                    <div className="blog-content">
                        <div className="blog-header">
                            <h4><Link> 2022 Latest Mobile App Development Trends</Link></h4>
                        </div>
                        <div className="blog-para">
                            <p>
                            1. Foldable devices Foldable devices acknowledge the attainable way forward for mobile app development because the user business chooses up despite the higher-than-average prices. The key factor concerning folding displays is their transformative capability: you’ll be able to use it as a smartphone, and then, where fascinating, you’ll be able to unfold the show and receive a medium-size Tablet Some
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-side2">

                <div className="blog-count">
                    <div className="blog-count-header">
                        <h5>Recent Articles</h5>
                    </div>
                    <div className="blog-counts-main">
                        <div className="blog-counts-side1">
                            <img src={BlogImg} className="img-fluid" alt="" />
                        </div>
                        <div className="blog-counts-side2">
                            <div className="blog-counts-side2-header">
                                <h5><Link> 2022 Latest Mobile App Development Trends</Link></h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
        </div>
    </div>
  )
}