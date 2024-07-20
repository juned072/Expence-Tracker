import React from "react";

const ContainerBox = () => {
  return (
    <div className="bg-white md:min-h-[450px] md:max-h-[450px] w-[350px] h-[500px] md:min-w-[550px] md:max-w-[550px] rounded-md overflow-y-auto relative shadow-md">
      <div className="bg-gray-100 absolute bottom-0 left-0 w-full p-4 flex items-center justify-between">
        <h3 className="font-serif text-xl text-gray-800">
          Total Price:
          <span className="text-blue-500 ml-2 md:text-3xl text-xl">$100</span>
        </h3>
        <button className="bg-red-500 hover:bg-red-600 rounded-md text-white md:p-2 p-1">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ContainerBox;
