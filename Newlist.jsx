import React from "react";

const NewList = ({ items }) => {
  return (
    <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default NewList;
