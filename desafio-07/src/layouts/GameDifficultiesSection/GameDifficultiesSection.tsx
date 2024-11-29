import React from "react";
import { Button } from "../../components/Button/Button";
import { GameSection } from "../GameSection/GameSection";
import { GameMessageCard } from "../../components/GameMessageCard/GameMessageCard";

export const GameDifficultiesSection: React.FC = () => {
  const [difficulty, setDifficulty] = React.useState<string | null>(null);

  const handleDifficultySelect = (level: string) => {
    setDifficulty(level);
  };

  const changeDifficulty = () => {
    setDifficulty(null);
  };

  return (
    <>
      {!difficulty ? (
        <GameMessageCard
          title="Buuh!"
          message="Selecione o nível de desafio abaixo e comece sua aventura no jogo da memória!"
        >
          <Button
            onClick={() => handleDifficultySelect("easy")}
            label="Fácil"
          />
          <Button
            onClick={() => handleDifficultySelect("intermediate")}
            label="Intermediário"
          />
          <Button
            onClick={() => handleDifficultySelect("hard")}
            label="Difícil"
          />
        </GameMessageCard>
      ) : (
        <GameSection difficulty={difficulty} changeDifficulty={changeDifficulty} />
      )}
    </>
  );
};
