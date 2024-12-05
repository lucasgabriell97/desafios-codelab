import React from "react";
import * as S from "./styles";

import EnvironmentImage from "../../assets/images/image-2.png";

import { Button } from "../../components/Button";

export const SectionAbout: React.FC = () => {
  return (
    <S.Section className="container">
      <S.EnvironmentImage
        src={EnvironmentImage}
        alt="Imagem ilustrativa do ambiente da pizzaria"
      />
      <S.Title>Sobre a La Pizza</S.Title>
      <S.Description>
        Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência de
        pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de
        pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma
        sedutor de massa fresca assa no forno, criando as pizzas mais deliciosas
        da cidade.
      </S.Description>
      <Button label="Ler mais sobre" />
    </S.Section>
  );
};
