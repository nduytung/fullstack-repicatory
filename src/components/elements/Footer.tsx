import React from "react";
import ReverseButton from "./ReversedButton";

const Footer = () => {
  return (
    <footer className="bg-rose-400 ">
      <section className="container px-5  mx-auto max-w-screen-xl text-white font-light text-xl md:text-2xl py-8 block md:flex justify-between items-center">
        <p>Already convinced? Create an awesome community of your own.</p>
        <ReverseButton classname="px-5 mr-0 mt-5 md:mt-0" callback={() => {}}>
          purchase now
        </ReverseButton>
      </section>
      <section className="bg-white ">
        <article className="text-gray-500 px-5 container max-w-screen-xl grid grid-cols-10 gap-8 container mx-auto py-10">
          <div className="col-span-10 md:col-span-5">
            <h4 className="font-medium text-md mb-5">
              About SocialChef Community
            </h4>
            <p className="font-light text-sm justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
            </p>
          </div>
          <div className="col-span-5 md:col-span-3">
            <h4 className="font-medium text-md mb-5">Need helps?</h4>
            <p className="font-light text-sm justify">
              Contact us via phone or email
              <p>
                <span className="text-rose-500 font-semibold">
                  Phone number:{" "}
                </span>
                099999999
              </p>
              <p>
                <span className="text-rose-500 font-semibold">Email: </span>
                099999999
              </p>
            </p>
          </div>
          <div className="col-span-5 md:col-span-2">
            <h4 className="font-medium text-md mb-5">Follow me on</h4>
            <div className="flex">
              <div className="bg-rose-500 w-8 h-8 mr-2"></div>
              <div className="bg-rose-500 w-8 h-8 mr-2"></div>
              <div className="bg-rose-500 w-8 h-8 mr-2"></div>
              <div className="bg-rose-500 w-8 h-8 mr-2"></div>
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
