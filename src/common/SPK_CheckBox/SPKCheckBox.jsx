import React, { useState } from 'react';

const SPKCheckBox = ({
  name,
  initialValue = false, // Default initial state
  className,
  displayName,
}) => {
  const [isChecked, setIsChecked] = useState(initialValue); // Internal state management

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked); // Update internal state
    console.log("Checkbox changed:", checked); // Log checkbox state change
  };

  return (
    <div className={`${className} p-2 space-y-2`}>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={isChecked} // Controlled internally
          onChange={handleCheckboxChange}
          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
        <span className="ml-2 text-sm font-medium text-gray-700">{displayName}</span>
      </label>
    </div>
  );
};

export default SPKCheckBox;
