import React from "react";
import * as S from "./styles";

import HeartIcon from "../../assets/images/heart-icon.svg";

export const FavoriteHeartIcon: React.FC = () => {
  return (
    <S.HeartIconWrapper>
      <S.HeartIcon src={HeartIcon} alt="Ícone de coração" />
    </S.HeartIconWrapper>
  );
};
