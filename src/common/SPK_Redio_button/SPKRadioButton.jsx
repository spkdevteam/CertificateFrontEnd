import React, { useState } from "react";

const SPKRadioButton = ({ name, options, className, displayName, defaultValue, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]);

  const handleChange = (option) => {
    setSelectedValue(option);
    if (onChange) onChange(option);
  };

  return (
    <div className={`${className} p-2 space-y-2`}>
      <label className="block text-sm font-medium text-gray-700">{displayName}</label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2 cursor-pointer select-none">
            <input
              type="radio"
              name={name}
              value={option}
              checked={selectedValue === option}
              onChange={() => handleChange(option)}
              className="hidden"
            />
            <div
              className={`h-4 w-4 rounded-full border-2 transition duration-150 ease-in-out flex items-center justify-center ${
                selectedValue === option ? "border-blue-600" : "border-gray-300"
              }`}
            >
              {selectedValue === option && <div className="h-2 w-2 bg-blue-600 rounded-full"></div>}
            </div>
            <span className="text-gray-700 select-none">{option}</span> {/* Prevents text cursor */}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SPKRadioButton;
