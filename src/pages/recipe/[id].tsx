import React, { useEffect, useState } from "react";
import {
  PrinterOutlined,
  StarOutlined,
  HeartOutlined,
  ClockCircleOutlined,
  SearchOutlined,
  FacebookFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import RecipeSection from "../../components/recipe/RecipeSection";
import SectionBandage from "../../components/elements/SectionBandage";
import Comment from "../../components/recipe/Comment";
import PrimaryButton from "../../components/elements/PrimaryButton";
import { getRandomMenuList, getRecipeById } from "../../lib/index.api";
import { Router, useRouter } from "next/router";
import { stringify } from "querystring";
import Image from "next/image";

type RecipeType = {
  detail: {
    title: string;
    creditsText: string;
    extendedIngredients: [{ original: string }];
  };
};
const Sample = ({ detail }: RecipeType) => {
  const router = useRouter();
  if (router.isFallback) return <div> Loading, please wait...</div>;
  const [ingre, setIngre] = useState<string[]>();
  const [diets, setDiets] = useState<string[]>();

  useEffect(() => {
    if (detail) {
      const temp = detail.extendedIngredients.map(
        (item: { original: string }) => item.original
      );
      setDiets(detail.diets);
      setIngre(temp);
    }
  }, [detail]);

  return (
    <div>
      {console.log(detail)}
      <nav className="text-white py-16 mx-auto text-center main-banner text-3xl lg:text-4xl font-semibold">
        <p className=" max-w-screen-xl w-2/3 mx-auto">{detail?.title}</p>
      </nav>
      <main className="px-5  max-w-screen-xl container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 py-8">
        <div className="md:col-span-8">
          <nav className="md:flex justify-between items-start">
            <div className="flex items-center justify-between md:justify-center mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-500 lg:w-12 lg:h-12 w-10 h-10"></div>
                <article className="mx-5">
                  <p className="text-sm font-semibold">AUTHOR</p>
                  <p className="font-light text-rose-400">
                    {detail.creditsText}
                  </p>
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
                <p className="font-semibold text-sm mb-1">HEATH:</p>
                <p className="font-thin">{detail.healthScore} </p>
              </div>
              <div className="px-3 mx-3 ">
                <p className="font-semibold text-sm">PRICE PER SERVING:</p>
                <p className="font-thin">$ {detail.pricePerServing}</p>
              </div>
              <div className="text-rose-400 text-5xl -mt-5">
                <HeartOutlined />
              </div>
            </nav>
          </nav>
          <p
            dangerouslySetInnerHTML={{ __html: detail.summary }}
            className="text-lg mb-5 mt-10 text-gray-500"
          ></p>
          <div className="bg-gray-200 h-96 w-full relative">
            <Image src={detail.image} layout="fill" objectFit="fill" />
          </div>
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
          <div className="flex justify-between mt-10">
            <article className="col-span-1">
              <p className="text-md font-semibold">YIELDS</p>
              <p className="font-light text-lg text-rose-500">
                {detail.servings}
              </p>
            </article>
            <div className="col-span-1 flex items-center">
              <span className="text-4xl text-gray-600 -mt-3 mr-3 lg:block hidden">
                <ClockCircleOutlined />
              </span>
              <div>
                <p className="text-sm font-semibold">PREP TIME</p>
                <p className="font-light">{detail.readyInMinutes} mins</p>
              </div>
            </div>
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
            <SectionBandage classname="mt-12">
              Diets suitabilities
            </SectionBandage>
            <RecipeSection recipeList={diets} type="step" />
          </div>
          <div>
            <SectionBandage classname="mt-12"> Ingredients </SectionBandage>
            <RecipeSection recipeList={ingre} />
          </div>
          <div>
            <SectionBandage classname="mt-12">Cooking tutorials</SectionBandage>
            {/* <RecipeSection
              type="step"
              title="Spicy mayonaise"
              recipeList={["mayonaise", "1 tablespoon of soup"]}
            /> */}
            {detail && detail.instructions ? (
              <p
                className="mt-3 font-light"
                dangerouslySetInnerHTML={{ __html: detail.instructions }}
              ></p>
            ) : (
              <p>
                There's no instruction for this recipe yet, sorry for this
                inconvenience
              </p>
            )}
          </div>
          <hr className="my-12" />
          <div className="grid grid-cols-3 w-3/4">
            <article>
              <h5 className="font-semibold text-sm">CATEGORY</h5>
              <p className="text-rose-500 font-light text-lg">
                {detail.vegan ? "Vegetarian" : "NOT for vegans"}
              </p>
            </article>
            <article>
              <h5 className="font-semibold text-sm">CUISINE</h5>
              <p className="text-rose-500 font-light text-lg">
                {detail.cuisines.map((item: string) => `${item}, `)}
              </p>
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

export const getStaticPaths = async () => {
  const menu: any = await getRandomMenuList(5);
  let newPath: any[] = [];

  if (menu) {
    newPath = await menu.map((item: any) => ({
      params: {
        id: `${item.id}`,
      },
    }));
  }

  return {
    paths: newPath,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  let detail: false | object[] = [{ hello: true }];
  detail = await getRecipeById(params.id);
  return {
    props: {
      detail,
    },
  };
};

export default Sample;
