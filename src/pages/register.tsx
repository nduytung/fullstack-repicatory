import React from "react";
import PrimaryButton from "../components/elements/PrimaryButton";
import { useFormik } from "formik";

const validate = (values: any) => {
  const errors: any = {};
  if (!values.fullname) {
    errors.fullname = "Required";

    if (!values.username) {
      errors.username = "Required";
    } else if (values.lastName.length < 5) {
      errors.lastName = "Must be 8 characters or more";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 5) {
      errors.lastName = "Must be 8 characters or more, with capital,...";
    }

    if (!values.retypePassword) {
      errors.retypePassword = "Required";
    } else if (values.password !== values.retypePassword) {
      errors.retypePassword = "Password not match";
    }

    return errors;
  }
};

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      retypePassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="py-32 container mx-auto max-w-screen-xl">
      <section className="bg-white p-4 h-84 mx-5 md:w-4/5  lg:w-2/5 md:mx-auto ">
        <h2 className="text-gray-500">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            onChange={formik.handleChange}
            value={formik.values.fullname}
            type="text"
            placeholder="Your full name..."
            className="p-2 text-gray-400 text-sm focus:outline-rose-400 my-2 font-light w-full border border-gray-200"
          />
          <div className="md:grid md:grid-cols-2 gap-3">
            <input
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text"
              placeholder="Your username..."
              className="p-2 text-gray-400 text-sm my-2 font-light w-full focus:outline-rose-400 border border-gray-200"
            />
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              placeholder="Your email..."
              className="p-2 text-gray-400 text-sm my-2 font-light focus:outline-rose-400 w-full border border-gray-200"
            />
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            placeholder="Your password..."
            className="p-2 text-gray-400 text-sm my-2 font-light focus:outline-rose-400 w-full border border-gray-200"
          />
          <input
            onChange={formik.handleChange}
            value={formik.values.retypePassword}
            type="password"
            placeholder="Retype your password..."
            className="p-2 text-gray-400 text-sm my-2 font-light focus:outline-rose-400 w-full border border-gray-200"
          />
          <div className="flex mt-2 justify-start items-center text-gray-600 text-sm font-thin">
            <input type="checkbox" name="" id="" className="mr-2" />
            Remember my password
          </div>
          <div className="md:flex items-center mt-5 justify-between">
            <div className="font-thin text-sm">
              Already have an account?
              <a className="text-rose-400 ml-2"> Login </a>
            </div>
            <button type="submit" className="w-full">
              <PrimaryButton
                classname="px-4 mt-5 md:mt-0 mr-0"
                callback={() => {}}
              >
                register
              </PrimaryButton>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
