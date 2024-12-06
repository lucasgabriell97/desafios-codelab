import React from "react";
import * as S from "./styles";

import EnvironmentImage from "../../assets/images/image-2.png";

import { Button } from "../../components/Button";

export const SectionAbout: React.FC = () => {
  return (
    <S.Section>
      <S.SectionContainer>
        <S.EnvironmentImage
          src={EnvironmentImage}
          alt="Imagem ilustrativa do ambiente da pizzaria"
        />
        <S.AboutWrapper>
          <S.Title>
            Sobre a La P<S.ColoredLetter color="#ffbc47">i</S.ColoredLetter>
            <S.ColoredLetter color="#fe3535">z</S.ColoredLetter>
            <S.ColoredLetter color="#5fbb28">z</S.ColoredLetter>a
          </S.Title>
          <S.Description>
            Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma
            experiência de pizzaria autêntica. Em nosso pequeno oásis italiano,
            cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa
            enquanto o aroma sedutor de massa fresca assa no forno, criando as
            pizzas mais deliciosas da cidade.
          </S.Description>
          <Button label="Ler mais sobre" />
        </S.AboutWrapper>
      </S.SectionContainer>
    </S.Section>
  );
};
