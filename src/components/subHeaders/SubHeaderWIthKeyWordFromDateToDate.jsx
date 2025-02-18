import React, { useEffect, useState } from "react";
import useDarkmode from "../../Hooks/useDarkMode";
import { FaSearch } from "react-icons/fa";
import SPKBTNFilter from "../../common/Button/SPKBTNFilter";

function SubHeaderWIthKeyWordFromDateToDate({
    coloumns = [],
    changeColoumn = () => {
        alert("Implement column selection logic");
    },
    filterData = {
        fromDate: new Date().toISOString().split("T")[0],
        toDate: new Date().toISOString().split("T")[0],
        keyWord: "",
    },
    handleFilterData = () => {
        alert("Functionality not added");
    },
}) {
    const [isDark] = useDarkmode();
    const [filter, setFilter] = useState(false);
    const [filteredColumns, setFilteredColumns] = useState(new Set());

    const handleSelectedColumn = (coloumn) => {
        setFilteredColumns((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(coloumn)) {
                newSet.delete(coloumn);
            } else {
                newSet.add(coloumn);
            }
            return newSet;
        });
    };

    //   useEffect(() => {
    //     let timeoutId;
    //     clearTimeout(timeoutId)
    //     if (filter) {
    //         timeoutId = setTimeout(() => {
    //             setFilter(false);
    //         }, 4000);
    //     }

    //     return () => {
    //         if (timeoutId) {
    //             clearTimeout(timeoutId);
    //         }
    //     };
    // }, [filter]);


    useEffect(() => {
        changeColoumn([...filteredColumns]); // Convert Set to array
    }, [filteredColumns]);

    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-4 text-sm py-2 ">
            {/* Search Input */}
            <div className="flex flex-col   items-center md:items-start w-full   md:w-auto gap-3">
                <p className={`font-medium ${isDark ? "text-white" : "text-black"}`}>
                    Search
                </p>
                <div className="relative w-full md:w-96">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                        <FaSearch className={`${isDark ? "bg-darkIconAndSearchBg" : "bg-light"} text-gray-500`} />
                    </span>
                    <input
                        type="text"
                        className="pl-9 py-2 w-full outline-none bg-light dark:bg-darkIconAndSearchBg rounded-lg"
                        placeholder="Search..."
                        onChange={handleFilterData}
                        name="keyWord"
                        value={filterData?.keyWord}
                    />
                </div>
            </div>


            {/* Filter Section */}
            <div className="flex flex-col md:flex-row  items-end gap-4">

                <div className="relative w-24">
                    <SPKBTNFilter text="Filter" onClick={() => setFilter(!filter)} />
                    {filter && (
                        <div className="absolute rounded-xl p-1 top-full   overflow- left-0 z-20  w-56 border   bg-white dark:bg-gray-800 shadow-lg flex flex-col ">
                            {coloumns.map((col) => (
                                <div
                                    key={col.name}
                                    onClick={() => handleSelectedColumn(col.name)}
                                    className={`w-full px-3 py-2 cursor-pointer text-start       } `}
                                >
                                    {col.name}
                                    {filteredColumns.has(col.name) ? "" : '✅'}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Date Inputs */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* From Date */}
                    <div className="flex flex-col">
                        <label className={`font-medium ${isDark ? "text-white" : "text-black"}`}>From</label>
                        <input
                            name="fromDate"
                            type="date"
                            className="outline-none w-full rounded-md px-4 py-2 border bg-light dark:bg-darkIconAndSearchBg text-lightinputTextColor dark:text-white"
                            onChange={handleFilterData}
                            defaultValue={filterData?.fromDate}
                        />
                    </div>

                    {/* To Date */}
                    <div className="flex flex-col">
                        <label className={`font-medium ${isDark ? "text-white" : "text-black"}`}>To</label>
                        <input
                            name="toDate"
                            type="date"
                            className="outline-none w-full rounded-md px-4 py-2 border bg-light dark:bg-darkIconAndSearchBg text-lightinputTextColor dark:text-white"
                            onChange={handleFilterData}
                            min={filterData?.fromDate}
                            defaultValue={filterData?.toDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeaderWIthKeyWordFromDateToDate;
