import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container className="navbar-content">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src="public/imagees/logo clinicas doctor juan cabrera.png"
            width="300"
            height="600"
            className="logo"
          />
        </Navbar.Brand>

        <div className="social-container">
          <div className="social-icons">
            <a
              href="https://es-es.facebook.com/ClinicasCabrera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://x.com/clinicascabrera?mx=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/clinicascabrera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
          <a href="mailto:CLINICAS@DRJUANCABRERA.COM" className="email-link">
            CLINICAS@DRJUANCABRERA.COM
          </a>
          <p className="clinic-location">CLÍNICA DE BARCELONA</p>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
