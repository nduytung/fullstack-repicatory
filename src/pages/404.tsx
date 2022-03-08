import React from "react";

const NotFound = () => {
  return (
    <div className="py-10 max-w-screen-xl container mx-auto">
      <div className="container mx-auto grid grid-cols-4 gap-10 px-5">
        <div className="h-48 col-span-1">
          <p
            className="bg-rose-300 h-36 items-center justify-center flex text-white font-extrabold px-auto"
            style={{ fontSize: 80 }}
          >
            404
          </p>
          <p className="bg-rose-400 h-12 items-center justify-center flex text-white font-bold text-md">
            Page not found
          </p>
        </div>
        <div className="col-span-2 text-justify font-thin bg-white p-4">
          The page you have requested could not be found or was removed from our
          database.{"\n"} If you believe that this is an error, please kindly
          contact us. Thank you!{"\n"}
          You can go back home or try using the search.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
