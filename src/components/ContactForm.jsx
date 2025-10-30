import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-section">
      <form className="contact-form">
        <label>NOMBRES</label>
        <input type="text" placeholder="Tu nombre" />

        <label>CORREO</label>
        <input type="email" placeholder="correo@ejemplo.com" />

        <label>MENSAJE</label>
        <textarea rows="4" placeholder="Escribe tu mensaje..."></textarea>

        <button type="submit">ENVIAR</button>
      </form>
    </section>
  );
}

export default ContactForm;
