import React from "react";

type CardType = {
  children: JSX.Element;
  number: number;
  name: string;
};

const StatisCard = ({ children, number, name }: CardType) => {
  return (
    <div className="bg-white py-6 items-center flex flex-col justify-center text-center">
      <div className="font-bold">{children}</div>
      <div className="mt-5">
        <p className="text-rose-400 font-bold text-4xl">{number}</p>
        <p className="text-gray-400 font-medium text-lg">{name}</p>
      </div>
    </div>
  );
};

export default StatisCard;
