import React from "react";

export const MediaIcon: React.FC<{ icon: string }> = ({ icon }) => {
  return (
    <div className="bg-icon-color w-10 rounded-full">
      <img src={icon} alt="Ícone de mídias sociais" />
    </div>
  );
};
