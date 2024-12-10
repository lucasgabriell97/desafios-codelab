import React from "react";

export const Button: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="bg-navy-blue text-sm md:text-lg font-semibold uppercase text-white py-4 md:py-5 px-8 md:px-10 rounded-md">
      {label}
    </button>
  );
};
