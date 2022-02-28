import React, { ReactChildren, ReactText } from "react";

type ButtonType = {
  children: string | ReactChildren;
  classname?: string;
  callback: Function;
  props?: any;
};

const ReverseButton = ({
  children,
  classname,
  callback,
  ...props
}: ButtonType) => {
  return (
    <button
      onClick={() => callback()}
      className={`${classname} bg-white hover:bg-rose-400 text-rose-400 hover:text-white py-2 uppercase font-semibold text-sm mx-auto block`}
    >
      {children}
    </button>
  );
};

export default ReverseButton;
