import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/elements/Header";
import PrimaryButton from "../components/elements/PrimaryButton";
import WhiteButton from "../components/elements/WhiteButton";
import Input from "../components/home/Input";
import SelectInput from "../components/home/SelectInput";
import {
  RightOutlined,
  CommentOutlined,
  BgColorsOutlined,
  CameraOutlined,
  AliwangwangOutlined,
  HeatMapOutlined,
  BookOutlined,
  FileDoneOutlined,
  CopyOutlined,
  WeiboOutlined,
  CoffeeOutlined,
  DingtalkOutlined,
  ExperimentOutlined,
  GiftOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import TitleBandage from "../components/elements/TitleBandage";
import StatisCard from "../components/home/StatisCard";
import FeaturesRecipe from "../components/home/FeaturesRecipe";
import FeaturedMember from "../components/home/FeaturedMember";
import SectionBandage from "../components/elements/SectionBandage";
import Recipe from "../components/home/Recipe";
import Footer from "../components/elements/Footer";
import IconRecipe from "../components/home/IconRecipe";
import MainLayout from "../layout/MainLayout/MainLayout";
import Link from "next/link";

const RECIPE_CATE = [
  {
    name: "Appetizer",
    icon: <HeatMapOutlined />,
  },
  {
    name: "Asian",
    icon: <AliwangwangOutlined />,
  },
  {
    name: "Deserts",
    icon: <WeiboOutlined />,
  },
  {
    name: "Eggs",
    icon: <CoffeeOutlined />,
  },
  {
    name: "Equipment",
    icon: <DingtalkOutlined />,
  },
  {
    name: "Events",
    icon: <ExperimentOutlined />,
  },
  {
    name: "Fish",
    icon: <GiftOutlined />,
  },
  {
    name: "Fitness",
    icon: <HeartOutlined />,
  },
  {
    name: "Healthy",
    icon: <BookOutlined />,
  },
];

const COLOR_LIST = ["bg-rose-200", "bg-rose-300", "bg-rose-400"];

const Home = () => {
  //section 1
  const handleCooking = () => {
    return;
  };

  const handleExplore = () => {
    return;
  };

  //section 2
  const handleJoinUs = () => {
    return;
  };
  return (
    <div>
      {/* section 1 */}
      <section className="py-32 main-banner">
        <div className="container grid grid-cols-12 gap-10 mx-auto max-w-screen-xl">
          <div className="col-span-8 h-4/5 flex flex-col text-white items-start justify-between">
            <h1 className="font-light" style={{ fontSize: 55 }}>
              Welcome to social chef!
            </h1>
            <p className="font-light text-md text-justify">
              SocialChef is the ultimate cooking social community, where recipes
              come to life. By joining us you will join a robust foodie
              community and where you will get to share your recipes and food
              ideas with hundreds of other like-minded members.{"\n"}
              You will also get a chance to win awesome prizes, make new friends
              and share delicious recipes.
            </p>
            <WhiteButton
              callback={handleExplore}
              classname="mr-5 align-top hover:bg-rose-400 hover:text-white text-lg"
            >
              <div className="flex items-center px-5 justify-between">
                <p className="mr-8">Explore our community</p>
                <RightOutlined />
              </div>
            </WhiteButton>
            <p>
              Already a member? Click{" "}
              <Link href="/login">
                <span className="text-rose-300 underline cursor-pointer">
                  here{" "}
                </span>
              </Link>
              to login.
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-3 bg-white p-4">
            <h4 className="font-medium text-md text-gray-700">
              Refine search result
            </h4>
            <p className="font-light text-justify text-gray-500 text-sm my-3">
              All you need to do is enter an ingredient, a dish or a keyword.You
              can also select a specific tag from the dropdown. There’s sure to
              be something tempting for you to try.{"\n"}
              Enjoy!
            </p>
            <form>
              <Input name="term" placeholder="Enter your search term" />
              <SelectInput
                name="term"
                placeholder="Enter your search term"
                inputList={[
                  {
                    name: "Select category",
                    value: "ajasasasd",
                  },
                ]}
              />
              <SelectInput
                name="term"
                placeholder="Enter your search term"
                inputList={[
                  {
                    name: "Select category",
                    value: "ajasasasd",
                  },
                ]}
              />
              <SelectInput
                name="term"
                placeholder="Enter your search term"
                inputList={[
                  {
                    name: "Select category",
                    value: "ajasasasd",
                  },
                ]}
              />
              <PrimaryButton callback={handleCooking} classname="w-full">
                start cooking!
              </PrimaryButton>
            </form>
          </div>
        </div>
      </section>
      <main className="container mx-auto max-w-screen-xl">
        {/* section 2 */}

        <section className="py-8">
          <div className="container mx-auto">
            <TitleBandage>socialchef in numbers</TitleBandage>
            <div className="grid grid-cols-6 my-8 gap-6">
              <StatisCard name="members" number={33}>
                <p className="text-6xl text-amber-600">
                  <CommentOutlined />
                </p>
              </StatisCard>
              <StatisCard name="recipes" number={33}>
                <p className="text-6xl text-amber-600">
                  <BgColorsOutlined />
                </p>
              </StatisCard>
              <StatisCard name="photos" number={33}>
                <p className="text-6xl text-amber-600">
                  <CameraOutlined />
                </p>
              </StatisCard>
              <StatisCard name="posts" number={33}>
                <p className="text-6xl text-amber-600">
                  <BookOutlined />
                </p>
              </StatisCard>
              <StatisCard name="comments" number={33}>
                <p className="text-6xl text-amber-600">
                  <CommentOutlined />
                </p>
              </StatisCard>
              <StatisCard name="articles" number={33}>
                <p className="text-6xl text-amber-600">
                  <FileDoneOutlined />
                </p>
              </StatisCard>
            </div>
            <PrimaryButton callback={handleJoinUs} classname="px-8 mx-auto">
              join us!
            </PrimaryButton>
          </div>
        </section>

        <hr />
        {/* section 3 */}
        <section className="py-10">
          <div className="container mx-auto grid grid-cols-12 gap-10">
            <article className="col-span-9">
              <section>
                <div className="grid grid-cols-3 gap-8">
                  <div className="col-span-2">
                    <FeaturesRecipe />
                  </div>
                  <div className="col-span-1">
                    <FeaturedMember />
                  </div>
                </div>
              </section>
              <hr className="my-8" />
              <section>
                <SectionBandage classname="mb-8">latest recipes</SectionBandage>
                <div className="grid grid-cols-3 gap-10 mb-10">
                  <Recipe />
                  <Recipe />
                  <Recipe />
                  <Recipe />
                  <Recipe />
                  <Recipe />
                  <Recipe />
                </div>
              </section>
            </article>
            <aside className="col-span-3">
              <div>
                <article className="bg-white py-3 text-center font-medium">
                  Recipe category with icons
                </article>
                <div className="grid grid-cols-3">
                  {RECIPE_CATE.map((recipe, index) => {
                    return (
                      <IconRecipe
                        title={recipe.name}
                        color={
                          index > 2
                            ? index > 5
                              ? COLOR_LIST[(index - 4) % 3]
                              : COLOR_LIST[(index - 2) % 3]
                            : COLOR_LIST[index]
                        }
                      >
                        <CopyOutlined
                          style={{ fontSize: 30, color: "white" }}
                        />
                      </IconRecipe>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
