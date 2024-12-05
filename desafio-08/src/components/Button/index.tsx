import React from "react";
import * as S from "./styles";

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <S.Button label={label}>{label}</S.Button>;
};
