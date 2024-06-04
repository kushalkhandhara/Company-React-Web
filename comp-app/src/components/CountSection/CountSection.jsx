import { useState } from "react";
import "./CountSection.css"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function CountSection() {
    const [counterOn,setCounterOn] = useState(false)
  return (
    
    <>
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="count-section">
            <div className="count-cards">
                
                <div className="count-card">
                    <h1>{ counterOn && <CountUp start={0} end={35} duration={3} delay={0} />}+</h1>
                    <h6>DEVELOPERS STRENGTH</h6>
                </div>
                <div className="count-card">
                    <h1>{ counterOn && <CountUp start={0} end={65} duration={3} delay={0} />}+</h1>
                    <h6>PROJECTS</h6>
                </div>
                <div className="count-card">
                    <h1>{ counterOn && <CountUp start={0} end={40} duration={3} delay={0} />}+</h1>
                    <h6>SATISFIED CLIENTS</h6>
                </div>
                <div className="count-card">
                    <h1>{ counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}+</h1>
                    <h6>COUNTRIES SERVED</h6>
                </div>

            </div>
        </div>
    </ScrollTrigger>
    </>
    
  )
}
