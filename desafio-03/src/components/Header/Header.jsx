import React from "react";

import "./style.css";

import headerImg from "../../assets/images/illustra.png";


const Header = () => {
  return (
    <header>
      <div className="header-content container">
        <div className="header-image">
          <img src={headerImg} alt="Imagem ilustrativa de uma pessoa comemorando" />
        </div>
        <div className="header-description">
          <h1>Encontre os <span>melhores artigos</span> de programação em um só lugar</h1>
          <p>Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.</p>
          <a href="#article-section" className="button">Buscar artigos</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
