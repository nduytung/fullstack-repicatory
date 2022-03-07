import Link from "next/link";
import React from "react";
import {
  SearchOutlined,
  UserOutlined,
  PlusCircleOutlined,
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
    <header className="bg-white container max-w-screen-xl grid grid-cols-12 mx-auto h-24 items-center">
      <Link href="/">
        <span className="text-3xl font-extrabold col-span-2 cursor-pointer">
          fucking logo
        </span>
      </Link>
      <ul className="flex justify-between col-span-7 w-4/5 mx-auto">
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
      <div className="flex col-span-3 h-full p-0">
        <div className="flex-1 bg-rose-100 text-white font-semibold text-sm cursor-pointer">
          <p className="text-4xl font-bold text-center text-white">
            <SearchOutlined />
          </p>
          <p className="text-center mt-1">SEARCH FOR RECIPE</p>
        </div>
        <div className="flex-1 bg-rose-200 text-white font-semibold text-sm cursor-pointer">
          <p className="text-4xl font-bold text-center text-white">
            <UserOutlined />
          </p>
          <Link href="/login">
            <p className="text-center mt-1">LOGIN TO FOLLOW</p>
          </Link>
        </div>
        <div className="flex-1 bg-rose-300 text-white font-semibold text-sm cursor-pointer">
          <p className="text-4xl font-bold text-center text-white">
            <PlusCircleOutlined />
          </p>
          <Link href="/register">
            <p className="text-center mt-1">REGISTER ACCOUNT</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
