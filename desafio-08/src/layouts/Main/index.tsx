import React from "react";
import * as S from "./styles";

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return <S.Main className="container">{children}</S.Main>;
};
