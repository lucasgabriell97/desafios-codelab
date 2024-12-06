import React from "react";
import * as S from "./styles";

export const Button: React.FC<{ label: string }> = ({ label }) => {
  return <S.Button label={label}>{label}</S.Button>;
};
