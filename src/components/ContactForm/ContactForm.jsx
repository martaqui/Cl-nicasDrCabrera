import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./ContactForm.css";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbeqneb");
  const navigate = useNavigate();

  if (state.succeeded) {
    // Redirigir al home cuando el formulario se haya enviado con éxito
    navigate("/");
    return (
      <p>
        ¡Gracias por contactarnos!, nos pondremos en contacto con usted lo
        antes. posible
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
