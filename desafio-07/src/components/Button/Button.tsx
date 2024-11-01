import React from "react";
import * as S from "./styles";

interface ButtonProps {
  value: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return <S.Button onClick={onClick}>{value}</S.Button>;
};
