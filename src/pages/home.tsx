import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
import EditProfileForm from "../components/personalHome/EditProfileForm";

const Home = () => {
  return (
    <div className="bg-gray-200 max-w-screen-xl container mx-auto">
      <div className="container grid grid-cols-4 gap-10 mx-auto py-12">
        <section className="col-span-1 bg-white">
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
            <div className="flex items-center w-full hover:bg-rose-300 hover:text-white p-3">
              <span className="text-2xl font-thin mr-3 text-gray-400">
                <UserAddOutlined />
              </span>
              <span className="font-thin text-md"> Edit your profile </span>
            </div>
            <div className="flex items-center w-full hover:bg-rose-300 hover:text-white hover:font-medium p-3">
              <span className="text-2xl font-thin mr-3 text-gray-400">
                <UserAddOutlined />
              </span>
              <span className="font-thin text-md">
                Your recipe contributions
              </span>
            </div>
            <div className="flex items-center w-full hover:bg-rose-300 hover:text-white p-3">
              <span className="text-2xl font-thin mr-3 text-gray-400">
                <UserAddOutlined />
              </span>
              <span className="font-thin text-md"> Saved recipes </span>
            </div>
          </div>
        </section>
        <section className="col-span-3 bg-white p-5">
          <EditProfileForm />
        </section>
      </div>
    </div>
  );
};

export default Home;
