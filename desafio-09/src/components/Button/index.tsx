import React from "react";

export const Button: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button className="bg-navy-blue text-sm font-semibold uppercase text-white py-4 px-8 border rounded-md">
      {label}
    </button>
  );
};
