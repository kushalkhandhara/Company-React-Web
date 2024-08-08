import "./Timeline.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LiaIndustrySolid } from "react-icons/lia";
import { IoSchool } from "react-icons/io5";
import { FaHospitalAlt } from "react-icons/fa";
export default function Timeline() {
  return (
    <div className="timeline container">
        <VerticalTimeline >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
               
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<LiaIndustrySolid />}
            >
                <h3 className="vertical-timeline-element-title">Fintech & Insurance</h3>
                <p style={{color:'rgb(112, 112, 112)',fontSize:'14px'}}>
                Redefine the process of paying, buying & investing! We utilize the most recent technologies to assist monetary corporations gain a competitive edge and build property relationships with customers
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaHospitalAlt />}
            >
                <h3 className="vertical-timeline-element-title">Healthcare</h3>
                <p  style={{color:'rgb(112, 112, 112)',fontSize:'14px'}}>
                STS owns expertise in providing innovation in healthcare from mobile apps. We deploy healthcare IT consulting and interactive apps to improve patient care and manage hospital data.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
               
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoSchool />}
            >
                <h3 className="vertical-timeline-element-title">Education</h3>
                <p style={{color:'rgb(112, 112, 112)',fontSize:'14px'}}>
                Create custom education solutions to beat the challenges whereas learning and facilitate students & academic establishments drive growth, potency and high performance
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
               
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<LiaIndustrySolid />}
            >
                <h3 className="vertical-timeline-element-title">Real Estate</h3>
                <p style={{color:'rgb(112, 112, 112)',fontSize:'14px'}}>
                Leverage the benefits of cost-effective real estate and property solutions to streamline smarter collaboration with customers and expand your company’s reach while optimizing the result
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>
  )
}
