import React, { useEffect, useState } from 'react'
import useDarkmode from '../../Hooks/useDarkMode';
import { FaSearch } from 'react-icons/fa';

function AppointmentSubheader({  filterBooking = () => { alert('functionality note added ') } }) {
    const [isDark] = useDarkmode()
    const [filterData, setFilterData] = useState({
        keyWord: '',
        branchId: '',
        fromDate: new Date().toISOString().split('T')[0],
        toDate: new Date().toISOString().split('T')[0],

    })
    const handleFilterData = (e) => {
        const { name, value } = e.target
        setFilterData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    useEffect(() => {

        let c = null

        c = setTimeout(() => {
            // getdailyBooking({ page, keyword: keyWord, perPage, bookingDate: new Date().toISOString().split('T')[0] })
            filterBooking(filterData)
        }, 500)

        return () => {
            clearTimeout(c)
        }
    }, [filterData])
    return (
        <div className="w-full    justify-start items-center text-sm flex flex-col md:flex-row  ">

            <div className={`flex    rounded-md p-3 md:flex-col justify-start   md:justify-center gap-3 md:items-start items-center  `}>
            <p className={`flex w-3/12  ${isDark ? "text-white" : "text-black"}`}>
                        Search
                    </p>
                <div className={`flex relative z-10`}>
                    <span className='absolute top-0 bottom-0 left-3 flex items-center'>
                        <FaSearch className={`${isDark ? "bg-darkIconAndSearchBg" : "bg-light"} text-base`} style={{ color: "#80808f" }} />
                    </span>
                    <input
                        type="text"
                        className={`pl-9 py-2 w-96 outline-none dark:bg-darkIconAndSearchBg bg-light rounded-lg`}
                        placeholder='Search...'
                        onChange={handleFilterData}
                        name='keyWord'
                        value={filterData?.keyWord}
                    />
                </div>

            </div>
             
            <div className={` flex   rounded-md p-2 md:flex-col justify-start   md:justify-center gap-4 md:items-start items-center   `}>

                <div className="flex   rounded-md p-2 md:flex-col justify-start   md:justify-center  gap-2 md:items-start items-center   ">

                    <p className={`flex w-3/12  ${isDark ? "text-white" : "text-black"}`}>
                        From
                    </p>
                    <input name='fromDate'
                        className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                        onChange={handleFilterData} defaultValue={new Date().toISOString().split('T')[0]} type="date" />
                </div>
            </div>
            <div className={` flex   rounded-md p-2 md:flex-col justify-start   md:justify-center gap-4 md:items-start items-center   `}>

                <div className="flex   rounded-md p-2 md:flex-col justify-start   md:justify-center  gap-2 md:items-start items-center   ">

                    <p className={`flex w-3/12  ${isDark ? "text-white" : "text-black"}`}>
                        To
                    </p>
                    <input
                        className="form-control w-9/12 md:w-full outline-none  rounded-md px-4 py-2 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                        onChange={handleFilterData} name='toDate' min={filterData?.to} defaultValue={new Date().toISOString().split('T')[0]} type="date" />
                </div>
            </div>



        </div>

    )
}

export default AppointmentSubheader

    ;