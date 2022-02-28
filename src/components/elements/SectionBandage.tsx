import React from "react";

type SectionBandageType = {
  children: JSX.Element | JSX.Element[] | string;
  classname?: string;
};

const SectionBandage = ({ children, classname }: SectionBandageType) => {
  return (
    <div
      className={`${classname} border-y-20 border-x-8 border-transparent w-48 h-8 border-y-rose-400 text-white capitalize`}
    >
      <div className="bg-rose-400 px-5 -my-5 py-2 text-center font-semibold text-md">
        {children}
      </div>
    </div>
  );
};

export default SectionBandage;
