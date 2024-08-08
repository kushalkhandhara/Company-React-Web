import "./CareerForm.css";
import JobImg from "../../../assets/jobhire.png";

export default function CareerForm() {
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div className="career-form container">
        <div className="career-main">
            <div className="career-side1">
                <img src={JobImg} className="img-fluid" alt="" />
            </div>
            <div className="career-side2">
                <h3>
                    Please Fill The Form to be Part of our Team
                </h3>
                <form onSubmit={handleSubmit}>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="name">
                                Name*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" placeholder="Enter Your Name" name="name" id="name" />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="email">
                                E-mail*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="email" placeholder="Enter Your Email" name="email" id="email" />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="phone">
                                Phone No.*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" placeholder="Enter Your Phone" name="phone" id="phone" />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="experience">
                                Years of Experience*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" placeholder="Enter Your Years of experience" name="experience" id="experience" />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="position">
                                Position Applied For*
                            </label>
                        </div>
                        <div className="form-inp">
                            {/* <input type="text" placeholder="Enter Your Years of position" name="position" id="position" /> */}
                            <select name="position" id="position">
                                <option value="" disabled selected>Select your option</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="Frontend Developer">FullStack Developer</option>
                                <option value="Frontend Developer">Backend Developer</option>
                                <option value="Frontend Developer">Application Developer</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="resume">
                                Upload Your Resume*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="file" placeholder="Please Attach Your Resume" name="resume" id="resume" />
                        </div>
                    </div>

                    <div className="form-submit">
                        <div className="form-submit">
                            <button>Submit</button>
                        </div>
                    </div>





                </form>
            </div>
        </div>

    </div>
  )
}
