import React from "react";
import * as S from "./styles";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <S.Button onClick={onClick}>{label}</S.Button>;
};
