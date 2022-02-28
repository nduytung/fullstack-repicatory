import React from "react";

type InputType = {
  name: string | undefined;
  placeholder: string;
};

const Input = ({ name, placeholder }: InputType) => {
  return (
    <input
      type="text"
      name={name}
      className="border border-gray-200 font-light text-sm w-full p-2 focus:border-gray-400 focus:outline-none"
      placeholder={placeholder}
    />
  );
};

export default Input;
