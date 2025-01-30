import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src=" imagees/logo1.jpg"
            width="300"
            className="logo"
          />
        </Navbar.Brand>

        <div className="social-container">
          <div className="social-icons">
            <a
              href="https://es-es.facebook.com/ClinicasCabrera/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaFacebookF size={"20px"} />
            </a>
            <a
              href="https://x.com/clinicascabrera?mx=2"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaTwitter size={"18px"} />
            </a>
            <a
              href="https://www.instagram.com/clinicascabrera/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaInstagram size={"20px"} />
            </a>
          </div>
          <p className="clinic-number">Tel.93 205 66 14</p>
          <p className="clinic-location">CLÍNICA DE BARCELONA</p>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
