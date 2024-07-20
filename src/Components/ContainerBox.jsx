import React from "react";

const ContainerBox = () => {
  return (
    <div className="bg-white min-h-[450px] max-h-[450px] min-w-[550px] max-w-[550px] rounded-md overflow-y-auto relative">
      <div className="bg-gray-100 absolute bottom-0 left-0 w-full p-4 flex items-center justify-between">
        <h3 className="font-serif text-xl text-gray-800">
          Total Price: <span className="text-blue-500 text-3xl">$100</span>
        </h3>
        <button className="bg-red-500 hover:bg-red-600 rounded-md text-white p-2">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ContainerBox;
