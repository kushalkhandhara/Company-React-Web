import "./About1.css"
import Business from "../../../assets/bg-service-A3.jpg"

export default function About1() {
  return (
    <div className="about1 container">
        <div className="about1-desc">
            <p>
            STS offers a broad spectrum of software development and owns expertise in Web Development, Mobile App Development, Industry-specific Solutions, Chatbot, IoT, and more. We are a Global Team that thinks profoundly about making extraordinary products  for our overall clients. Our organization is engaged actively in providing end-to-end IT solutions to cater to the demands of a diverse clientele  base across the world. STS’s strong team of professionals having in-depth knowledge of the latest technologies and tools as well as an excellent state-of-the-art infrastructure,
            </p>
            <p>
            STS has proved its excellence in developing and designing technology driven
            </p>

            <p>
            solutions that add more power to businesses at the most competitive rates. Aside from its office in Gandhinagar in Gujarat, the organization additionally has its branch office in the United States of America and Canada.
            </p>

        </div>
        <div className="about2-img">
            <img src={Business} className="img-fluid" alt="" />
        </div>
    </div>
  )
}
