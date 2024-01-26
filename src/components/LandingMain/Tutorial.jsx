import React from "react";

const Tutorial = () => {
  return (
    <div className=" flex items-center flex-col gap-5 px-2 py-5">
      <h2 className="text-3xl font-light text-gray-500">Tutorial</h2>
      <h4
        style={{ color: "#069054" }}
        className="text-sm mb-3 cursor-pointer hover:underline"
      >
        Need help to get started?
      </h4>
      <img className="w-6/12" src="./wc.png" />
    </div>
  );
};

export default Tutorial;
