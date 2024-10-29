import * as S from "./styles";
import SpiderWeb from "../../assets/images/web.svg";
import { Button } from "../../components/Button/Button";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <S.GameDifficulties>
        <S.Title>Escolha a dificuldade</S.Title>
        <S.SpiderWeb src={SpiderWeb} />
        <Button value="Fácil" />
        <Button value="Médio" />
        <Button value="Difícil" />
      </S.GameDifficulties>
    </S.Main>
  );
};
