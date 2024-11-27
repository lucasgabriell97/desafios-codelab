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
import { GameMessageCard } from "../../components/GameMessageCard/GameMessageCard";
import { Button } from "../../components/Button/Button";

interface GameSectionProps {
  difficulty: string;
  changeDifficulty: () => void;
}

interface Card {
  id: number;
  src: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const GameSection: React.FC<GameSectionProps> = ({
  difficulty,
  changeDifficulty,
}) => {
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

  const getInitialCards = () => {
    const pairs =
      difficulty === "easy" ? 3 : difficulty === "intermediate" ? 6 : 9;
    return [...images.slice(0, pairs), ...images.slice(0, pairs)]
      .sort(() => Math.random() - 0.5)
      .map((src, index) => ({
        id: index,
        src,
        isFlipped: false,
        isMatched: false,
      }));
  };

  const [cards, setCards] = React.useState<Card[]>(getInitialCards());
  const [flippedCards, setFlippedCards] = React.useState<number[]>([]);
  const [gameCompleted, setGameCompleted] = React.useState(false);

  const resetGame = () => {
    setCards(getInitialCards());
    setFlippedCards([]);
    setGameCompleted(false);
  };

  React.useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      setCards((prevCards) => {
        if (prevCards[first].src === prevCards[second].src) {
          const updatedCards = prevCards.map((card, index) =>
            index === first || index === second
              ? { ...card, isMatched: true }
              : card
          );

          if (updatedCards.every((card) => card.isMatched)) {
            setGameCompleted(true);
          }

          return updatedCards;
        }
        return prevCards;
      });

      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.isMatched ? card : { ...card, isFlipped: false }
          )
        );
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  const handleCardClick = (index: number) => {
    if (
      !gameCompleted &&
      flippedCards.length < 2 &&
      !cards[index].isFlipped &&
      !cards[index].isMatched
    ) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  return (
    <S.Game $pairs={cards.length / 2}>
      {cards.map((card, index) => (
        <S.CardWrapper $isFlipped={card.isFlipped} key={card.id} onClick={() => handleCardClick(index)}>
          {card.isFlipped || card.isMatched ? (
            <S.CardImage src={card.src} />
          ) : (
            <S.CardText>Buuh!</S.CardText>
          )}
        </S.CardWrapper>
      ))}

      {gameCompleted && (
        <S.Modal>
          <GameMessageCard
            title="Buuh!"
            message="Parabéns! Você completou este jogo da memória. Que tal
              experimentar uma dificuldade diferente ou jogar novamente na mesma
              dificuldade?"
          >
            <Button onClick={() => resetGame()} label="Jogar Novamente" />
            <Button
              onClick={() => changeDifficulty()}
              label="Mudar Dificuldade"
            />
          </GameMessageCard>
        </S.Modal>
      )}
    </S.Game>
  );
};
