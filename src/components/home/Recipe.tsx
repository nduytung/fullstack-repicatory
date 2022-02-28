import React from "react";
import { LineChartOutlined, HeartOutlined } from "@ant-design/icons";
const Recipe = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-300 w-full h-32"></div>
      <div className="p-5">
        <h3 className="text-gray-500 text-lg">
          Rustic cheese and pepperoni pizza
        </h3>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LineChartOutlined />
            <span className="ml-3">easy</span>
          </div>
          <div className="flex items-center">
            <HeartOutlined />
            <span className="ml-3">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
