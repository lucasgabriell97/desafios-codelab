import React from "react";
import * as S from "./styles";
import Logo from "../../assets/images/logo.svg";

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Logo src={Logo} alt="Logo La Pizza" />
    </S.Header>
  );
};
