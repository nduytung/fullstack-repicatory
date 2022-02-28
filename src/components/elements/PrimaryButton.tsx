import React, { ReactChildren, ReactText } from "react";

type ButtonType = {
  children: string | ReactChildren;
  classname?: string;
  callback: Function;
  props?: any;
};

const PrimaryButton = ({
  children,
  classname,
  callback,
  ...props
}: ButtonType) => {
  return (
    <button
      onClick={() => callback()}
      className={`${classname} bg-rose-400 hover:bg-white hover:text-rose-400 border border-rose-400 text-white py-2 uppercase font-semibold text-sm mx-auto block`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
