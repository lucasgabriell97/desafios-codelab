import React from "react";

import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { SectionBestSellers } from "./layouts/SectionBestSellers";
import { SectionAbout } from "./layouts/SectionAbout";
import { Footer } from "./layouts/Footer";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <SectionBestSellers />
        <SectionAbout />
      </Main>
      <Footer />
    </>
  );
};
