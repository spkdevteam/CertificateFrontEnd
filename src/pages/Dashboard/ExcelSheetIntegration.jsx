import { useColorScheme } from '@mui/material';
import React, { useState, useEffect, useRef } from "react";
import * as XLSX from "xlsx";
import { FiUpload, FiMinusCircle } from "react-icons/fi";
import SPKBTNView from '../../common/Button/SPKBTNView';
import SPKBTNInsert from '../../common/Button/SPKBTNInsert';

function Excel() {
  const [data, setData] = useState([]);
  const [selectedMainField, setSelectedMainField] = useState("");
  const [selectedSubField, setSelectedSubField] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [mergedData, setMergedData] = useState([]);
  const [filteredColumns, setFilteredColumns] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // New state to toggle preview visibility
  
  // Reference for the dropdown to detect clicks outside
  const dropdownRef = useRef(null);

  const mainFields = {
    Company: {
      companyName: "Company Name",
      companyPhone: "Company Phone",
      companyEmail: "Company Email",
    },
    Invoice: {
      invoiceNumber: "Invoice Number",
      date: "Date",
      amount: "Amount",
      tax: "Tax",
    },
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e) => {
      const fileData = e.target.result;
      const workbook = XLSX.read(fileData, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      setData(parsedData);
      setFilteredColumns(Object.keys(parsedData[0] || {}));
      setFileUploaded(true);
      setMergedData([]);
    };
  };

  const handleMerge = () => {
    if (!selectedMainField || !selectedSubField || !selectedColumn) return;
    const newMergedData = data.map((row, index) => {
      const existingMergedRow = mergedData[index] || {}; 
      return {
        ...existingMergedRow,
        [`${mainFields[selectedMainField][selectedSubField]}`]: row[selectedColumn] || "", 
      };
    });

    if (searchQuery && !filteredColumns.includes(searchQuery)) {
      newMergedData.forEach((row) => {
        row[searchQuery] = searchQuery;
      });
    }

    setMergedData(newMergedData);
    setShowPreview(!showPreview); // Toggle the preview visibility
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  // Detect clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 w-full ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl">
        <h2 className="text-sm font-semibold text-center text-gray-700 mb-4">
          Upload & Merge Data
        </h2>

        <label className="w-auto flex text-sm items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer hover:bg-blue-600">
          <FiUpload className="text-lg" />
          <span>Select an Excel file</span>
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} hidden className="hidden" />
        </label>
      
        {fileUploaded && (
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Select Main Field</h3>
              <select className="p-2 border rounded w-full" value={selectedMainField} onChange={(e) => { setSelectedMainField(e.target.value); setSelectedSubField(""); }}>
                <option value="">-- Select Main Field --</option>
                {Object.keys(mainFields).map((field, idx) => (
                  <option key={idx} value={field}>{field}</option>
                ))}
              </select>
            </div>
            {selectedMainField && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Select Sub Field</h3>
                <select className="p-2 border rounded w-full" value={selectedSubField} onChange={(e) => setSelectedSubField(e.target.value)}>
                  <option value="">-- Select Sub Field --</option>
                  {Object.entries(mainFields[selectedMainField]).map(([key, label], idx) => (
                    <option key={idx} value={key}>{label}</option>
                  ))}
                </select>
              </div>
            )}
            <div className="relative" ref={dropdownRef}>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Select a Column</h3>
              <input type="text" placeholder="Search column..." value={searchQuery} onClick={() => setShowDropdown(true)} onChange={(e) => setSearchQuery(e.target.value)} className="p-2 border rounded w-full mb-2" />
              {showDropdown && (
                <div className="absolute w-full bg-white border rounded shadow-md max-h-40 overflow-auto z-10">
                  {filteredColumns.map((col, idx) => (
                    <div key={idx} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setSelectedColumn(col); setSearchQuery(col); closeDropdown(); }}>{col}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {fileUploaded && (selectedMainField || searchQuery) && (
          <div className="mt-6 text-center">
            <SPKBTNView onClick={handleMerge} text={'Preview'} />
          </div>
        )}

        {showPreview && mergedData.length > 0 && (
          <div className="mt-6 overflow-x-auto w-full">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Merged Data</h3>
            <table className="w-full bg-white border border-gray-200 text-sm">
              <thead>
                <tr>
                  {Object.keys(mergedData[0]).map((header, index) => (
                    <th key={index} className="px-4 py-2 border-b text-left bg-gray-100">
                      {header}
                      <button className="ml-2 text-red-500" onClick={() => setMergedData(prevData => prevData.map(row => { const updatedRow = { ...row }; delete updatedRow[header]; return updatedRow; }))}>
                        <FiMinusCircle />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mergedData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {Object.values(row).map((value, idx) => (
                      <td key={idx} className="px-4 py-2 border">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Excel;
