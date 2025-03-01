import React, { useState, useEffect, useRef } from "react";
import useCertificatehook from "../../Hooks/useCertificateHooks";

const SPKDropDownSearchBox = ({
  name,
  single = false, // Allow single/multiple selection
  className,
  onSelect,
}) => {
  const [dropdownValues, setDropdownValues] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const{searchCertificate}=useCertificatehook()

  // Fetch dropdown options dynamically

  // Fetch values based on input text
  // useEffect(() => {
  //   if (searchText.length > 0) {
  //     const fetchValues = async () => {
  //       const newValues = await fetchDropdownValues(searchText);
  //       setDropdownValues(newValues);
  //       setShowDropdown(true);
  //     };
  //     fetchValues();
  //   } else {
  //     setDropdownValues([]);
  //     setShowDropdown(false);
  //   }
  // }, [searchText]);


const fetchDropdownValues=async(search)=>{
  try {
    const response=await searchCertificate(search);
    return response
    
  } catch (error) {
    
  }
}


  // Handle selection
  const handleSelect = (item) => {
    let updatedSelection;
    if (single) {
      updatedSelection = [item]; // Single selection mode
    } else {
      updatedSelection = selectedItems.some((i) => i.id === item.id)
        ? selectedItems.filter((i) => i.id !== item.id) // Deselect if already selected
        : [...selectedItems, item]; // Add if not selected
    }

    setSelectedItems(updatedSelection);
    setSearchText(""); // Clear input after selection
    setShowDropdown(false); // Hide dropdown

    // Keep focus in input field after selecting
    if(onSelect){
      setTimeout(() => inputRef.current?.focus(), 0);


    }
  };

  // Remove selected item
  const handleRemove = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input with selected tags inside */}
      <div
        className="flex items-center flex-wrap w-full p-2 border rounded cursor-text relative min-h-[40px]"
        onClick={() => inputRef.current?.focus()} // Click anywhere to focus input
      >
        {selectedItems.map((item) => (
          <span
            key={item.id}
            className="px-2 py-1 bg-gray-200 rounded text-sm flex items-center space-x-2 m-1"
          >
            {item.label}
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => handleRemove(item.id)}
            >
              ✕
            </button>
          </span>
        ))}
        {/* Input Field with Placeholder */}
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={searchText}
          onChange={(e) => {
            console.log("Search text changed:", e.target.value); // Debug log
            setSearchText(e.target.value);
          }}
        
          placeholder={selectedItems.length === 0 ? "Search..." : ""}
          className="flex-grow p-1 outline-none bg-transparent placeholder-gray-500 min-w-[100px]"
          autoFocus
        />
      </div>

      {/* Dropdown List */}
      {showDropdown && dropdownValues.length > 0 && (
        <ul className="absolute w-full bg-white border rounded mt-1 max-h-40 overflow-auto shadow-lg">
          {dropdownValues.map((item) => (
            <li
              key={item.id}
              className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SPKDropDownSearchBox;
