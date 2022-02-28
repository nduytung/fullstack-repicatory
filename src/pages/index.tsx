import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/elements/Header";
import PrimaryButton from "../components/elements/PrimaryButton";
import WhiteButton from "../components/elements/WhiteButton";
import Input from "../components/home/Input";
import SelectInput from "../components/home/SelectInput";
import { RightOutlined, CommentOutlined } from "@ant-design/icons";
import TitleBandage from "../components/elements/TitleBandage";
import StatisCard from "../components/home/StatisCard";

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
            <StatisCard name="members" number={33}>
              <CommentOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="members" number={33}>
              <CommentOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="members" number={33}>
              <CommentOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="members" number={33}>
              <CommentOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
            <StatisCard name="members" number={33}>
              <CommentOutlined style={{ fontSize: 80, color: "#dbbc94" }} />
            </StatisCard>
          </div>
          <PrimaryButton callback={handleJoinUs} classname="px-8 mx-auto">
            join us!
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
