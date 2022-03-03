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
    link: "/ourhome",
  },

  {
    name: "about",
    link: "/ukraine",
  },
  {
    name: "recipes",
    link: "/recipes",
  },
  {
    name: "today' ",
    link: "/blog",
  },
  {
    name: "ingredients",
    link: "/item",
  },
];
const Header = () => {
  return (
    <header className="bg-white container max-w-screen-xl grid grid-cols-12 mx-auto h-24 items-center">
      <span className="text-3xl font-extrabold col-span-2">fucking logo</span>
      <ul className="flex justify-between col-span-7 w-4/5 mx-auto">
        {HEADER_LINK.map((item, index) => {
          return (
            <p className="flex-1">
              <Link href={item.link} key={index}>
                <span className="uppercase font-thin">{item.name}</span>
              </Link>
            </p>
          );
        })}
      </ul>
      <div className="flex col-span-3 h-full p-0">
        <div className="flex-1 bg-rose-100 text-white font-semibold text-sm">
          <p className="text-4xl font-bold text-center text-white">
            <SearchOutlined />
          </p>
          <p className="text-center mt-1">SEARCH FOR RECIPE</p>
        </div>
        <div className="flex-1 bg-rose-200 text-white font-semibold text-sm">
          <p className="text-4xl font-bold text-center text-white">
            <UserOutlined />
          </p>
          <p className="text-center mt-1">MY ACCOUNT WALL</p>
        </div>{" "}
        <div className="flex-1 bg-rose-300 text-white font-semibold text-sm">
          <p className="text-4xl font-bold text-center text-white">
            <PlusCircleOutlined />
          </p>
          <p className="text-center mt-1">SUBMIT NEW RECIPE</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
