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
