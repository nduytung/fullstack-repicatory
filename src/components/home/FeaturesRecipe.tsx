import React from "react";
import PrimaryButton from "../elements/PrimaryButton";
import SectionBandage from "../elements/SectionBandage";

const FeaturesRecipe = () => {
  return (
    <div className="bg-white">
      <div className="w-full bg-gray-300 h-96 p-5">
        <SectionBandage> featured recipe</SectionBandage>
      </div>
      <article className="p-6">
        <h3 className="text-gray-700 font-semibold text-lg">
          Spaghetti carbonara with rustic bread
        </h3>
        <p className="text-ellipsis font-light mb-5 mt-2 text-md">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab…
        </p>
        <div className="flex justify-between items-center">
          <PrimaryButton classname="px-10 mx-0" callback={() => {}}>
            see the full recipe
          </PrimaryButton>
          <a href="#" className="text-center flex-1 text-amber-600">
            See past featured recipe
          </a>
        </div>
      </article>
    </div>
  );
};

export default FeaturesRecipe;
