import React, { useState, useEffect, useRef } from "react";
import useCertificatehook from "../../Hooks/useCertificateHooks";

const SPKDropDownSearchBox = ({ name, single = false, className, onSelect }) => {
  const [dropdownValues, setDropdownValues] = useState([]); // Store API response
  const [searchText, setSearchText] = useState(""); // Store user input
  const [selectedItems, setSelectedItems] = useState([]); // Selected values
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
  const inputRef = useRef(null);
  const { searchCertificate } = useCertificatehook(); // API call from custom hook


  useEffect(()=>{
    onSelect ({target:{name:name,value:selectedItems[0]}})
  },[selectedItems])


  useEffect(() => {
    // If search text is empty, clear dropdown list
    if (!searchText.trim()) {
      setDropdownValues([]);
      setShowDropdown(false);
      return;
    }

    // Debounce API call
    const timeoutId = setTimeout(async () => {
      console.log("API Call with:", searchText);
      const response = await searchCertificate({ searchKey: searchText });
      console.log("Api Response",response)

      if (response?.status && Array.isArray(response.data)) {

        setDropdownValues(response.data);
        setShowDropdown(true);
      } else {
        setDropdownValues([]);
        setShowDropdown(true);
      }
    }, 1000); // Delay of 300ms

    // Cleanup previous timeout if user types again
    return () => clearTimeout(timeoutId);
  }, [searchText]); // Runs whenever searchText changes

  // Handle selection of an item from dropdown
  const handleSelect = (certificateNumber) => {
    let updatedSelection = single ? [certificateNumber] : [...selectedItems, certificateNumber];
    console.log("Selected Certificate",certificateNumber)

    setSelectedItems(updatedSelection);
    // setSearchText(""); // Clear input after selection
    setShowDropdown(false);

    if (onSelect) {
      onSelect(certificateNumber);
    }
    setTimeout(() => inputRef.current?.focus(), 0);
  };



  return (
    <div className={`relative ${className}`}>
      {/* Input Field */}
      <input
        name={name}
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        className="border p-2 w-full"
      />

     {showDropdown && (
    <ul className="absolute w-full bg-white border rounded mt-1 max-h-40 overflow-auto shadow-lg">
        {dropdownValues.length > 0 ? (
            dropdownValues.map((certificateNumber, index) => (
                <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                    onClick={() => handleSelect(certificateNumber)}
                >
                    {certificateNumber}
                </li>
            ))
        ) : (
            <li className="p-2 text-gray-500 cursor-default">No Data Found</li>
        )}
    </ul>
)}


    </div>
  );
};

export default SPKDropDownSearchBox;




