import "./Card.css";
import { IoLaptopOutline } from "react-icons/io5";

export default function Card(props) {
  return (
    <div className="buscard">
        <div className="card-icon">
            <IoLaptopOutline size={30 }/>
        </div>
        <div className="card-text">
            <h3>
                {props.data}
            </h3>
        </div>


    </div>
  )
}
