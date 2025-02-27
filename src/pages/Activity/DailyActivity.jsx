// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function DailyActivity({ activitylog }) {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   // Extract unique years from activitylog
//   const uniqueYears = [...new Set(activitylog.map(item => new Date(item.dateTime).getFullYear()))];

//   // Ensure at least one year is selected
//   const initialYear = uniqueYears[0] || new Date().getFullYear();

//   // Compute unique months AFTER determining the initial year
//   const uniqueMonths = [...new Set(
//     activitylog
//       .filter(item => new Date(item.dateTime).getFullYear() === initialYear)
//       .map(item => new Date(item.dateTime).toLocaleString('en-US', { month: 'long' }))
//   )];

//   // Ensure at least one month is selected
//   const initialMonth = uniqueMonths[0] || "January";

//   // Now define state
//   const [selectedDate, setSelectedDate] = useState({
//     month: initialMonth,
//     year: initialYear,
//   });

//   // Update uniqueMonths when year changes
//   const filteredMonths = [...new Set(
//     activitylog
//       .filter(item => new Date(item.dateTime).getFullYear() === selectedDate.year)
//       .map(item => new Date(item.dateTime).toLocaleString('en-US', { month: 'long' }))
//   )];

//   // Ensure selected month exists in the filtered list
//   if (!filteredMonths.includes(selectedDate.month) && filteredMonths.length > 0) {
//     setSelectedDate(prev => ({ ...prev, month: filteredMonths[0] }));
//   }

//   // Filter activities based on the selected month and year
//   const filteredActivities = activitylog.filter(item => {
//     const itemDate = new Date(item.dateTime);
//     return (
//       itemDate.toLocaleString('en-US', { month: 'long' }) === selectedDate.month &&
//       itemDate.getFullYear() === selectedDate.year
//     );
//   });

//   const handleClick = (api) => {
//     navigate(api);
//   };

//   return (
//     <div className="w-[300px] sm:w-[350px] md:w-[400px] min-h-[600px] max-h-[600px] mx-auto bg-white rounded-lg shadow-md p-4 md:p-6 border border-black overflow-y-auto">
//       {/* Header */}
//       <div className="w-full flex flex-row justify-between items-center border-b border-black px-2 py-2">
//         <div className="ml-2 font-semibold">Activity</div>

//         {/* Dropdown Container */}
//         <div className="relative drop-down">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-100"
//           >
//             📅 {selectedDate.month}, {selectedDate.year} ▼
//           </button>

//           {isOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
//               {uniqueYears.flatMap((year) =>
//                 filteredMonths.map((month) => (
//                   <button
//                     key={`${month}-${year}`}
//                     onClick={() => {
//                       setSelectedDate({ month, year });
//                       setIsOpen(false);
//                     }}
//                     className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${
//                       selectedDate.month === month && selectedDate.year === year
//                         ? "bg-gray-200"
//                         : ""
//                     }`}
//                   >
//                     {month}, {year}
//                   </button>
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-row justify-between">
//         <div>
//           <p className="text-blue-500 text-sm mb-4 ml-2 pt-2">
//             {selectedDate.month}, {selectedDate.year}
//           </p>

//           {/* Timeline Container */}
//           <div className="relative pl-1">
//             {filteredActivities.map((item, index) => {
//               const time = new Date(item.dateTime).toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               });

//               return (
//                 <div key={index} className="relative flex items-start mb-6">
//                   {/* Timeline Line */}
//                   {index !== filteredActivities.length - 1 && (
//                     <div className="absolute left-2 top-6 w-[3px] h-[50px] bg-gray-400"></div>
//                   )}

//                   {/* Status Indicator (Circle) */}
//                   <div
//                     className={`w-5 h-5 rounded-full border-4 z-10 ${
//                       item.status === "green"
//                         ? "border-green-500 bg-green-100"
//                         : item.status === "yellow"
//                         ? "border-yellow-500 bg-yellow-100"
//                         : item.status === "red"
//                         ? "border-red-500 bg-red-100"
//                         : item.status === "blue"
//                         ? "border-blue-500 bg-blue-100"
//                         : "border-gray-500 bg-gray-100"
//                     } flex-shrink-0 relative left-0`}
//                   ></div>

