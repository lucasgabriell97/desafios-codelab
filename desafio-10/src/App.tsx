import React from "react";

import { IntroSection } from "./layouts/IntroSection";
import { TimerSection } from "./layouts/TimerSection";
import { DonationSection } from "./layouts/DonationSection";
import { Footer } from "./layouts/Footer";

export const App: React.FC = () => {
  return (
    <>
      <main>
        <IntroSection />
        <TimerSection />
        <DonationSection />
      </main>
      <Footer />
    </>
  );
};
