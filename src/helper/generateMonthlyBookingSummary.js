import { weekDataTemplate } from "../constant/WeekSummary";

const { days, timeSlots } = weekDataTemplate;

const generateMonthlyBookingSummary = ( bookings = [], fromDate=new Date()?.toISOString(), toDate= new Date()?.toISOString()  ) => {
    let result = [];
    console.log(bookings, 'bookings');
    let currDate = new Date(fromDate);
    for (let time = 0; time < 5; time++) {
        result[time] = [];
        

        for (let day = 0; day < days?.length; day++) {
            if (time === 0) {
                result[time][day] = {
                    dayName: days[day],
                    
                };
                
            } else {
                 const tempDate =  currDate?.toISOString()?.split('T')[0]
                 currDate.setDate(currDate.getDate() + 1);  
                result[time][day] = {
                    booking: bookings?.[time]?.[day] || null,  
                    date: tempDate,
                    data: bookings?.filter((val)=>{
                        console.log(val,'valvalvalvalval')
                         return  val.date==tempDate 

                    }),
                };
            }
           
        }
    }
    
    console.log(result, 'result');
    return result;
};

export default generateMonthlyBookingSummary;
