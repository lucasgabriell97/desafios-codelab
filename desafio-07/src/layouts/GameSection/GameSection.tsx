import React from "react";
import * as S from "./styles";

import Image1 from "../../assets/images/1.svg";
import Image2 from "../../assets/images/2.svg";
import Image3 from "../../assets/images/3.svg";
import Image4 from "../../assets/images/4.svg";
import Image5 from "../../assets/images/5.svg";
import Image6 from "../../assets/images/6.svg";
import Image7 from "../../assets/images/7.svg";
import Image8 from "../../assets/images/8.svg";
import Image9 from "../../assets/images/9.svg";

interface GameSectionProps {
  difficulty: "easy" | "intermediate" | "hard";
}

export const GameSection: React.FC<GameSectionProps> = ({ difficulty }) => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];
  const pairs = difficulty === "easy" ? 3 : difficulty === "intermediate" ? 6 : 9;

  const cards = [...images.slice(0, pairs), ...images.slice(0, pairs)].sort(() => Math.random() - 0.5)
  console.log(cards)

  return (
    <S.Game pairs={pairs}>
      {cards.map((card, index) => (
        <S.CardWrapper key={index}>
          <S.CardImage src={card} />
        </S.CardWrapper>
      ))}
    </S.Game>
  );
};
