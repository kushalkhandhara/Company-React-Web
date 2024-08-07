import "./TechCard.css";


export default function TechCard(props) {
  return (
    <div className="techcard">
        <div className="techicon">
            {props.icon}
            {/* <GrServices size={50}/> */}
        </div>
        <div className="techdesc">
          <h3>{props.header}</h3>
          <p>
            {props.data}
          </p>
        </div>
    </div>
  )
}
