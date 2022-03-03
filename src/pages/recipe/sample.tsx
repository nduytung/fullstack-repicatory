import React from "react";
import {
  PrinterOutlined,
  StarOutlined,
  HeartOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import RecipeSection from "../../components/recipe/RecipeSection";
import SectionBandage from "../../components/elements/SectionBandage";
import Comment from "../../components/recipe/Comment";
const Sample = () => {
  return (
    <div>
      <nav className="text-white py-10 text-center bg-gray-400 text-4xl font-semibold">
        <p className="w-2/3 mx-auto">
          Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
        </p>
      </nav>
      <main className="container mx-auto grid grid-cols-12 gap-10 py-8">
        <div className="col-span-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="rounded-full bg-gray-500 w-12 h-12"></div>
              <article className="mx-3">
                <p>Author</p>
                <p>Nicole Kidman</p>
              </article>
              <article>
                <PrinterOutlined style={{ fontSize: 40, color: "gray" }} />
              </article>
              <p></p>
            </div>
            <nav className="flex justify-between items-center">
              <div>
                <p>Rating:</p>
                <div className="flex">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
              <div className="px-2 mx-2 border-x border-gray-200">
                <p>DIFFICULTY</p>
                <p>Immediate</p>
              </div>
              <span>
                <HeartOutlined style={{ fontSize: 50, color: "grey" }} />
              </span>
            </nav>
          </nav>
          <p>
            Prolific cookbook author James McNair has been chief judge of Sutter
            Home Winery's burger cook-off since it began in Napa in 1990.
          </p>
          <div className="bg-gray-200 h-96 w-full"></div>
          <div className="flex justify-center -mb-10">
            <div className="border-gray-400 border bg-white my-5 mx-2 py-2 px-3">
              share
            </div>
            <div className="border-gray-400 border bg-white my-5 mx-2 py-2 px-3">
              share
            </div>
            <div className="border-gray-400 border bg-white my-5 mx-2 py-2 px-3">
              share
            </div>
            <div className="border-gray-400 border bg-white my-5 mx-2 py-2 px-3">
              share
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-3 mt-10">
            <article className="flex items-center col-span-1">
              <SafetyCertificateOutlined />
              <div>
                <p>YIELDS</p>
                <p>6 servings</p>
              </div>
            </article>
            <article className="flex items-center justify-between col-span-2">
              <div className="flex items-center">
                <ClockCircleOutlined
                  style={{ fontSize: 45, color: "gray", marginRight: 6 }}
                />
                <div>
                  <p>PREPARATION</p>
                  <p>30 mins</p>
                </div>
              </div>
              <div className="flex items-center">
                <ClockCircleOutlined
                  style={{ fontSize: 45, color: "gray", marginRight: 6 }}
                />
                <div>
                  <p>PREPARATION</p>
                  <p>30 mins</p>
                </div>
              </div>
              <div className="flex items-center">
                <ClockCircleOutlined
                  style={{ fontSize: 45, color: "gray", marginRight: 6 }}
                />
                <div>
                  <p>PREPARATION</p>
                  <p>30 mins</p>
                </div>
              </div>
            </article>
          </div>
          <div>
            <SectionBandage classname="mt-6"> Ingredients </SectionBandage>
            <RecipeSection
              title="Spicy mayonaise"
              recipeList={["mayonaise", "1 tablespoon of soup"]}
            />
          </div>
          <div>
            <SectionBandage classname="mt-6">Cooking tutorials</SectionBandage>
            <RecipeSection
              title="Spicy mayonaise"
              recipeList={["mayonaise", "1 tablespoon of soup"]}
            />
          </div>
          <div className="grid grid-cols-3 w-3/4 mt-6">
            <article>
              <h5 className="font-semibold text-sm">CATEGORY</h5>
              <p className="text-green-500 font-light text-md">Burgers</p>
            </article>
            <article>
              <h5 className="font-semibold text-sm">CUISINE</h5>
              <p className="text-green-500 font-light text-md">Burgers</p>
            </article>{" "}
            <article>
              <h5 className="font-semibold text-sm">COOKING METHOD</h5>
              <p className="text-green-500 font-light text-md">Burgers</p>
            </article>
          </div>
          <hr className="my-10" />
          <section className="">
            <h3 className="font-thin text-3xl">Comments</h3>
            <Comment name="Duy Tung" date="Thu Mar 03 2022 07:27:36 GMT+0700">
              This is just a testing comment to check if it works properly
            </Comment>
          </section>
        </div>
        <div className="col-span-4">
          <div className="flex h-10">
            <input
              type="text"
              placeholder="Find a recipe..."
              className="text-gray-500 font-thin border-rose-400 border px-3 focus:outline-none"
            />
            <button className="bg-rose-400 h-full w-20">
              <SearchOutlined style={{ color: "white", fontSize: 25 }} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sample;
