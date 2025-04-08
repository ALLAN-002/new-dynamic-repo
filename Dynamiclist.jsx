import React, { useState } from "react";
import NewList from "./NewList";

const Dynamiclist = () => {
  const [item, setItem] = useState("");
  const [newList, setNewList] = useState([]);

  const handleAddItem = () => {
    if (item.trim() !== "") {
      setNewList([...newList, item]);
      setItem(""); // Clear input after adding
    }
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md *:flex flex-col p-7 min-h-[550px] rounded-xl">
      {/*------------title-----------*/}
      <div className="flex items-center mt-7 gap-2">
        <h1 className="text-3xl font-bold text-teal-600">Dynamic List Manager</h1>
      </div>

      {/*---------------input field----------*/}
      <div className="flex items-center bg-gray-500 my-7 rounded">
        <input
          className="bg-transparent border-0 outline-teal-500 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          className="border-none bg-blue-500 text-white w-32 h-14 rounded text-lg cursor-pointer font-medium"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>

      <div>
        <NewList items={newList} />
      </div>
    </div>
  );
};

export default Dynamiclist;
