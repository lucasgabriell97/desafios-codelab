import React from "react";
import * as S from "./styles";
import SpiderWeb from "../../assets/images/web.svg";
import { Button } from "../../components/Button/Button";
import { GameSection } from "../GameSection/GameSection";

export const GameDifficultiesSection: React.FC = () => {
  const [difficulty, setDifficulty] = React.useState<
    "easy" | "intermediate" | "hard" | null
  >(null);

  const handleDifficultySelect = (level: "easy" | "intermediate" | "hard") => {
    setDifficulty(level);
  };

  return (
    <>
      {!difficulty ? (
        <S.GameDifficulties>
          <S.Title>Escolha a dificuldade</S.Title>
          <S.SpiderWeb src={SpiderWeb} />
          <Button
            value="Fácil"
            onClick={() => handleDifficultySelect("easy")}
          />
          <Button
            value="Intermediário"
            onClick={() => handleDifficultySelect("intermediate")}
          />
          <Button
            value="Difícil"
            onClick={() => handleDifficultySelect("hard")}
          />
        </S.GameDifficulties>
      ) : (
        <GameSection difficulty={difficulty} />
      )}
    </>
  );
};
