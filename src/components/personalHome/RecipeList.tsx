import React from "react";
import Recipe from "../home/Recipe";

const RecipeList = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Recipe classname="border border-gray-200"></Recipe>
      <Recipe classname="border border-gray-200"></Recipe>
      <Recipe classname="border border-gray-200"></Recipe>
      <Recipe classname="border border-gray-200"></Recipe>
      <Recipe classname="border border-gray-200"></Recipe>
    </div>
  );
};

export default RecipeList;
