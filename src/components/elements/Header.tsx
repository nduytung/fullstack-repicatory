import Link from "next/link";
import React from "react";
import {
  SearchOutlined,
  UserOutlined,
  PlusCircleOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import styles from "../Header.module.css";

const HEADER_LINK = [
  {
    name: "home",
    link: "/",
  },

  {
    name: "about",
    link: "/about",
  },
  {
    name: "recipes",
    link: "/recipe",
  },
  {
    name: "search",
    link: "/blog",
  },
  {
    name: "submit",
    link: "/item",
  },
];
const Header = () => {
  return (
    <header className="bg-white  fixed right-0 left-0 z-40 top-0  ">
      <div className="container w-full  max-w-screen-xl mx-auto grid grid-cols-12 px-5  h-20 md:h-24 items-center">
        <Link href="/">
          <span className="text-lg md:text-3xl font-extrabold col-span-4 md:col-span-2 cursor-pointer">
            fucking logo
          </span>
        </Link>
        <div className="col-span-5 lg:col-span-7">
          <ul className="hidden lg:flex justify-between w-4/5 mx-auto">
            {HEADER_LINK.map((item, index) => {
              return (
                <p className="flex-1">
                  <Link href={item.link} key={index}>
                    <span className="uppercase font-thin cursor-pointer hover:text-rose-500">
                      {item.name}
                    </span>
                  </Link>
                </p>
              );
            })}
          </ul>
        </div>
        <div className="flex col-span-3 md:col-span-5 lg:col-span-3 h-full p-0">
          <div className="hidden md:block md:flex-1 bg-rose-100 text-white font-semibold text-sm cursor-pointer">
            <p className="text-4xl font-bold text-center text-white">
              <SearchOutlined />
            </p>
            <p className="text-center mt-1">SEARCH RECIPE</p>
          </div>
          <div className="hidden md:block md:flex-1 bg-rose-200 text-white font-semibold text-sm cursor-pointer">
            <p className="text-4xl font-bold text-center text-white">
              <UserOutlined />
            </p>
            <Link href="/login">
              <p className="text-center mt-1">LOGIN TO FOLLOW</p>
            </Link>
          </div>
          <div className="hidden md:block md:flex-1 bg-rose-300 text-white font-semibold text-sm cursor-pointer">
            <p className="text-4xl font-bold text-center text-white">
              <PlusCircleOutlined />
            </p>
            <Link href="/register">
              <p className="text-center mt-1">REGISTER ACCOUNT</p>
            </Link>
          </div>
          <div className="flex-1 flex lg:hidden items-center justify-center bg-rose-400 text-white font-semibold text-sm cursor-pointer">
            <p className="text-4xl font-bold text-center -mt-3 text-white">
              <MenuOutlined />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
