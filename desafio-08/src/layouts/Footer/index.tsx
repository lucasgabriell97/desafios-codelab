import React from "react";
import * as S from "./styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <p>
        Desafio do
        <a href="https://github.com/iuricode" target="_blank">
          IuriCode
        </a>
        . Desenvolvido por
        <a href="https://github.com/LucasGabriell97" target="_blank">
          Lucas Gabriell
        </a>
        .
      </p>
    </S.Footer>
  );
};
