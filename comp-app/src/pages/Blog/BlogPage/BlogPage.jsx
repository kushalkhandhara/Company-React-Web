import "./BlogPage.css";
import img from "../../../assets/blog.jpg"
import Footer from "../../../components/Footer/Footer"
export default function BlogPage() {
  return (
    <>
    <div className="blogPage container">
        <div className="blogPage-header">
            <h2>
                2022 Latest Mobile App Development Trends
            </h2>
        </div>
        <div className="blogPage-img">
            <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="blogPage-desc">
            <div className="blogPage-list">
                <div className="blogPage-list-header">
                    <h5>
                        1. Foldable devices
                    </h5>
                </div>
                <div className="blogPage-list-para">
                    <p>
                    Foldable devices acknowledge the attainable way forward for mobile app development because the user business chooses up despite the higher-than-average prices. The key factor concerning folding displays is their transformative capability: you’ll be able to use it as a smartphone, and then, where fascinating, you’ll be able to unfold the show and receive a medium-size Tablet</p>
                    <p>
                    Some models enable users to fold them in somewhat or out, making them denser. Brands that present foldable displays include Samsung’s industry giants, with their Galaxy Z Fold model, Huawei, Motorola, and LG.</p>
                    <p>
                    The trend presents an opportunity for smartphone manufacturers and an uninspired and technological challenge for application developers. So, as the overall price tag for foldable devices grows more reasonable for most of the user-base, developers should focus on this particular trend and adapt their mobile apps to fit all types of display screens, also comprising folding displays.</p>

                </div>
            </div>
            <div className="blogPage-list">
                <div className="blogPage-list-header">
                    <h5>
                    2. VUI
                    </h5>
                </div>
                <div className="blogPage-list-para">
                    <p>
                    Foldable devices acknowledge the attainable way forward for mobile app development because the user business chooses up despite the higher-than-average prices. The key factor concerning folding displays is their transformative capability: you’ll be able to use it as a smartphone, and then, where fascinating, you’ll be able to unfold the show and receive a medium-size Tablet</p>
                    <p>
                    Some models enable users to fold them in somewhat or out, making them denser. Brands that present foldable displays include Samsung’s industry giants, with their Galaxy Z Fold model, Huawei, Motorola, and LG.</p>
                    <p>
                    The trend presents an opportunity for smartphone manufacturers and an uninspired and technological challenge for application developers. So, as the overall price tag for foldable devices grows more reasonable for most of the user-base, developers should focus on this particular trend and adapt their mobile apps to fit all types of display screens, also comprising folding displays.</p>

                </div>
            </div>
            <div className="blogPage-list">
                <div className="blogPage-list-header">
                    <h5>
                        3. The 5G Technology
                    </h5>
                </div>
                <div className="blogPage-list-para">
                    <p>
                    Foldable devices acknowledge the attainable way forward for mobile app development because the user business chooses up despite the higher-than-average prices. The key factor concerning folding displays is their transformative capability: you’ll be able to use it as a smartphone, and then, where fascinating, you’ll be able to unfold the show and receive a medium-size Tablet</p>
                    <p>
                    Some models enable users to fold them in somewhat or out, making them denser. Brands that present foldable displays include Samsung’s industry giants, with their Galaxy Z Fold model, Huawei, Motorola, and LG.</p>
                    <p>
                    The trend presents an opportunity for smartphone manufacturers and an uninspired and technological challenge for application developers. So, as the overall price tag for foldable devices grows more reasonable for most of the user-base, developers should focus on this particular trend and adapt their mobile apps to fit all types of display screens, also comprising folding displays.</p>

                </div>
            </div>
        </div>
    </div>
    <Footer/>

    </>
  )
}
