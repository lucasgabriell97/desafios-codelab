import React from "react";

import IllustrativeChristmasImage from "../../assets/images/illustration-1.svg";

export const TimerSection: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const christmasDate = new Date(currentYear, 11, 25);

      if (now > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
      }

      const difference = christmasDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeRemaining, 1000);

    calculateTimeRemaining();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b-2 border-b-brand-color-pink py-20 px-6">
      <div className="flex flex-col items-center">
        <h2 className="title">Tempo limitado</h2>
        <p className="text-lg md:text-xl font-normal text-center text-dark mb-6 md:mb-10 max-w-md md:max-w-lg">
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal.
        </p>
        <h3 className="text-3xl md:text-6xl font-semibold text-center text-brand-color-red mb-6 md:mb-10">
          {`${timeRemaining.days}d - ${timeRemaining.hours}h - ${timeRemaining.minutes}m - ${timeRemaining.seconds}s`}
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
