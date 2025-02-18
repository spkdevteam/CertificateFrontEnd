import { weekDataTemplate } from "../constant/WeekSummary";

const { days, timeSlots } = weekDataTemplate;

const generateWeeklySummaryNew = (bookings = [], fromDate = new Date().toISOString(), toDate = new Date().toISOString()) => {
    let result = [];
    const startDate = new Date(fromDate); // Store start date once

    for (let time = 0; time < timeSlots?.length; time++) {
        result[time] = [];

        for (let day = 0; day < days?.length+1; day++) {
            let currentDayDate = new Date(startDate); // Clone start date for each day
            currentDayDate.setDate(startDate.getDate() + day); // Increment by day index

            if (time === 0) {
                result[time][day] = {
                    dayName: days[day],
                    currDate: new Date(currentDayDate), // Correctly assigned date
                };
            } else if (day === 0) {
                result[time][day] = timeSlots[time]; // First column remains time slot names
            } else {
                const tempDate = currentDayDate.toISOString().split('T')[0];
                const timeStart = timeSlots[time - 1]?.start;
                const timeEnd = timeSlots[time - 1]?.end;
                const slotFrom = `${tempDate}T${timeStart}:00.000Z`;
                const slotTo = `${tempDate}T${timeEnd}:00.000Z`;

                result[time][day] = {
                    booking: bookings?.[time]?.[day] || null,
                    chairAvailable: true,
                    docAvailable: true,
                    date: new Date(currentDayDate), // Properly assigned date
                    timeSlot: bookings?.filter((val) => val.slotFrom === slotFrom && val.slotTo === slotTo),
                };
            }
        }
    }

    console.log(result, "result");
    return result;
};

export default generateWeeklySummaryNew;
