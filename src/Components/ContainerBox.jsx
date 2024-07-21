import React, { useState } from "react";
import Card from "./Card";

const ContainerBox = () => {
  const [data, setData] = useState({
    itemName: "",
    itemPrice: "",
  });
  const [items, setItems] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!data.itemPrice || !data.itemName) {
      alert("Please add some items!");
    } else {
      setItems([...items, data]);
    }
    setData({
      itemName: "",
      itemPrice: "",
    });
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRemoveItem = (itemToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
  };

  const handleClearAllItem = () => {
    setItems([]);
  };

  const totalPrice = () => {
    return items.reduce(
      (total, item) => total + parseFloat(item.itemPrice || 0),
      0
    );
  };

  return (
    <div className="bg-white md:min-h-[550px] md:max-h-[550px] w-full h-full md:min-w-[580px] md:max-w-[580px] rounded-md overflow-hidden relative shadow-md">
      <div className="p-3 h-full w-full overflow-y-auto pb-16">
        <h2 className="text-2xl text-gray-600 font-semibold mb-5">
          Expense Tracker
        </h2>
        <div>
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center justify-center flex-wrap md:rounded-2xl rounded-b-3xl shadow-md md:pb-5 pb-10 p-2 md:shadow-md"
          >
            <input
              name="itemName"
              value={data.itemName}
              onChange={handleInputChanges}
              type="text"
              placeholder="Item name"
              className="w-full md:w-52 md:mr-2 mr-0 mb-2 md:mb-0 p-3 rounded-md bg-gray-100 outline-blue-300"
            />
            <input
              name="itemPrice"
              value={data.itemPrice}
              onChange={handleInputChanges}
              type="number"
              placeholder="Item price"
              className="w-full md:w-52 md:mr-2 mr-0 mb-2 md:mb-0 p-3 rounded-md bg-gray-100 outline-blue-300"
            />
            <button className="w-full md:w-14 md:p-3 p-2 md:rounded-md rounded-b-xl bg-blue-500 hover:bg-blue-600 text-white">
              Add
            </button>
            <div className="mt-5 flex justify-center items-center md:w-96 w-80">
              <p className="text-center text-gray-500 text-sm px-2">
                Create your market list here to find out the cost of each item
                and the total expense
              </p>
            </div>
          </form>
        </div>
        <div className="mt-8">
          <div>
            {items.map((item, index) => {
              return (
                <Card
                  key={index}
                  item={item}
                  handleRemoveItem={handleRemoveItem}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 absolute bottom-0 left-0 w-full p-4 flex items-center justify-between">
        <h3 className="font-semibold text-xl text-gray-800">
          Total Price:
          <span className="text-blue-500 ml-2 md:text-2xl text-xl">
            ${totalPrice()}
          </span>
        </h3>
        <button
          onClick={handleClearAllItem}
          className="bg-red-500 hover:bg-red-600 rounded-md text-white md:p-2 p-1"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ContainerBox;
