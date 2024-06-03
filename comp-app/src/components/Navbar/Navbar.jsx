import { useState } from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from  "../../assets/logo.jpg"
import { CiSearch } from "react-icons/ci";

export default function Navbar1() 
{
  const [nav,setNav] = useState(false);

    //Scroll Navbar
    const changeValueOnScroll = () =>{
      const scrollValue = document?.documentElement?.scrollTop; 
      scrollValue>100 ? setNav(true) : setNav(false);
    };
  
    window.addEventListener("scroll", changeValueOnScroll);
  

  return (
    <>
      <header>
        <Navbar expand="lg" className={`${nav===true ? "sticky" : "" }`}>
          <Container>
            {/* Corrected usage of Link within Navbar.Brand */}
            <Navbar.Brand as={Link} to="/">
              <img src={logo} className="logo img-fluid"  alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="me-2" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="me-2" as={Link} to="/about">About</Nav.Link>
                <Nav.Link className="me-2" as={Link} to="/about">Contact</Nav.Link>
                <Nav.Link className="me-2" as={Link} to="/about">Career</Nav.Link>
                <Nav.Link className="me-2" as={Link} to="/about">Blog</Nav.Link>
                <Nav.Link className="me-2" as={Link} to="/about">Contact Us</Nav.Link>
                <div className="d-flex align-items-center">
                  <div className="search-icon me-3">
                    <CiSearch size={30} />
                  </div>
                  <div className="navbar-btn">
                    <button>Hire Developer</button>
                  </div>

                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
