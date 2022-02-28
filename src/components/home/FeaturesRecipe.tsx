import React from "react";
import PrimaryButton from "../elements/PrimaryButton";

const FeaturesRecipe = () => {
  return (
    <div className="bg-white">
      <div className="w-full bg-gray-300 h-72"></div>
      <article className="p-6">
        <h3 className="text-rose-400 font-semibold text-lg">
          Spaghetti carbonara with rustic bread
        </h3>
        <p className="text-ellipsis font-thin my-6 text-md">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab…
        </p>
        <div className="flex justify-between items-center">
          <PrimaryButton classname="px-10 mx-0" callback={() => {}}>
            see the full recipe
          </PrimaryButton>
          <a
            href="#"
            className="text-center flex-1"
            style={{ color: "#dbbc94" }}
          >
            See past featured recipe
          </a>
        </div>
      </article>
    </div>
  );
};

export default FeaturesRecipe;
