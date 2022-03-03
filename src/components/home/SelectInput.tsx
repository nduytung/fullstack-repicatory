import React from "react";

type SelectInputType = {
  inputList: [
    {
      name: string;
      value: string;
    }
  ];
  name: string | undefined;
  placeholder: string;
};

const SelectInput = ({ name, placeholder, inputList }: SelectInputType) => {
  return (
    <select
      name={name}
      className="border bg-white w-full my-2 text-gray-400 text-sm border-gray-300 font-light p-2 focus:border-gray-400 focus:outline-none"
      placeholder={placeholder}
    >
      {inputList.map((item) => {
        return <option value={item.value}> {item.name}</option>;
      })}
    </select>
  );
};

export default SelectInput;
