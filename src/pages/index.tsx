import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/elements/Header";
import Input from "../components/home/Input";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="bg-gray-100 container grid grid-cols-12 mx-auto py-20">
        <div className="col-span-9">
          <h1 className="font-light text-4xl">Welcome to social chef!</h1>
        </div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
