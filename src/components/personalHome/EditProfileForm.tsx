import React from "react";

const EditProfileForm = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Edit your profile details</h2>
      <div className="border border-gray-200 p-4 grid grid-cols-4 gap-6">
        <label className="col-span-1"> Username </label>
        <input
          type="text"
          placeholder="nduytung"
          className="col-span-3 focus:outline-none font-light text-sm border border-gray-200 px-3 py-2"
        />
        <label className="col-span-1"> Email </label>
        <input
          type="text"
          placeholder="nduytung"
          className="font-light col-span-3 focus:outline-none text-sm border border-gray-200 px-3 py-2 "
        />
        <label className="col-span-1"> Fullname </label>
        <input
          type="text"
          placeholder="nduytung"
          className="font-light col-span-3 focus:outline-none text-sm border border-gray-200 px-3 py-2 "
        />
        <input
          type="text"
          placeholder="Password"
          className="font-light col-span-2 focus:outline-none text-sm border border-gray-200 px-3 py-2 "
        />
        <input
          type="text"
          placeholder="Retype password"
          className="font-light col-span-2 focus:outline-none text-sm border border-gray-200 px-3 py-2 "
        />
      </div>
    </section>
  );
};

export default EditProfileForm;
