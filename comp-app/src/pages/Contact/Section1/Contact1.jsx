import { useState } from "react";
import "./Contact1.css";
import axios from "axios";

export default function Contact1() {


    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8801/api/msg/msgClient", inputs);
          console.log(response.data);
          setInputs({
            firstname: '',
            lastname: '',
            compname: '',
            comp_no: '',
            comp_msg: ''
        });
        } catch (err) {
          console.error(err);
        }
      };
  return (
    <div className="contact1 container">
        <div className="contact1-header">
            <h2>
                Let&apos;s Start A Converstaion
            </h2>
        </div>
        <div className="contact1-main">
            <div className="contact1-side1">
                <div className="contact1-side1-header">
                    <h4>Ask how can we help you :</h4>
                </div>
                <h5>See Our Platforms in Actions</h5>
                <p>
                    Request For a Personalized Demo for Software Development.
                </p>
                <h5>Expand Your Business And Make A Website or App Now</h5>
                <p>
                    Please Contact Us For Appointment and Increse Your Business.
                    Today and Right Now.
                </p>
                <h5>Hire a Professional Developer</h5>
                <p>
                    You Can Hire a developer for your project.
                </p>
                <h5>
                    Build Your Dream Projects With Us
                </h5>
                <p>
                We are dedicated to meeting our clients&apos; needs, ensuring their satisfaction with every project. Our team works tirelessly to deliver high-quality results. We go above and beyond to bring their visions to life.
                </p>
            </div>
            <div className="contact1-side2">
                <h6>Please Note : All Fields Are Required</h6>
                <form onSubmit={handleSubmit} autoComplete="off">
                    
                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="firstname">
                                First Name
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" name="firstname" id="firstname" onChange={handleChange} value={inputs.firstname || ""} />
                        </div>
                    </div>
                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="lastname">
                                Last Name
                            </label>
                        </div>
                        <div className="form-inp"> 
                            <input type="text" name="lastname" id="lastname" onChange={handleChange} value={inputs.lastname || ""} />
                        </div>
                    </div>
                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="comp_name">
                                Company Name
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" name="comp_name" id="comp_name" onChange={handleChange} value={inputs.comp_name || ""} />
                        </div>
                    </div>
                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="comp_no">
                                Company Phone No.
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" name="comp_no" id="comp_no" onChange={handleChange} value={inputs.comp_no||""} />
                        </div>
                    </div>
                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="comp_msg">
                                Message
                            </label>
                        </div>
                        <div className="form-inp">
                            <textarea rows="20" cols="20" type="text" name="comp_msg" id="comp_msg" onChange={handleChange} value={inputs.comp_msg||""} />
                        </div>
                    </div>
                    <div className="form-data">
                        <button>
                            <span className="circle1"></span>
                            <span className="circle2"></span>
                            <span className="circle3"></span>
                            <span className="circle4"></span>
                            <span className="circle5"></span>
                            <span className="text">Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
