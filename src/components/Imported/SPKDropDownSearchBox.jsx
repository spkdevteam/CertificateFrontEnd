import React, { useState, useEffect, useRef } from "react";
import useCertificatehook from "../../Hooks/useCertificateHooks";

const SPKDropDownSearchBox = ({ name, value = '', single = false, className, onSelect }) => {
  const [dropdownValues, setDropdownValues] = useState([]); // Store API response
  const [searchText, setSearchText] = useState(""); // Store user input
  const [selectedItems, setSelectedItems] = useState([]); // Selected values
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
  const inputRef = useRef(null);
  const { searchCertificate } = useCertificatehook(); // API call from custom hook

  useEffect(() => {
    setSearchText(value)
  }, [value])


  useEffect(() => {
    if (selectedItems.length > 0) {
      onSelect(selectedItems[0]); // Call onSelect only when user selects
    }
  }, [selectedItems]);



  useEffect(() => {

    if (!searchText?.trim()) {
      setDropdownValues([]);
      setShowDropdown(false);
      return;
    }

    serchCertificte()




  }, [searchText]); // Runs whenever searchText changes

  const serchCertificte = async () => {
    const response = await searchCertificate({ searchKey: searchText });
    console.log("Api Response", response)

    if (response?.status && Array.isArray(response.data)) {

      setDropdownValues(response.data);
      setShowDropdown(true);
    } else {
      setDropdownValues([]);
      setShowDropdown(false);
    }
  }
  console.log("showDropdown",showDropdown);
  






  

  const handleSelect = (certificateNumber) => {
    if (!certificateNumber) return; // Prevents unnecessary calls

    setSelectedItems([certificateNumber]); 
    setSearchText(certificateNumber)// Ensures correct selection
    setShowDropdown(false);

    if (onSelect) {
      onSelect(certificateNumber); // Sends data to parent (ViewCertificate)
    }
    setTimeout(()=>{
      setShowDropdown(false)
    },0)
  };


  return (
    <div className={`relative ${className}`}>
      {/* Input Field */}
      <input
        name={name}
        ref={inputRef}
        type="text"
        value={searchText}
        autoComplete="off"
        autoCorrect="off"
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




