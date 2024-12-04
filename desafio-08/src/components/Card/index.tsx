import React from "react";
import * as S from "./styles";

import { Button } from "../Button";
import { FavoriteHeartIcon } from "../FavoriteHeartIcon";

interface CardProps {
  pizzaImage: string;
  title: string;
  description: string;
  price: string;
}

export const Card: React.FC<CardProps> = ({ pizzaImage, title, description, price }) => {
  return (
    <S.CardContainer>
      <S.PizzaImage src={pizzaImage} alt="Imagem da Pizza" />
      <FavoriteHeartIcon />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Price>R$ {price}</S.Price>
      <Button label="Comprar agora" />
    </S.CardContainer>
  );
};
