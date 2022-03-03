import React from "react";

type CommentType = {
  name: string;
  date: Date | string;
  children: JSX.Element | string | number;
};

const Comment = ({ name, date, children }: CommentType) => {
  return (
    <div className="bg-gray-100 font-thin text-gray-500 p-5 my-3">
      <div className="flex items-center">
        <article className="bg-gray-300 rounded-full w-12 h-12 mr-4"></article>
        <div>
          <p className="text-rose-400 font-semibold"> {name} </p>
          <p className="text-xs"> {date} </p>
        </div>
      </div>
      <hr className="my-5" />
      <div className="text-md">{children}</div>
    </div>
  );
};

export default Comment;
