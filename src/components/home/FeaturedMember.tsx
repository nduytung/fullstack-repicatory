import React from "react";
import PrimaryButton from "../elements/PrimaryButton";

const FeaturedMember = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-300 h-48"></div>
      <div className="px-5">
        <p className="my-4">admin</p>
        <hr />
        <p className="font-thin my-4">
          Want to feature chefs and recipes? You got it! The SocialChef
          WordPress theme will definitely help you build a robust and lively
          food social community quickly and effortlessly.
        </p>
        <hr />
        <PrimaryButton classname="w-full my-4" callback={() => {}}>
          recipes by this user
        </PrimaryButton>
        <a href="#" style={{ color: "#dbbc94" }}>
          see the past featured members
        </a>
      </div>
    </div>
  );
};

export default FeaturedMember;
