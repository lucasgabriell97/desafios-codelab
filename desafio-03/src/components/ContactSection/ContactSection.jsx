import React from "react";
import Form from "../Form/Form";

import "./style.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Entre em contato</h2>
        <Form />
      </div>
    </section>
  );
};

export default ContactSection;
