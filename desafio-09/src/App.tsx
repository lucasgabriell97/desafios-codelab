import React from "react";

import { HelpSection } from "./layouts/HelpSection";
import { StoriesSection } from "./layouts/StoriesSection";
import { SalesSection } from "./layouts/SalesSection";
import { Footer } from "./layouts/Footer";

export const App: React.FC = () => {
  return (
    <>
      <main>
        <HelpSection />
        <StoriesSection />
        <SalesSection />
      </main>
      <Footer />
    </>
  );
};
