import "./CareerForm.css";
import JobImg from "../../../assets/jobhire.png";
import { useState } from "react";
import axios from "axios";

export default function CareerForm() {

        const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        position: '',
        resume: null
    });

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === 'file') {
            setInputs(values => ({ ...values, [name]: files[0] }));
        } else {
            setInputs(values => ({ ...values, [name]: value }));
        }
    }

    const upload = async()=>{
        try{
        const formData = new FormData();
        formData.append("file",inputs.resume);
        const res = await axios.post("http://localhost:8801/api/upload",formData);
        console.log(res.data);
        return res.data;
      }
      catch(err){
        console.log(err);
      }
    }


    const handleSubmit =async(e)=>{
        e.preventDefault();   
        console.log(inputs);
        try{
            const pdfUrl = await upload();
            const response = await axios.post("http://localhost:8801/api/msg/msgJoiner", {
                name : inputs.name,   
                email : inputs.email,
                phone : inputs.phone,
                experience : inputs.experience,
                position : inputs.position,
                resume : inputs.resume ? pdfUrl : "",
                
            });
            console.log(response.data);

        }
        catch(err){
            console.log(err);
        }
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
                <form onSubmit={handleSubmit} autoComplete="off">

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="name">
                                Name*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" placeholder="Enter Your Name" value={inputs.name || ""} name="name" id="name" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="email">
                                E-mail*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="email" placeholder="Enter Your Email" value={inputs.email || ""} 
                            onChange={handleChange}
                            name="email" id="email" />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="phone">
                                Phone No.*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" placeholder="Enter Your Phone" value={inputs.phone || ""}
                            onChange={handleChange} name="phone" id="phone" />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="form-label">
                            <label htmlFor="experience">
                                Years of Experience*
                            </label>
                        </div>
                        <div className="form-inp">
                            <input type="text" placeholder="Enter Your Years of experience" 
                            value = {inputs.experience || ""} 
                            onChange={handleChange}
                            name="experience" id="experience" />
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
                            <select name="position" id="position" onChange={handleChange}  >
                                <option value="" disabled selected>Select your option</option>
                                <option value="Frontend Developer">Frontend Developer</option>
                                <option value="FullStack Developer">FullStack Developer</option>
                                <option value="Backend Developer">Backend Developer</option>
                                <option value="Application Developer">Application Developer</option>
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
                            <input type="file" placeholder="Please Attach Your Resume" name="resume" 
                            onChange={handleChange}
                     
                            id="resume" />
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
