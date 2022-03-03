import React from "react";
import PrimaryButton from "../components/elements/PrimaryButton";

const Login = () => {
  return (
    <div className="py-32 container mx-auto max-w-screen-xl">
      <section className="bg-white p-4 h-84 w-2/5 mx-auto ">
        <h2 className="text-gray-500">Login</h2>
        <input
          placeholder="Your name..."
          className="p-2 text-gray-400 text-sm my-2 font-light w-full border border-gray-200"
        />
        <input
          placeholder="Your password..."
          className="p-2 text-gray-400 text-sm my-2 font-light w-full border border-gray-200"
        />
        <div className="flex mt-2 justify-start items-center text-gray-600 text-sm font-thin">
          <input type="checkbox" name="" id="" className="mr-2" />
          Remember my password
        </div>
        <div className="flex items-center mt-5 justify-between">
          <div className="font-thin text-sm">
            <p>Forgot your password?</p>
            Don't have an account yet?
            <a className="text-rose-400"> Click here </a>
          </div>
          <PrimaryButton classname="w-2/5 mr-0" callback={() => {}}>
            login
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default Login;
