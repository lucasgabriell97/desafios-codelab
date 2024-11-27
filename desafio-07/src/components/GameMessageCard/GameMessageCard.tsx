import React from "react";
import * as S from "./styles";
import SpiderWeb from "../../assets/images/web.svg";

interface GameMessageCardProps {
  title: string;
  message: string;
  children?: React.ReactNode;
}

export const GameMessageCard: React.FC<GameMessageCardProps> = ({
  title,
  message,
  children,
}) => {
  return (
    <S.GameMessageCardContainer>
      <S.SpiderWeb src={SpiderWeb} />
      <S.Title>{title}</S.Title>
      <S.Text>{message}</S.Text>
      {children}
    </S.GameMessageCardContainer>
  );
};
