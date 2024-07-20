import React from "react";
import Card from "./Card";

const ContainerBox = () => {
  return (
    <div className="bg-white md:min-h-[450px] md:max-h-[450px] w-[350px] h-[600px] md:min-w-[550px] md:max-w-[550px] rounded-md overflow-y-auto relative shadow-md">
      <div className="p-4 h-full w-full">
        <h2 className="text-2xl text-gray-600 font-semibold mb-5">
          Expence Tracker
        </h2>
        <div>
          <form className="flex items-center flex-wrap">
            <input
              type="text"
              placeholder="Item name"
              className="w-full md:w-52 md:mr-2 mr-0 mb-2 md:mb-0 p-2 rounded-md bg-gray-100 outline-blue-300"
            />
            <input
              type="number"
              placeholder="Item price"
              className="w-full md:w-52 md:mr-2 mr-0 mb-2 md:mb-0 p-2 rounded-md bg-gray-100 outline-blue-300"
            />
            <button className="w-full md:w-12 p-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
              Add
            </button>
          </form>
        </div>
        <Card />
      </div>
      <div className="bg-gray-100 absolute bottom-0 left-0 w-full p-4 flex items-center justify-between">
        <h3 className="font-semibold text-xl text-gray-800">
          Total Price:
          <span className="text-blue-500 ml-2 md:text-2xl text-xl">$100</span>
        </h3>
        <button className="bg-red-500 hover:bg-red-600 rounded-md text-white md:p-2 p-1">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ContainerBox;
