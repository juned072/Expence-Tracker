import React from "react";

const Card = ({ item, handleRemoveItem }) => {
  return (
    <div className="shadow-md p-2 rounded-md flex justify-between items-center">
      <div>
        <h3 className="text-lg text-gray-800">{item.itemName}</h3>
        <h4 className="text-blue-500">${item.itemPrice}</h4>
      </div>
      <div>
        <button
          onClick={() => handleRemoveItem(item)}
          className="bg-red-500 hover:bg-red-600 text-white rounded-md md:p-2 p-1"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
