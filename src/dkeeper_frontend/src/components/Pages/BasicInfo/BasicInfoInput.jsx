import React from "react";

const BasicInfoInput = ({ name, value, placeholder, onChange, label }) => {
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default BasicInfoInput;
