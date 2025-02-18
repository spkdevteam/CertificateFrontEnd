
const calculateTimeSlot = (dateTime) => {
    let [hour,minute] = dateTime?.toString()?.split('T')[1]?.slice(0,8).split(':') 
    let formate = ''
    if (hour > 12) {
        formate = 'pm';
        hour -= 12
    }
    else {
        formate = 'am';

    }
    const result = `${hour}:${minute} ${formate}`
    
    return result


}


export default calculateTimeSlot