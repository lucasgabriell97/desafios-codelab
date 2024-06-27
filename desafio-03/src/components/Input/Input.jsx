import React from "react";

import "./style.css";

const Input = ({ inputType, inputId, inputName, inputPlaceholder }) => {
  return (
    <input
      className="input"
      type={inputType}
      id={inputId}
      name={inputName}
      placeholder={inputPlaceholder}
      required
    />
  );
};

export default Input;
