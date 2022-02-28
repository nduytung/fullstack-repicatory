import React, { ReactChildren, ReactText } from "react";

type ButtonType = {
  children: string | JSX.Element | JSX.Element[];
  classname?: string;
  callback: Function;
  props?: any;
};

const WhiteButton = ({
  children,
  classname,
  callback,
  ...props
}: ButtonType) => {
  return (
    <button
      onClick={() => callback()}
      className={`${classname} bg-white text-rose-400 py-3 capitalize font-semibold text-sm`}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
