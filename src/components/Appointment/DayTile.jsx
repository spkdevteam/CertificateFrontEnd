import { div } from "framer-motion/client"
import { useEffect } from "react"

const DayTile = ({ dayData }) => {


    return (
        <div className="w-full p-1 h-full flex flex-wrap justify-center">

            {dayData?.timeSlot?.map((bookingSummary, index) => (
                <div key={index} className="   w-full h-full    rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                    {console.log(bookingSummary, 'bookingSummarybookingSummarybookingSummary')}
                    <p className="text-2xl font-bold text-center   dark:text-gray-100     text-gray-900  ">{bookingSummary?.count}</p>
                    <p className="text-sm text-center dark:text-gray-100     text-gray-900  ">Booking</p>
                </div>
            ))}
            {dayData?.data?.map((bookingSummary, index) => (
                <div key={index} className="   w-full h-full    rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                    {console.log(bookingSummary, 'bookingSummarybookingSummarybookingSummary')}
                    <p className="text-2xl font-bold text-center   dark:text-gray-100     text-gray-900  ">{bookingSummary?.count}</p>
                    <p className="text-sm text-center dark:text-gray-100     text-gray-900  ">Booking</p>
                </div>
            ))}
        </div>
    )
}

export default DayTile