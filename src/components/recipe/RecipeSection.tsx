import React from "react";

type RecipeType = {
  recipeList: string[] | any;
  type?: "ingre" | "step";
};

const RecipeSection = ({ recipeList, type = "ingre" }: RecipeType) => {
  return (
    <div className="mt-4">
      {recipeList &&
        recipeList?.map((item: any, index: number) => {
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
