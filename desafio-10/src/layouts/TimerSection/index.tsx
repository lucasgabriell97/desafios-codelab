import React from "react";

import IllustrativeChristmasImage from "../../assets/images/illustration-1.svg";

export const TimerSection: React.FC = () => {
  return (
    <section className="border-b-2 border-b-brand-color-pink py-20 px-6">
      <div className="flex flex-col items-center">
        <h2 className="title">Tempo limitado</h2>
        <p className="text-lg md:text-xl font-normal text-center text-dark mb-6 md:mb-10 max-w-md md:max-w-lg">
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal.
        </p>
        <h3 className="text-3xl md:text-6xl font-semibold text-center text-brand-color-red mb-6 md:mb-10">
          10d - 24h - 01m - 52s
        </h3>
        <div className="flex justify-center">
          <img
            src={IllustrativeChristmasImage}
            alt="Imagem ilustrativa de natal"
          />
        </div>
      </div>
    </section>
  );
};
