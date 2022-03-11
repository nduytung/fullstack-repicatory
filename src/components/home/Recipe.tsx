import React from "react";
import { LineChartOutlined, HeartOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

type RecipeType = {
  classname?: string;
  id: number;
  title: string;
  image: string;
};

const Recipe = ({ classname, id, title, image }: RecipeType) => {
  return (
    <Link href={`/recipe/${id}`}>
      <div className={`bg-white cursor-pointer ${classname}`}>
        <div className="h-48 hover:bg-rose-300 ">
          <Image src={image} alt={title} width={300} height={210}></Image>
        </div>
        <div className="p-4">
          <div className="h-22">
            <h3 className="font-light text-lg hover:text-rose-400 hover:font-semibold">
              {title}
            </h3>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <LineChartOutlined />

              <span className="ml-2 font-thin">ID #{id}</span>
            </div>
            <div className="flex items-center">
              <HeartOutlined />
              <span className="ml-3 font-thin">0</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
