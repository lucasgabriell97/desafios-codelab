import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 md:px-8">
      <p className="text-center text-black text-xs md:text-sm lg:text-base">
        Desafio do{" "}
        <a
          className="text-navy-blue underline hover:no-underline"
          href="https://github.com/iuricode"
          target="_blank"
        >
          IuriCode
        </a>
        . Desenvolvido por{" "}
        <a
          className="text-navy-blue underline hover:no-underline"
          href="https://github.com/LucasGabriell97"
          target="_blank"
        >
          Lucas Gabriell
        </a>
        .
      </p>
    </footer>
  );
};
