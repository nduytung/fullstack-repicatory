import React from "react";
import { LineChartOutlined, HeartOutlined } from "@ant-design/icons";

type RecipeType = {
  classname?: string;
};
const Recipe = ({ classname }: RecipeType) => {
  return (
    <div className={`bg-white cursor-pointer ${classname}`}>
      <div className="bg-gray-300 h-48 hover:bg-rose-300 "></div>
      <div className="p-4">
        <h3 className="font-light text-lg hover:text-rose-400 hover:font-semibold">
          Rustic cheese and pepperoni pizza
        </h3>
        <hr className="my-3" />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LineChartOutlined />

            <span className="ml-2 font-thin">easy</span>
          </div>
          <div className="flex items-center">
            <HeartOutlined />
            <span className="ml-3 font-thin">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
