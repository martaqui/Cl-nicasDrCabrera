import React, { useState } from "react";
import { Row, Col, Modal, Container } from "react-bootstrap";
import "./HomePage.css";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
const Homepage = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleShow = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container className="homepage-container">
      <h1>CLÍNICA DE BARCELONA</h1>
      <hr />

      {/* Sección 1 */}
      <Row className="mb-4">
        <Col>
          <p className="description">
            Centre mèdic modern de 280 m², ja en funcionament, lloga 2 consultes
            grans i espaioses per a metges o odontòlegs, tot exterior. Es busca
            preferiblement per a ús exclusiu, amb accés 24/7. <hr />
            Centro médico moderno de 280 m, ya en funcionamiento, alquila 2
            consultas grandes y espaciosas para médicos u odontólogos, todo
            exterior. Se busca preferiblemente para uso exclusivo, con acceso
            24/7.
          </p>
        </Col>
      </Row>

      {/* Fila con dos imágenes */}
      <Row className="mb-4">
        <Col md={4}>
          <img
            src="/imagees/01.jpg"
            alt="Imagen 1"
            className="image"
            onClick={() => handleShow("/imagees/01.jpg")}
          />
        </Col>
        <Col md={4}>
          <img
            src="/imagees/02.jpg"
            alt="Imagen 2"
            className="image"
            onClick={() => handleShow("/imagees/02.jpg")}
          />
        </Col>
        <Col md={4}>
          <img
            src="/imagees/02.jpg"
            alt="Imagen 2"
            className="image"
            onClick={() => handleShow("/imagees/02.jpg")}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <p className="description">
            {" "}
            Situat a peu de carrer al Passeig de la Bonanova, està en perfecte
            estat i completament equipat, sense barreres d'accés. <hr /> Situado
            a pie de calle en Passeig de la Bonanova, está en perfecto estado y
            completamente equipado, sin barreras de acceso.
          </p>
        </Col>
      </Row>

      {/* Fila con dos imágenes */}
      <Row className="mb-4">
        <Col md={3}>
          <img
            src="/imagees/12.jpg"
            alt="Imagen 1"
            className="image"
            onClick={() => handleShow("/imagees/01.jpg")}
          />
        </Col>
        <Col md={3}>
          <img
            src="/imagees/13.jpg"
            alt="Imagen 2"
            className="image"
            onClick={() => handleShow("/imagees/02.jpg")}
          />
        </Col>
        <Col md={3}>
          <img
            src="/imagees/14.jpg"
            alt="Imagen 2"
            className="image"
            onClick={() => handleShow("/imagees/02.jpg")}
          />
        </Col>
        <Col md={3}>
          <img
            src="/imagees/Imagen 060.jpg"
            alt="Imagen 2"
            className="image"
            onClick={() => handleShow("/imagees/02.jpg")}
          />
        </Col>
      </Row>
      {/* Fila de solo texto */}
      <Row className="mb-4 text-center">
        <Col>
          <p className="description">
            Oferim mobiliari, instal·lacions i serveis comuns. Disposem d'una
            àmplia recepció, 2 sales d'espera, 4 lavabos (1 adaptat), 2
            despatxos per a administració, magatzem, sala de reunions i vestidor
            per al personal. <hr />
            Ofrecemos mobiliario, instalaciones y servicios comunes. Disponemos
            de amplia recepción, 2 salas de espera, 4 aseos (1 adaptado), 2
            despachos para administración, almacén, sala de reuniones y
            vestuario para personal.
          </p>
        </Col>
      </Row>

      {/* Fila con dos imágenes centradas y más grandes */}
      <Row className="mb-4 justify-content-center">
        <Col md={5} className="text-center">
          <img
            src="/imagees/Imagen 061.jpg"
            alt="Imagen 1"
            className="image"
            style={{ maxWidth: "100%", borderRadius: "12px" }}
            onClick={() => handleShow("/imagees/01.jpg")}
          />
        </Col>
        <Col md={5} className="text-center">
          <img
            src="/imagees/DSC_0143.JPG"
            alt="Imagen 2"
            className="image"
            style={{ maxWidth: "100%", borderRadius: "12px" }}
            onClick={() => handleShow("/imagees/02.jpg")}
          />
        </Col>
      </Row>

      {/* Sección de Contacto */}
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <div className="p-3 border bg-light">
            <h5>Contacto</h5>
            <p>Inés Bach Tel: 653 00 43 34</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="p-3 border bg-light">
            <p>
              Busquem odontòlegs o una especialitat diferent de la nostra.
              <hr />
              Buscamos odontólogos o una especialidad diferente a la nuestra.
            </p>
          </div>
        </Col>
      </Row>

      {/* Google Maps */}
      <Row className="mb-4">
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5985.417218265525!2d2.12306761115961!3d41.40213409496138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4983ffe0cf823%3A0xbde504508f68331!2sCl%C3%ADnicas%20Dr.%20Juan%20Cabrera!5e0!3m2!1sen!2ses!4v1738247886614!5m2!1sen!2ses"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="text-center">
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            style={{ width: "100%", objectFit: "contain", borderRadius: "8px" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Homepage;
