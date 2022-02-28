import React from "react";

type IconRecipeType = {
  color: string;
  children: JSX.Element;
  title: string;
};

const IconRecipe = ({ color, children, title }: IconRecipeType) => {
  return (
    <div
      className={`${color} flex flex-col items-center py-4 h-24 justify-between`}
    >
      {children}
      <p className="text-white uppercase text-xs text-center">{title}</p>
    </div>
  );
};

export default IconRecipe;
