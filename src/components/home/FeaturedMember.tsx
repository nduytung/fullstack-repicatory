import Link from "next/link";
import React from "react";
import PrimaryButton from "../elements/PrimaryButton";
import SectionBandage from "../elements/SectionBandage";

const FeaturedMember = () => {
  return (
    <div className="bg-white">
      <div className="bg-gray-300 h-64 p-5">
        <SectionBandage>Feature member</SectionBandage>
      </div>
      <div className="px-5 pb-3">
        <p className="my-3 text-lg font-semibold text-gray-700">admin</p>
        <hr />
        <p className="font-light my-3">
          Want to feature chefs and recipes? You got it! The SocialChef
          WordPress theme will definitely help you build a robust and lively
          food social community quickly and effortlessly.
        </p>
        <hr />
        <PrimaryButton classname="w-full my-3" callback={() => {}}>
          recipes by this user
        </PrimaryButton>
        <Link href="#">
          <p className="text-amber-600 text-center w-full">
            See the past featured members
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedMember;
