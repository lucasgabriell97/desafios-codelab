import React from "react";

export const Button: React.FC = () => {
  return (
    <button className="bg-brand-color-red hover:bg-opacity-80 text-white font-bold uppercase rounded py-4 w-full md:w-60">
      Fazer uma doação
    </button>
  );
};
