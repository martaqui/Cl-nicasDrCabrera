import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="footer-left">
              <h3>QUIÉNES SOMOS</h3>
              <p>
                En Clínicas Dr. Juan Cabrera ofrecemos a nuestros pacientes la
                mejor alternativa para solucionar sus problemas de varices
                gracias a la escleroterapia con microespuma. única técnica, hoy
                por hoy capaz de tratar sin cirugía y con éxito pequeñas,
                medianas y grandes varices, además de úlceras y malformaciones
                venosas.
              </p>
              <p>
                &copy; 2025 Clínica de Barcelona. Todos los derechos reservados.
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="text-md-end"
            style={{ marginTop: "100px" }}
          >
            <div className="footer-links">
              <a
                href="https://www.clinicasdoctorjuancabrera.com/politicacookies.html"
                className="footer-link"
              >
                Política de cookies
              </a>{" "}
              |{" "}
              <a
                href="http://clinicasdoctorjuancabrera.com/politica-privacidad.html"
                className="footer-link"
              >
                Política de privacidad
              </a>
              <a
                href="https://dataevalua.com/clinicasdoctorjuancabrera-com/"
                target="_blank"
              >
                <img
                  src="public/rgpd_blue.png"
                  alt="Icono 1"
                  className="footer-icon"
                />
              </a>
              <a
                href="https://dataevalua.com/clinicasdoctorjuancabrera-com/"
                target="_blank"
              >
                <img
                  src="public/lssi_blue.png"
                  alt="Icono 2"
                  className="footer-icon"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
