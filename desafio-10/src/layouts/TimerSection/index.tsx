import React from "react";

import IllustrativeChristmasImage from "../../assets/images/illustration-1.svg";

export const TimerSection: React.FC = () => {
  return (
    <section className="border-b-2 border-b-brand-color-pink">
      <div className="py-20 px-6">
        <h2 className="title">Tempo limitado</h2>
        <p className="text-lg font-normal text-center text-dark mb-6">
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal.
        </p>
        <h3 className="text-3xl font-semibold text-center text-brand-color-red mb-6">
          10d -24h - 01m - 52s
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
