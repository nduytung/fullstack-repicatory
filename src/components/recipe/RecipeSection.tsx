import React from "react";

type RecipeType = {
  title: string;
  recipeList: string[];
  type?: "ingre" | "step";
};

const RecipeSection = ({ title, recipeList, type = "ingre" }: RecipeType) => {
  return (
    <div>
      <h3 className="text-md uppercase font-semibold mt-5 mb-3 ">{title} </h3>
      {recipeList.map((item, index: number) => {
        return (
          <div className="flex items-center my-1">
            {type === "ingre" ? (
              <input
                type="checkbox"
                className="mr-2 w-5 h-5 border border-gray-100 "
              />
            ) : (
              <p className="text-3xl font-semibold mr-2 text-gray-500">
                {index}
              </p>
            )}
            <p className="font-light"> {item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeSection;
