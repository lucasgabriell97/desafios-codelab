import React from "react";

import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { SectionBestSellers } from "./layouts/SectionBestSellers";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <SectionBestSellers />
      </Main>
    </>
  );
};
