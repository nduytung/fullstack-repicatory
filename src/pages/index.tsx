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
  BookOutlined,
  FileDoneOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import TitleBandage from "../components/elements/TitleBandage";
import StatisCard from "../components/home/StatisCard";
import FeaturesRecipe from "../components/home/FeaturesRecipe";
import FeaturedMember from "../components/home/FeaturedMember";
import SectionBandage from "../components/elements/SectionBandage";
import Recipe from "../components/home/Recipe";
import Footer from "../components/elements/Footer";
import IconRecipe from "../components/home/IconRecipe";

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
    <div className="bg-rose-300">
      <Header />
      {/* section 1 */}
      <section className="bg-rose-300 container grid grid-cols-12 mx-auto py-20">
        <div className="col-span-8 flex flex-col text-white items-start justify-between">
          <h1 className="font-light text-4xl">Welcome to social chef!</h1>
          <p className="font-light text-md text-justify">
            SocialChef is the ultimate cooking social community, where recipes
            come to life. By joining us you will join a robust foodie community
            and where you will get to share your recipes and food ideas with
            hundreds of other like-minded members.{"\n"}
            You will also get a chance to win awesome prizes, make new friends
            and share delicious recipes.
          </p>
          <WhiteButton callback={handleExplore} classname="mr-5 align-top">
            <div className="flex items-center px-5 justify-between">
              <p className="mr-8">Explore our community</p>
              <RightOutlined />
            </div>
          </WhiteButton>
          <p>
            Already a member? Click <a href="#"> here</a> to login.
          </p>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-3 bg-white p-4">
          <h4 className="font-semibold text-md text-gray-700">
            Refine search result
          </h4>
          <p className="font-light text-justify text-gray-500">
            All you need to do is enter an ingredient, a dish or a keyword.You
            can also select a specific tag from the dropdown. There’s sure to be
            something tempting for you to try.{"\n"}
            Enjoy!
          </p>
          <form>
            <Input name="term" placeholder="Enter your search term" />
            <SelectInput
              name="term"
              placeholder="Enter your search term"
              inputList={[
                {
                  name: "testing 01",
                  value: "ajasasasd",
                },
              ]}
            />
            <PrimaryButton callback={handleCooking} classname="w-full">
              start cooking!
            </PrimaryButton>
          </form>
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <TitleBandage>socialchefs in number</TitleBandage>
          <div className="grid grid-cols-6 my-8 gap-6">
            <StatisCard name="members" number={33}>
              <CommentOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="recipes" number={33}>
              <BgColorsOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="photos" number={33}>
              <CameraOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="posts" number={33}>
              <BookOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="comments" number={33}>
              <CommentOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="articles" number={33}>
              <FileDoneOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
          </div>
          <PrimaryButton callback={handleJoinUs} classname="px-8 mx-auto">
            join us!
          </PrimaryButton>
        </div>
      </section>

      <hr className="my-10" />
      {/* section 3 */}
      <section className="bg-gray-100 ">
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
              <SectionBandage classname="mb-8"> latest recipe</SectionBandage>
              <div className="grid grid-cols-3 gap-6 mb-10">
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
              <article className="bg-white py-3">
                Recipe category with icons
              </article>
              <div className="grid grid-cols-3">
                <IconRecipe title="appetizer" color="bg-rose-300">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-400">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-500">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-400">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-500">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-300">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-500">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-300">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
                <IconRecipe title="appetizer" color="bg-rose-400">
                  <CopyOutlined style={{ fontSize: 30, color: "white" }} />
                </IconRecipe>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
