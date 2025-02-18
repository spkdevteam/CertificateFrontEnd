import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useDarkmode from '../../Hooks/useDarkMode';
import { FiFilter } from 'react-icons/fi';
import { PiExportBold } from "react-icons/pi";
import ModalFilter from '../modal/ModalFilter';

function TableComponent() {
  const [isDark, setDarkMode] = useDarkmode();
  const [toggleFilter, setToggleFilter] = useState(false);
  const filtermenuRef = useRef(null);
  const filterButtonRef = useRef(null);

  const handleClickOutside = (event) => {
    // Check if the click is outside the modal and not on the filter button
    if (
      filtermenuRef.current &&
      !filtermenuRef.current.contains(event.target) &&
      filterButtonRef.current &&
      !filterButtonRef.current.contains(event.target)
    ) {
      setToggleFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='md:container md:mx-auto px-0 md:px-8 pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg'>
        <div className='flex flex-col border-[1px] dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-full'>
          <div className='flex justify-between items-center h-24'>
            <div className={`relative z-10`}>
              <span className='absolute top-0 bottom-0 left-3 flex items-center'>
                <FaSearch className={`${isDark ? "bg-darkIconAndSearchBg" : "bg-light"}`} style={{ color: "#80808f" }} />
              </span>
              <input
                type="text"
                className={`pl-9 py-2 w-96 outline-none dark:bg-darkIconAndSearchBg bg-light rounded-lg`}
                placeholder='Search All Patients...'
              />
            </div>
            <div className='flex gap-5'>
              <span className='relative'>
                <button
                  ref={filterButtonRef}
                  onClick={() => setToggleFilter(!toggleFilter)}
                  type="button"
                  className="btn btn-sm flex items-center px-3 py-1.5 bg-lightBgBtn text-lightBtntext hover:bg-lightBtntext hover:text-white dark:bg-darkBtn dark:text-white rounded-md"
                >
                  <FiFilter className="text-lg mr-1" />
                  Filter
                </button>
              </span>
              {toggleFilter && (
                <div className='absolute top-6 right-52 z-[999]' ref={filtermenuRef}>
                  <ModalFilter />
                </div>
              )}
              <span>
                <button className='btn btn-sm flex items-center px-3 py-1.5 rounded-md bg-lightBgBtn text-lightBtntext hover:bg-lightBtntext hover:text-white dark:bg-darkBtn dark:text-white'>
                  <PiExportBold className="text-lg mr-1" />
                  export
                </button>
              </span>
            </div>
          </div>
          <div className='overflow-x-auto'>
            <table className="min-w-full mt-2">
              <thead className="bg-[#C9FEFF] dark:bg-darkBtn dark:text-white">
                <tr className='border-b border-dashed border-lighttableBorderColor'>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    Serial No
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    First
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    Last
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    Abc
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-darkAccent">
                {/** Example rows */}
                <tr className="border-b border-dashed border-lighttableBorderColor">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-gray-900">
                    1
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Nick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Nick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Nick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-blue-800 bg-blue-100 rounded-full">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Nick</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Nick</td>
                </tr>
                <tr className="border-b border-dashed border-lighttableBorderColor">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    2
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Ana</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Ana</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Ana</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-green-800 bg-green-100 rounded-full">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-dashed border-lighttableBorderColor dark:border-darkSecondary">
                  <th scope="row" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    3
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Larry</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Larry</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-tableTextColor">Larry</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-red-800 bg-red-100 rounded-full">
                      New
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableComponent;


{/* <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
  <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-red-800 bg-red-100 rounded-full">
    New
  </span>
</td> */}

{/* <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
  <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-green-800 bg-green-100 rounded-full">
    Approved
  </span>
</td> */}
