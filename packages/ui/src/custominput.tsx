import React from "react";

const Custominput = ({
  type = "",
  value = "",
  onChnage = () => {},
  onClick = () => {},
  name = "",
  Placeholder = "",
  maxlength = "",
  label = "",
}) => {
  return (
    <>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      name={name}
      id={name}
      placeholder={Placeholder}
      onChange={onChnage}
      max={maxlength}
      onClick={onClick}
    />
    </>
  );
};

export default Custominput;
