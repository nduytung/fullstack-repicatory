import React from "react";
import {
  PrinterOutlined,
  StarOutlined,
  HeartOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  SearchOutlined,
  FacebookFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import RecipeSection from "../../components/recipe/RecipeSection";
import SectionBandage from "../../components/elements/SectionBandage";
import Comment from "../../components/recipe/Comment";
import PrimaryButton from "../../components/elements/PrimaryButton";
const Sample = () => {
  return (
    <div>
      <nav className="text-white py-16 mx-auto text-center main-banner text-3xl lg:text-4xl font-semibold">
        <p className=" max-w-screen-xl w-2/3 mx-auto">
          Andouille and Beef Burgers with Spicy Mayo and Caramelized Onions
        </p>
      </nav>
      <main className="px-5  max-w-screen-xl container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 py-8">
        <div className="md:col-span-8">
          <nav className="md:flex justify-between items-start">
            <div className="flex items-center justify-between md:justify-center mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-500 lg:w-12 lg:h-12 w-10 h-10"></div>
                <article className="mx-5">
                  <p className="text-sm font-semibold">AUTHOR</p>
                  <p className="font-light text-rose-400">Nicole Kidman</p>
                </article>
              </div>
              <article className="">
                <span className="text-4xl opacity-50">
                  <PrinterOutlined />
                </span>
              </article>
            </div>
            <nav className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm mb-1">RATING:</p>
                <div className="grid grid-cols-5 gap-2 text-yellow-600">
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                </div>
              </div>
              <div className="px-3 mx-3 ">
                <p className="font-semibold text-sm">DIFFICULTY</p>
                <p className="font-thin">Immediate</p>
              </div>
              <div className="text-rose-400 text-5xl -mt-5">
                <HeartOutlined />
              </div>
            </nav>
          </nav>
          <p className="text-lg lg:text-xl xl:text-2xl my-5 text-gray-500">
            Prolific cookbook author James McNair has been chief judge of Sutter
            Home Winery's burger cook-off since it began in Napa in 1990.
          </p>
          <div className="bg-gray-200 h-96 w-full"></div>
          <div className="flex justify-end -mb-10">
            <div className="bg-blue-800 text-white my-5 mx-2 py-2 px-3 flex items-start">
              <span className="-mt-1 mr-2">
                <FacebookFilled />
              </span>
              <span>Facebook</span>
            </div>
            <div className="bg-blue-400 text-white my-5 mx-2 py-2 px-3 flex items-start">
              <span className="-mt-1 mr-2">
                <TwitterSquareFilled />
              </span>
              <span>Twitter</span>
            </div>
          </div>
          <hr />
          <div className="grid md:grid-cols-3 mt-10">
            <article className="col-span-1">
              <p className="text-md font-semibold">YIELDS</p>
              <p className="font-light text-lg text-rose-500">6 servings</p>
            </article>
            <article className="flex items-center justify-between md:col-span-2 mt-6 md:mt-0">
              <div className="flex items-center">
                <span className="text-4xl text-gray-600 -mt-3 mr-3 lg:block hidden">
                  <ClockCircleOutlined />
                </span>
                <div>
                  <p className="text-sm font-semibold">PREP TIME</p>
                  <p className="font-light">30 mins</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl text-gray-600 -mt-3 mr-3 lg:block hidden">
                  <ClockCircleOutlined />
                </span>
                <div>
                  <p className="text-sm font-semibold">COOK TIME</p>
                  <p className="font-light">30 mins</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl text-gray-600 -mt-3 mr-3 lg:block hidden">
                  <ClockCircleOutlined />
                </span>
                <div>
                  <p className="text-sm font-semibold">TOTAL</p>
                  <p className="font-light">30 mins</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="hidden md:block md:col-span-4">
          <div className="flex h-10 w-full">
            <input
              type="text"
              placeholder="Find a recipe..."
              className="text-gray-500 font-thin border-rose-400 border px-3 focus:outline-none w-full"
            />
            <button className="bg-rose-400 h-full text-white font-xl px-3 lg:px-4">
              <SearchOutlined />
            </button>
          </div>
        </div>
        <div className="md:col-span-12 lg:col-span-8">
          <div>
            <SectionBandage classname="mt-12"> Ingredients </SectionBandage>
            <RecipeSection
              title="Spicy mayonaise"
              recipeList={["mayonaise", "1 tablespoon of soup"]}
            />
          </div>
          <div>
            <SectionBandage classname="mt-12">Cooking tutorials</SectionBandage>
            <RecipeSection
              type="step"
              title="Spicy mayonaise"
              recipeList={["mayonaise", "1 tablespoon of soup"]}
            />
          </div>
          <hr className="my-12" />
          <div className="grid grid-cols-3 w-3/4">
            <article>
              <h5 className="font-semibold text-sm">CATEGORY</h5>
              <p className="text-rose-500 font-light text-lg">Burgers</p>
            </article>
            <article>
              <h5 className="font-semibold text-sm">CUISINE</h5>
              <p className="text-rose-500 font-light text-lg">Burgers</p>
            </article>{" "}
            <article>
              <h5 className="font-semibold text-sm">COOKING METHOD</h5>
              <p className="text-rose-500 font-light text-lg">Burgers</p>
            </article>
          </div>
          <hr className="my-10" />
          <section className="">
            <h3 className="font-thin text-3xl">Comments</h3>
            <div></div>
            <Comment name="Duy Tung" date="Thu Mar 03 2022 07:27:36 GMT+0700">
              This is just a testing comment to check if it works properly
            </Comment>
            <Comment name="Duy Tung" date="Thu Mar 03 2022 07:27:36 GMT+0700">
              This is just a testing comment to check if it works properly
            </Comment>{" "}
            <Comment name="Duy Tung" date="Thu Mar 03 2022 07:27:36 GMT+0700">
              This is just a testing comment to check if it works properly
            </Comment>
            <hr />
            <h3 className="font-thin text-3xl mb-5 mt-10">Your thoughts</h3>
            <section className="bg-white p-4">
              <textarea
                className="w-full p-3 border border-gray-400 focus:outline-rose-300"
                rows={6}
                cols={5}
                placeholder="Type your comment here..."
              />
              <PrimaryButton callback={() => {}} classname="px-4 mr-0 mt-3">
                comment
              </PrimaryButton>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Sample;
