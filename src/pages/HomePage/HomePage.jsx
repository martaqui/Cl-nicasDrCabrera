import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
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
    <div className="homepage-container">
      <h1>CLÍNICA DE BARCELONA</h1>
      <hr />
      <div className="grid-container">
        <Row className="mb-4">
          <Col xs={12} md={6}>
            <img
              src="/imagees/01.jpg"
              alt="Imagen 1"
              className="image"
              style={{ width: "100%", height: "300", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/01.jpg")}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="description">
              Centre mèdic modern de 280 m², ja en funcionament, lloga 2
              consultes grans i espaioses per a metges o odontòlegs, tot
              exterior. Es busca preferiblement per a ús exclusiu, amb accés
              24/7. <hr />
              Centro médico moderno de 280 m, ya en funcionamiento, alquila 2
              consultas grandes y espaciosas para médicos u odontólogos, todo
              exterior. Se busca preferiblemente para uso exclusivo, con acceso
              24/7.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <p className="description">
              {" "}
              Consultoris independents per poder deixar els equips propis. Entre
              les dues consultes hi ha una sala petita, també exterior, per a
              esterilització i emmagatzematge. <hr /> Consultorios
              independientes para poder dejar los equipos propios.Entre las dos
              consultas hay una sala pequeña también exterior para
              esterilización y almacenaje.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src="/imagees/02.jpg"
              alt="Imagen 2"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/02.jpg")}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <img
              src="/imagees/05.jpg"
              alt="Imagen 3"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/05.jpg")}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="description">
              {" "}
              Situat a peu de carrer al Passeig de la Bonanova, està en perfecte
              estat i completament equipat, sense barreres d'accés. <hr />{" "}
              Situado a pie de calle en Passeig de la Bonanova, está en perfecto
              estado y completamente equipado, sin barreras de acceso.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <p className="description">
              {" "}
              Oferim mobiliari, instal·lacions i serveis comuns. Disposem d'una
              àmplia recepció, 2 sales d'espera, 4 lavabos (1 adaptat), 2
              despatxos per a administració, magatzem, sala de reunions i
              vestidor per al personal. <hr /> Ofrecemos mobiliario,
              instalaciones y servicios comunes. Disponemos de amplia recepción,
              2 salas de espera, 4 aseos (1 adaptado), 2 despachos para
              administración, almacén, sala de reuniones y vestuario para
              personal.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src="/imagees/12.jpg"
              alt="Imagen 4"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/12.jpg")}
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <img
              src="/imagees/13.jpg"
              alt="Imagen 5"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/13.jpg")}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="description">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo molestie, rutrum mauris vitae, euismod neque. Phasellus
              mattis, ex eget luctus ultrices, est dui eleifend nulla, eget
              pharetra justo turpis id nibh. Aenean et malesuada magna, sed
              sagittis dolor. Curabitur imperdiet eros quis mi aliquet ultrices.
              Donec commodo aliquet vestibulum. Vivamus pharetra nulla metus, ac
              facilisis erat fermentum feugiat. Vivamus nunc quam, dignissim
              vitae nisi et, tristique volutpat ligula. Integer a ex efficitur
              elit eleifend posuere. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed vel leo molestie, rutrum mauris vitae,
              euismod neque. Phasellus mattis, ex eget luctus ultrices, est dui
              eleifend nulla, eget pharetra justo turpis id nibh. Aenean et
              malesuada magna, sed sagittis dolor. Curabitur imperdiet eros quis
              mi aliquet ultrices. Donec commodo aliquet vestibulum. Vivamus
              pharetra nulla metus, ac facilisis erat fermentum feugiat. Vivamus
              nunc quam, dignissim vitae nisi et, tristique volutpat ligula.
              Integer a ex efficitur elit eleifend posuere.
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <p className="description">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo molestie, rutrum mauris vitae, euismod neque. Phasellus
              mattis, ex eget luctus ultrices, est dui eleifend nulla, eget
              pharetra justo turpis id nibh. Aenean et malesuada magna, sed
              sagittis dolor. Curabitur imperdiet eros quis mi aliquet ultrices.
              Donec commodo aliquet vestibulum. Vivamus pharetra nulla metus, ac
              facilisis erat fermentum feugiat. Vivamus nunc quam, dignissim
              vitae nisi et, tristique volutpat ligula. Integer a ex efficitur
              elit eleifend posuere. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed vel leo molestie, rutrum mauris vitae,
              euismod neque. Phasellus mattis, ex eget luctus ultrices, est dui
              eleifend nulla, eget pharetra justo turpis id nibh. Aenean et
              malesuada magna, sed sagittis dolor. Curabitur imperdiet eros quis
              mi aliquet ultrices. Donec commodo aliquet vestibulum. Vivamus
              pharetra nulla metus, ac facilisis erat fermentum feugiat. Vivamus
              nunc quam, dignissim vitae nisi et, tristique volutpat ligula.
              Integer a ex efficitur elit eleifend posuere.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src="/imagees/14.jpg"
              alt="Imagen 6"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/14.jpg")}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} md={6}>
            <img
              src="/imagees/Dr.Juan Cabrera 61.jpg"
              alt="Imagen 1"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/Dr.Juan Cabrera 61.jpg")}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo molestie, rutrum mauris vitae, euismod neque. Phasellus
              mattis, ex eget luctus ultrices, est dui eleifend nulla, eget
              pharetra justo turpis id nibh. Aenean et malesuada magna, sed
              sagittis dolor. Curabitur imperdiet eros quis mi aliquet ultrices.
              Donec commodo aliquet vestibulum. Vivamus pharetra nulla metus, ac
              facilisis erat fermentum feugiat. Vivamus nunc quam, dignissim
              vitae nisi et, tristique volutpat ligula. Integer a ex efficitur
              elit eleifend posuere. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed vel leo molestie, rutrum mauris vitae,
              euismod neque. Phasellus mattis, ex eget luctus ultrices, est dui
              eleifend nulla, eget pharetra justo turpis id nibh. Aenean et
              malesuada magna, sed sagittis dolor. Curabitur imperdiet eros quis
              mi aliquet ultrices. Donec commodo aliquet vestibulum. Vivamus
              pharetra nulla metus, ac facilisis erat fermentum feugiat. Vivamus
              nunc quam, dignissim vitae nisi et, tristique volutpat ligula.
              Integer a ex efficitur elit eleifend posuere.
            </p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} md={6}>
            <p className="description">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo molestie, rutrum mauris vitae, euismod neque. Phasellus
              mattis, ex eget luctus ultrices, est dui eleifend nulla, eget
              pharetra justo turpis id nibh. Aenean et malesuada magna, sed
              sagittis dolor. Curabitur imperdiet eros quis mi aliquet ultrices.
              Donec commodo aliquet vestibulum. Vivamus pharetra nulla metus, ac
              facilisis erat fermentum feugiat. Vivamus nunc quam, dignissim
              vitae nisi et, tristique volutpat ligula. Integer a ex efficitur
              elit eleifend posuere. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed vel leo molestie, rutrum mauris vitae,
              euismod neque. Phasellus mattis, ex eget luctus ultrices, est dui
              eleifend nulla, eget pharetra justo turpis id nibh. Aenean et
              malesuada magna, sed sagittis dolor. Curabitur imperdiet eros quis
              mi aliquet ultrices. Donec commodo aliquet vestibulum. Vivamus
              pharetra nulla metus, ac facilisis erat fermentum feugiat. Vivamus
              nunc quam, dignissim vitae nisi et, tristique volutpat ligula.
              Integer a ex efficitur elit eleifend posuere.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <img
              src="/imagees/DSC_0143.JPG"
              alt="Imagen 6"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/DSC_0143.JPG")}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} md={6}>
            <img
              src="/imagees/Imagen 048.jpg"
              alt="Imagen 1"
              className="image"
              style={{ width: "100%", borderRadius: "8px" }}
              onClick={() => handleShow("/imagees/Imagen 048.jpg")}
            />
          </Col>
          <Col xs={12} md={6}>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              leo molestie, rutrum mauris vitae, euismod neque. Phasellus
              mattis, ex eget luctus ultrices, est dui eleifend nulla, eget
              pharetra justo turpis id nibh. Aenean et malesuada magna, sed
              sagittis dolor. Curabitur imperdiet eros quis mi aliquet ultrices.
              Donec commodo aliquet vestibulum. Vivamus pharetra nulla metus, ac
              facilisis erat fermentum feugiat. Vivamus nunc quam, dignissim
              vitae nisi et, tristique volutpat ligula. Integer a ex efficitur
              elit eleifend posuere. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed vel leo molestie, rutrum mauris vitae,
              euismod neque. Phasellus mattis, ex eget luctus ultrices, est dui
              eleifend nulla, eget pharetra justo turpis id nibh. Aenean et
              malesuada magna, sed sagittis dolor. Curabitur imperdiet eros quis
              mi aliquet ultrices. Donec commodo aliquet vestibulum. Vivamus
              pharetra nulla metus, ac facilisis erat fermentum feugiat. Vivamus
              nunc quam, dignissim vitae nisi et, tristique volutpat ligula.
              Integer a ex efficitur elit eleifend posuere.
            </p>
          </Col>
        </Row>
        <hr />

        <Row className="mb-4">
          <Col xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50787.594597076786!2d2.104898112452804!3d41.39044142514356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4983ffe0cf823%3A0xbde504508f68331!2sCl%C3%ADnicas%20Dr.%20Juan%20Cabrera!5e0!3m2!1sen!2ses!4v1738156341258!5m2!1sen!2ses"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col xs={12} md={6}>
            <ContactForm />
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Body className="text-center">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              style={{
                width: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Homepage;
