import React from "react";
import Input from "../Input/Input";

import "./style.css";

const Form = () => {
  return (
    <form className="contact-form">
      <label htmlFor="name" hidden>
        Nome
      </label>
      <Input inputType="text" inputId="name" inputName="name" inputPlaceholder="Nome" />
      <label htmlFor="email" hidden>
        Email
      </label>
      <Input inputType="email" inputId="email" inputName="email" inputPlaceholder="Email" />
      <label htmlFor="subject" hidden>
        Assunto
      </label>
      <textarea
        name="subject"
        id="subject"
        placeholder="Assunto da mensagem"
      ></textarea>
      <button className="button">Entrar em contato</button>
    </form>
  );
};

export default Form;
