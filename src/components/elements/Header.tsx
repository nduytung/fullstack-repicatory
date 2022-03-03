import Link from "next/link";
import React from "react";

const HEADER_LINK = [
  {
    name: "home",
    link: "/ourhome",
  },

  {
    name: "recipe list",
    link: "/recipes",
  },
  {
    name: "today' recipe",
    link: "/blog",
  },
  {
    name: "ingredients",
    link: "/item",
  },
  {
    name: "about us",
    link: "/ukraine",
  },
];
const Header = () => {
  return (
    <header className="bg-white container max-w-screen-xl grid grid-cols-12 mx-auto h-24 items-center">
      <span className="text-3xl font-extrabold col-span-2">social chef</span>
      <ul className="flex justify-between col-span-7 w-4/5 mx-auto">
        {HEADER_LINK.map((item, index) => {
          return (
            <p className="flex-1">
              <Link href={item.link} key={index}>
                {item.name}
              </Link>
            </p>
          );
        })}
      </ul>
      <div className="flex col-span-3 h-full p-0">
        <div className="flex-1 bg-rose-300">hello</div>
        <div className="flex-1 bg-rose-400">muda</div>
        <div className="flex-1 bg-rose-500">fuka</div>
      </div>
    </header>
  );
};

export default Header;
