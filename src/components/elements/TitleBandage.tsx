import React from "react";

type BandageType = {
  children: JSX.Element | JSX.Element[] | string;
  classname?: string;
};

const Bandage = ({ children, classname }: BandageType) => {
  return (
    <div
      className={`${classname} border-y-30 border-x-10 border-transparent w-72 md:w-96 h-10 mx-auto border-y-rose-400 text-white uppercase`}
    >
      <div className="bg-rose-400 px-5 -my-5 py-2 text-center font-bold text-sm md:text-lg">
        {children}
      </div>
    </div>
  );
};

export default Bandage;
