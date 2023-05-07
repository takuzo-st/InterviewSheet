import React from "react";

const BasicInfoInput = ({ name, value, placeholder, onChange, label }) => {
  return (
    <p>
      {label}{" "}
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </p>
  );
};

export default BasicInfoInput;
