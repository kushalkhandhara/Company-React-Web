import "./Expertise1.css";

import Card from "../../../components/BusinessCard/Card"
import TechCard from "../../../components/TechCard/TechCard";

import { BsCart4 } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import { IoIosTrendingUp } from "react-icons/io";
import { AiFillAndroid } from "react-icons/ai";
import { FaAppStoreIos } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export default function Expertise1() {
  return (
    <div className="expertise1 container-fluid">

        <div className="expsection1">
            <div className="expsection1-header">
                <h2>
                    BUSINESS SOLUTIONS
                </h2>
            </div>
        </div>

        <div className="expsection2">
            <Card data="Web Portal" />
            <Card data="Software Development" />
            <Card data="Product Development" />
            <Card data="Hire Dedicated Developer" />
            <Card data="E-Commerce" />
            <Card data="MVP Development" />
            <Card data="Saas Development" />
            <Card data="QUICK SERVICE" />
        </div>

        <div className="expsection3">
            <TechCard icon={<GrServices size={50}/>}
            data="Web App Development,
            Mobile App Development,
            Front End Development,
            Testing and QA,
            Hub-Spot Development,
            Full Stack Development,
            Mean Stack Development,
            Jam Stack Development."
            header="SERVICES"
            />
            <TechCard icon={<BsCart4 size={50}/>}
            data="We provide comprehensive e-commerce solutions for platforms like WooCommerce, Shopify, and BigCommerce, enhancing your online store's performance, design, and user experience. Partner with us to streamline your digital sales and grow your business.
            "
            header="E-Commerce"
            />
            <TechCard icon={<IoIosTrendingUp size={50}/>}
            data="We offer advanced solutions in Chatbot development, AI/ML, IoT, and Blockchain, optimizing your business operations and enhancing customer engagement. Partner with us to harness cutting-edge technology and drive innovation.
            "
            header="Trending"
            />
            <TechCard icon={<AiFillAndroid size={50}/>}
            data="We specialize in Android app development using Flutter, Kotlin, and React Native, delivering high-performance, cross-platform mobile applications. Partner with us to create seamless and innovative app experiences.
            "
            header="Android App"
            />
            <TechCard icon={<FaAppStoreIos size={50}/>}
            data="We excel in iOS app development using Swift and Objective-C, creating high-quality, user-friendly applications. Partner with us to bring your innovative iOS app ideas to life.
            "
            header="IOS App"
            />
            <TechCard icon={<FaLaptopCode size={50}/>}
            data="We provide robust backend development services using .NET, Java, Node.js, Python, Ruby on Rails, Laravel, PHP, Golang, and WordPress. Partner with us to build scalable and efficient server-side solutions for your applications.
            "
            header="Frontend"
            />
            <TechCard icon={<FaLaptopCode size={50}/>}
            data="We specialize in frontend development using Angular, React.js, Vue.js, Gatsby.js, HTML, CSS, and JavaScript, crafting responsive and interactive user interfaces. Partner with us to enhance your web presence with cutting-edge design and functionality.
            "
            header="Backend"
            />



        </div>

    </div>
  )
}
