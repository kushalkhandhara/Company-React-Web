import "./CareerCard.css"

export default function CareerCard(props) {
  return (
    <div className="career-card">
        <div className="card-header">
            <h4>{props.title}</h4>
        </div>
        <div className="card-para">
            <p>
                <span>Careerly</span> | Full Time, Temporary
            </p>
            <p>
                Salary | {props.salary} 
            </p>
        </div>
        <div className="card-btn">
            <button>Apply Now</button>
        </div>
    </div>
  )
}
