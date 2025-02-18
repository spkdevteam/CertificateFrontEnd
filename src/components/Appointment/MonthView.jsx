import React, { useEffect, useState } from "react";
import { div } from "framer-motion/client";
import Leave from "../../components/Appointment/Leave";
import Appointment from "../../components/Appointment/Booking";
import { FaPlus } from "react-icons/fa";
// import VacantSlot from "../Calender/VacantSlot";
// import NewAppointment from "../Calender/NewAppointMent";
import { useSelect } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import useGetBookingData from "../../Hooks/useGetBookingData";

import { pushComponentToModal, switchModal } from "../../store/handleModal";
import NewBooking from "../../components/Appointment/booking/NewBooking";
import { animate } from "framer-motion";
import { changeCalenderView, updateActiveDate, updateBookingStatus } from "../../store/appointmentStore";
import MonthlyCalender from "../../pages/Calender/MonthlyCalender";
import { weekDataTemplate } from "../../constant/WeekSummary";
import useGetMonthlyBookingSummary from "../../Hooks/useGetMonthlyBookingSummary";
import generateMonthlyBookingSummary from "../../helper/generateMonthlyBookingSummary";
import DayTileInMonth from "./DayTileInMonth";
import DayTile from "./DayTile";

const tempbooking = {
  "data": [
    [
      null,
      {
        "name": " ",
        "_id": " "
      },
      {
        "name": "",
        "_id": ""
      }
    ],
    [
      {
        "start": "10:01",
        "end": "11:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "11:01",
        "end": "12:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "12:01",
        "end": "13:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "13:01",
        "end": "14:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "14:01",
        "end": "15:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "15:01",
        "end": "16:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "16:01",
        "end": "17:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "17:01",
        "end": "18:00"
      },
      [

      ],
      [

      ]
    ],
    [
      {
        "start": "18:01",
        "end": "19:00"
      },
      [

      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T18:01:00.000Z",
          "slotTo": "2024-12-05T19:00:00.000Z"
        }
      ]
    ]
  ]
}

const MonthView = () => {
  useGetMonthlyBookingSummary()
  const [creatButton, setCreateButton] = useState(false)
  const [mouseOverTile, setMouseOverTile] = useState({ xIndex: null, yIndex: null })
  const [showNewAppointMent, setShowNewAppointMent] = useState(false)
  const [selectedSlot, setSelelctedSlot] = useState(null)
  const seletedDate = useSelector((state) => state?.appointment?.activeDate)
  const listCategory = useSelector((state) => state.appointment.listCategory)
  const branchId = useSelector((state) => state.appointment.branch)
  const [mySlots, setMySlots] = useState([])
  const searchValue = useSelector((state) => state.appointment.searchKey)
  const dispatch = useDispatch()
  const updateBooking = useSelector((state) => state.appointment.updateBooking)
  const booking = useSelector((state) => state.appointment)
  const [bookingSummary, setBookingSummary] = useState([])

  const createBookigSummary = () => {
    const result = generateMonthlyBookingSummary(booking.monthlyBookingData, booking.activeMonthStart, booking.activeMonthEnd)
    console.log(result, '------------->>>>>>>>>>>>>>>>>>>>>>>>>>>')
    setBookingSummary(result)
  }
const handleDaySelect = (booking)=>{
    dispatch(changeCalenderView('Day'))
    dispatch(updateActiveDate(booking?.date))


   }


  useEffect(() => {
    createBookigSummary()
  }, [booking.monthlBooking])

  return (
    <div className={`rounded-lg     text-sm border border-lightBorderColor dark:border-darkSecondary flex flex-col overflow-scroll h-full w-full relative text-lightModalHeaderColor`}>
      {
        bookingSummary?.map((yaxis, yindex) => (
          <div key={yindex} className={`w-full  ${yindex === 0 ? 'h-20' : 'h-full'} flex`}>
            {
              yaxis?.map((xAxis, xindex) => (
                <div key={xindex} className={`w-full h-full   ${!xindex ? 'border-s ':''} ${!yindex ? 'border-t ':''} border-b border-e  border-opacity-30  border-cyan-900 relative flex justify-center items-center `}>
                  {
                    yindex === 0 ?
                      <div className="w-full h-10   flex justify-center items-center bg-cyan-100 bg-opacity-50   dark:bg-cyan-900 text-cyan-900 dark:text-white  ">
                        {xAxis?.dayName}
                      </div>
                      :
                      <div onClick={()=>handleDaySelect(xAxis)} className={`w-full h-full flex-col cursor-pointer  ${!xindex ? 'border-e-0' : 'border-s-0'} flex`}>
                        <div className="w-full gap-2 h-full flex flex-col justify-start p-2">

                          <div className="w-full h-[70%]  rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform transform hover:scale-105 bg-transparent dark: ">
                            {
                              xAxis?.data[0]?.count ? <>
                                <p className="text-2xl font-bold text-center dark:text-gray-100 text-gray-900">{xAxis?.data[0]?.count}</p>
                                <p className="text-sm text-center dark:text-gray-100 text-gray-900">Booking</p> </> : ''
                            }

                          </div>

                          <div className="w-full flex h-[30%]   justify-end items-center ">
                            {
                              yindex === 0 ?
                                <div className="w-8 h-10 rounded-full flex justify-center items-center bg-yellow-900 border    text-white font-bold">
                                  {xAxis?.dayName}
                                </div>
                                :
                                <div className="w-[3rem] h-[3rem] dark:text-cyan-100 dark:bg-cyan-900 bg-cyan-100 text-cyan-900 font-sem ibold rounded-full  flex justify-center items-center">
                                  {xAxis?.date?.split('-')[2]}
                                </div>
                            }
                          </div>
                        </div>
                      </div>
                  }
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default MonthView;
