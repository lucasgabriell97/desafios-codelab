import React from "react";
import * as S from "./styles";

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <S.Button>{label}</S.Button>;
};
