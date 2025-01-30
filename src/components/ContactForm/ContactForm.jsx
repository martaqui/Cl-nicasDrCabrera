import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbeqneb");
  const navigate = useNavigate();
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  // Función para manejar la respuesta del CAPTCHA
  const handleCaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  if (state.succeeded) {
    navigate("/"); // Redirige al home cuando el formulario se ha enviado con éxito
    return (
      <p>
        ¡Gracias por contactarnos!, nos pondremos en contacto con usted lo antes
        posible.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!recaptchaValue) {
          alert("Por favor, completa el CAPTCHA.");
          return;
        }
        handleSubmit(e); // Si el captcha está validado, se envía el formulario.
      }}
    >
      <div>
        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          required
        />
        <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
      </div>

      <div>
        <input
          id="apellidos"
          type="text"
          name="apellidos"
          placeholder="Ingresa tus apellidos"
          required
        />
        <ValidationError
          prefix="Apellidos"
          field="apellidos"
          errors={state.errors}
        />
      </div>

      <div>
        <input
          id="telefono"
          type="tel"
          name="telefono"
          placeholder="Ingresa tu número de teléfono"
          required
        />
        <ValidationError
          prefix="Teléfono"
          field="telefono"
          errors={state.errors}
        />
      </div>

      <div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="ejemplo@dominio.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Aquí agregamos el CAPTCHA */}
      <div>
        <ReCAPTCHA
          sitekey="6Lf0zscqAAAAAN2hNO0W8S9zhUg_VFXM5hTN9IMX" // Tu clave pública
          onChange={handleCaptchaChange}
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
