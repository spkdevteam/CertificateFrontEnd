import React, { useEffect, useState } from "react";
import { div } from "framer-motion/client";
import Leave from "../../components/Appointment/Leave";
import Appointment from "../../components/Appointment/Booking";
import useGetBookingData from "../../Hooks/useGetBookingData";
import { useDispatch, useSelector } from "react-redux";
import { weekDataTemplate } from "../../constant/WeekSummary";
import generateWeeklySummary from "../../helper/generateWeeklySummary";
import useGetWeeklyBookingData from "../../Hooks/useGetWeeklyBookingData";
import generateWeeklySummaryNew from "../../helper/generateWeeklySummary";
import DayTile from "./DayTile";
import { changeCalenderView, updateActiveDate } from "../../store/appointmentStore";

const WeekView = () => {
  const [weeklyData, setWeeklyData] = useState([])
  const weeklyBookingData = useSelector((state) => state.appointment.weeklyBookingdData)
  const currentAppointment =  useSelector((state) => state.appointment)
  const dispatch = useDispatch()

  useGetWeeklyBookingData()
   
  const fromDate =currentAppointment?.fromDate ? currentAppointment?.fromDate : new Date().toISOString()
  const toDate = currentAppointment?.toDate ? currentAppointment?.toDate  : new Date().toISOString()
 
  const createBookigSummary = () => {
     const result = generateWeeklySummaryNew(weeklyBookingData,fromDate,toDate)
     console.log(result,'------------->>>>>>>>>>>>>>>>>>>>>>>>>>>')
     setWeeklyData(result)
  }

  useEffect(() => {
    console.log(weeklyBookingData)
    createBookigSummary()
  }, [weeklyBookingData,currentAppointment])
  
   const handleDaySelect = (booking)=>{
    dispatch(changeCalenderView('Day'))
    console.log(new Date(booking?.date)?.toISOString(),'booking?.datebooking?.datebooking?.datebooking?.date')
    dispatch(updateActiveDate(new Date(booking?.date)?.toISOString()))
    


   }


  return (

    <>

<div className={`rounded-md dark:border-darkSecondary flex flex-col overflow-scroll h-full w-full relative text-lightModalHeaderColor`}>
    {
        weeklyData?.map((time, yindex) => (
            <div key={yindex} className="flex w-full hover:bg-white hover:bg-opacity-10 text-sm">
                {time?.map((dayData, xindex) => (
                    !yindex && !xindex ? (
                        <div key={xindex + Date.now()} className={`flex w-52 min-w-28 h-12 ${yindex === 0 ? 'bg-cyan-900' : ''} rounded-ss-md bg-opacity-10 flex justify-center items-center min-h-20 cursor-pointer border-s-[.5px] border-t-[.5px] border-opacity-45 border-cyan-700`}>
                            {/* Header Cell */}
                        </div>
                    ) : !yindex && xindex ? (
                        <div key={xindex + Date.now()} className={`flex w-52 min-w-28 h-12 ${yindex === 0 ? 'bg-cyan-900' : ''} bg-opacity-10 flex justify-center items-center min-h-20 cursor-pointer border-t-[.5px] border-s-[.5px] border-opacity-45 border-cyan-700`}>
                            <div className="flex w-full h-full flex-col gap-2 justify-center items-center">
                                <p className=" dark:text-cyan-100     text-cyan-900   ">{weeklyData[yindex][xindex - 1]?.dayName}</p>
                                <div className="rounded-full flex justify-center items-center w-10 h-10 dark:text-cyan-100 dark:bg-cyan-900 bg-cyan-100 text-cyan-900">
                                    {weeklyData[yindex][xindex - 1]?.currDate?.toString()?.split(' ')[2]}
                                </div>
                            </div>
                        </div>
                    ) : !xindex && yindex ? (
                        <div key={xindex + Date.now()} className={`flex w-52 min-w-28 h-12 ${xindex === 0 ? 'bg-cyan-900' : ''} bg-opacity-10 flex justify-center items-center min-h-20 cursor-pointer border-t-[.5px] border-s-[.5px] border-opacity-45 border-cyan-700`}>
                            <span className="text-gray-800 font-semibold">{weeklyData[yindex - 1][xindex]?.start}</span>
                        </div>
                    ) : xindex && yindex ? (
                        <div key={xindex + Date.now()} onClick={()=>{handleDaySelect(weeklyData[yindex][xindex]);console.log(weeklyData[yindex][xindex],'weeklyData[yindex][xindex]')}} className={`flex w-52 min-w-28 h-12 ${yindex && xindex ? 'bg-bl ue-900' : ''} bg-opacity-10 flex justify-center items-center min-h-20 cursor-pointer border-s-[.5px] border-t-[.5px] border-opacity-45 border-cyan-700`}>
                            <DayTile dayData={weeklyData[yindex][xindex]} />
                        </div>
                    ) : ''
                ))}
            </div>
        ))
    }
</div>
    </>
  );
};

export default WeekView;
