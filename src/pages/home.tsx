import React, { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";
import EditProfileForm from "../components/personalHome/EditProfileForm";
import RecipeList from "../components/personalHome/RecipeList";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="max-w-screen-xl container mx-auto">
      <div className="container grid grid-cols-6 xl:grid-cols-4 gap-10 mx-auto items-start py-12 px-5 ">
        <section className="col-span-2 xl:col-span-1 bg-white">
          <section className="flex items-center p-5">
            <article className="bg-gray-300 rounded-full w-14 h-14 mr-4"></article>
            <div className="">
              <p className="font-semibold text-gray-700 text-md">
                Nguyen Duy Tung
              </p>
              <p className="font-thin text-gray-500">Normal member</p>
            </div>
          </section>
          <div className="flex text-center justify-between items-center px-5">
            <div className="">
              <p className="text-sm font-semibold text-gray-600">FOLLOWING</p>
              <p className="text-lg">600</p>
            </div>
            <div className="">
              <p className="text-sm font-semibold text-gray-600 ">
                CONTRIBUTION
              </p>
              <p className="text-lg">600</p>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <button
              onClick={() => setActiveTab(1)}
              className="flex items-center w-full hover:bg-rose-300 hover:text-white p-3"
            >
              <span className="text-2xl font-thin mr-3 text-gray-400">
                <UserAddOutlined />
              </span>
              <span className="font-thin text-md"> Edit your profile </span>
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className="flex items-center w-full hover:bg-rose-300 hover:text-white hover:font-medium p-3"
            >
              <span className="text-2xl font-thin mr-3 text-gray-400">
                <UserAddOutlined />
              </span>
              <span className="font-thin text-md">
                Your recipe contributions
              </span>
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className="flex items-center w-full hover:bg-rose-300 hover:text-white p-3"
            >
              <span className="text-2xl font-thin mr-3 text-gray-400">
                <UserAddOutlined />
              </span>
              <span className="font-thin text-md"> Saved recipes </span>
            </button>
          </div>
        </section>
        <section className="col-span-4 xl:col-span-3 bg-white p-5">
          {activeTab == 1 ? (
            <EditProfileForm />
          ) : activeTab === 2 ? (
            <RecipeList />
          ) : (
            <p>You don't have any saved recipe yet!</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
