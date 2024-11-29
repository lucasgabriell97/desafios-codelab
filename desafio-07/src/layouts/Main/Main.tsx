import React from "react";
import * as S from "./styles";

import { GameDifficultiesSection } from "../GameDifficultiesSection/GameDifficultiesSection";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <GameDifficultiesSection />
    </S.Main>
  );
};