//                   {/* Activity Content */}
//                   <div className="ml-4">
//                     <p
//                       className="text-gray-600 cursor-pointer"
//                       onClick={() => handleClick(item.api)}
//                     >
//                       {item.activity}
//                     </p>
//                     <p className="text-xs text-gray-400">{time}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Year Display */}
//         <div className="pt-4">
//           <p className="text-gray-500 text-xs md:text-sm font-medium mb-2 text-center md:text-left">
//             Select Year
//           </p>
//           <div className="max-h-40 md:max-h-80 overflow-y-auto">
//             {uniqueYears.map((year) => (
//               <button
//                 key={year}
//                 onClick={() => setSelectedDate((prev) => ({ ...prev, year }))}
//                 className={`block w-full text-center md:text-left px-3 py-2 text-gray-700 rounded-md transition ${
//                   selectedDate.year === year
//                     ? "bg-blue-100 text-blue-600"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 {year}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DailyActivity;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DailyActivity({ activitylog }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Extract unique years
  const uniqueYears = [...new Set(activitylog.map(item => new Date(item.dateTime).getFullYear()))];
  const initialYear = uniqueYears[0] || new Date().getFullYear();

  // Compute unique months for the initially selected year
  const uniqueMonths = [...new Set(
    activitylog
      .filter(item => new Date(item.dateTime).getFullYear() === initialYear)
      .map(item => new Date(item.dateTime).toLocaleString('en-US', { month: 'long' }))
  )];

  // Initial state with month & year
  const [selectedDate, setSelectedDate] = useState({
    month: "",
    year: initialYear,
  });

  // Compute months dynamically when the year changes
  const filteredMonths = [...new Set(
    activitylog
      .filter(item => new Date(item.dateTime).getFullYear() === selectedDate.year)
      .map(item => new Date(item.dateTime).toLocaleString('en-US', { month: 'long' }))
  )];

  // Filter activities based on selection
  const filteredActivities = activitylog.filter(item => {
    const itemDate = new Date(item.dateTime);
    return selectedDate.month
      ? itemDate.toLocaleString('en-US', { month: 'long' }) === selectedDate.month &&
      itemDate.getFullYear() === selectedDate.year // Show only selected month & year
      : itemDate.getFullYear() === selectedDate.year; // Show entire year if no month is selected
  });

  const handleYearClick = (year) => {
    setSelectedDate({ month: "", year }); // Reset month when year is selected
  };

  const handleMonthClick = (month, year) => {
    setSelectedDate({ month, year });
    setIsOpen(false);
  };

  const handleClick = (api) => {
    navigate(api);
  };

  return (
    <div className="w-[300px] sm:w-[350px] md:w-[400px] min-h-[600px] max-h-[600px] mx-auto bg-white rounded-lg shadow-md  md:p-6 border border-black overflow-y-auto">
      {/* Header */}
      
        <div className=" w-full flex flex-row justify-between items-center border-b border-black  py-2">
          <div className="ml-2 font-semibold">Activity</div>

          {/* Dropdown Container */}
          <div className="relative drop-down mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-100"
            >
              📅 {selectedDate.month ? `${selectedDate.month}, ${selectedDate.year}` : `${selectedDate.year} (All)`} ▼
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                {filteredMonths.map((month) => (
                  <button
                    key={`${month}-${selectedDate.year}`}
                    onClick={() => handleMonthClick(month, selectedDate.year)}
                    className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${selectedDate.month === month ? "bg-gray-200" : ""
                      }`}
                  >
                    {month}, {selectedDate.year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      


      {/* Content */}
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-blue-500 text-sm my-2 ml-6 pt-2">
            {selectedDate.month ? `${selectedDate.month}, ${selectedDate.year}` : `${selectedDate.year} (All Activities)`}
          </p>

          {/* Timeline Container */}
          <div className="relative pl-1">
            {filteredActivities.length === 0 ? (
              <p className="text-gray-500 text-center">No activities found.</p>
            ) : (
              filteredActivities.map((item, index) => {
                const time = new Date(item.dateTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <div key={index} className="relative flex items-start mb-6 mt-4 ml-4">
                    {/* Timeline Line */}
                    {index !== filteredActivities.length - 1 && (
                      <div className="absolute left-2 top-5 w-[3px] h-[50px] bg-gray-400"></div>
                    )}

                    {/* Status Indicator (Circle) */}
                    <div
                      className={`w-5 h-5 rounded-full border-4 z-10 mt-1 ${item.status === "green"
                          ? "border-green-500 bg-green-100"
                          : item.status === "yellow"
                            ? "border-yellow-500 bg-yellow-100"
                            : item.status === "red"
                              ? "border-red-500 bg-red-100"
                              : item.status === "blue"
                                ? "border-blue-500 bg-blue-100"
                                : "border-gray-500 bg-gray-100"
                        } flex-shrink-0 relative left-0`}
                    ></div>

                    {/* Activity Content */}
                    <div className="ml-4">
                      <p
                        className="text-gray-500 cursor-pointer"
                        onClick={() => handleClick(item.api)}
                      >
                        {item.activity}
                      </p>
                      <p className="text-xs text-gray-400">{time}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Year Selection */}
        <div className="pt-4">
          <p className="text-blue-500 text-sm md:text-sm font-medium mb-2 text-center md:text-left ">
            Select Year
          </p>
          <div className="max-h-40 md:max-h-80 overflow-y-auto mr-2 ">
            {uniqueYears.map((year) => (
              <button
                key={year}
                onClick={() => handleYearClick(year)}
                className={`block w-full text-center md:text-left px-3 py-2 text-gray-700 rounded-md transition ${selectedDate.year === year && !selectedDate.month
                    ? "bg-blue-100 text-blue-600"
                    : "hover:bg-gray-100"
                  }`}
              >
                {year} {selectedDate.year === year && !selectedDate.month ? "(All)" : ""}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyActivity;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function DailyActivity({ activitylog }) {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   // Extract unique months and years from activitylog
//   const uniqueMonths = [...new Set(activitylog.map(item => new Date(item.dateTime).toLocaleString('en-US', { month: 'long' })))];
//   const uniqueYears = [...new Set(activitylog.map(item => new Date(item.dateTime).getFullYear()))];

//   // Set initial selected month and year based on the first log
//   const [selectedDate, setSelectedDate] = useState({
//     month: uniqueMonths[0] || "January",
//     year: uniqueYears[0] || new Date().getFullYear(),
//   });

//   // Filter activities based on the selected month and year
//   const filteredActivities = activitylog.filter(item => {
//     const itemDate = new Date(item.dateTime);
//     return (
//       itemDate.toLocaleString('en-US', { month: 'long' }) === selectedDate.month &&
//       itemDate.getFullYear() === selectedDate.year
//     );
//   });

//   const handleClick = (api) => {
//     navigate(api);
//   };

//   return (
//     <div className="w-[300px] sm:w-[350px] md:w-[400px] min-h-[600px] mx-auto bg-white rounded-lg shadow-md p-4 md:p-6 flex">
//       {/* Main Content */}
//       <div className="flex-grow">
//         {/* Header */}
//         <div className="h-10 flex flex-row justify-between items-center">
//           <div className="ml-2 font-semibold">Activity</div>

//           {/* Dropdown Container */}
//           <div className="relative drop-down">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="flex items-center gap-2 px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-100"
//             >
//               📅 {selectedDate.month}, {selectedDate.year} ▼
//             </button>

//             {isOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
//                 {uniqueYears.flatMap((year) =>
//                   uniqueMonths.map((month) => (
//                     <button
//                       key={`${month}-${year}`}
//                       onClick={() => {
//                         setSelectedDate({ month, year });
//                         setIsOpen(false);
//                       }}
//                       className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${
//                         selectedDate.month === month && selectedDate.year === year
//                           ? "bg-gray-200"
//                           : ""
//                       }`}
//                     >
//                       {month}, {year}
//                     </button>
//                   ))
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Selected Month & Year Display */}
//         <p className="text-blue-500 text-sm mb-4">
//           {selectedDate.month}, {selectedDate.year}
//         </p>

//         {/* Timeline Content */}
//         <div className="relative pl-8 mt-4">
//           {filteredActivities.map((item, index) => {
//             const time = new Date(item.dateTime).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             });

//             return (
//               <div key={index} className="relative flex items-start mb-6">
//                 {/* Timeline Line */}
//                 {index !== filteredActivities.length - 1 && (
//                   <div className="absolute left-2 top-6 w-[3px] h-[50px] bg-gray-400"></div>
//                 )}

//                 {/* Status Indicator (Circle) */}
//                 <div
//                   className={`w-5 h-5 rounded-full border-4 z-10 ${
//                     item.status === "green"
//                       ? "border-green-500 bg-green-100"
//                       : item.status === "yellow"
//                       ? "border-yellow-500 bg-yellow-100"
//                       : item.status === "red"
//                       ? "border-red-500 bg-red-100"
//                       : item.status === "blue"
//                       ? "border-blue-500 bg-blue-100"
//                       : "border-gray-500 bg-gray-100"
//                   } flex-shrink-0 relative left-0`}
//                 ></div>

//                 {/* Activity Content */}
//                 <div className="ml-4">
//                   <p
//                     className="text-gray-600 cursor-pointer"
//                     onClick={() => handleClick(item.api)}
//                   >
//                     {item.activity}
//                   </p>
//                   <p className="text-xs text-gray-400">{time}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Year Selection Sidebar */}
//       <div className="w-16 md:w-24 border-l pl-2 md:pl-4">
//         <p className="text-gray-500 text-xs md:text-sm font-medium mb-2 text-center md:text-left">
//           Select Year
//         </p>
//         <div className="max-h-40 md:max-h-80 overflow-y-auto">
//           {uniqueYears.map((year) => (
//             <button
//               key={year}
//               onClick={() => setSelectedDate((prev) => ({ ...prev, year }))}
//               className={`block w-full text-center md:text-left px-3 py-2 text-gray-700 rounded-md transition ${
//                 selectedDate.year === year
//                   ? "bg-blue-100 text-blue-600"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               {year}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DailyActivity;


