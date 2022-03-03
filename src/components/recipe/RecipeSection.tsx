import React from "react";

type RecipeType = {
  title: string;
  recipeList: string[];
};

const RecipeSection = ({ title, recipeList }: RecipeType) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-4">{title} </h3>
      {recipeList.map((item, index: number) => {
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-3 w-4 h-4 border border-gray-100"
            />
            <p> {item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeSection;
