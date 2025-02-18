import getAvailableSlots from "./getAvailableSlots";

function generateSchedule({prepareBy, input, timeSlots, dayStatus, doctors = [], chairs = []}) {
    //from the givrn input , it prepares the data for the calender in a 2 d array formate 
    
    const data = [];

    if (prepareBy !== 'Chair') {
       
        for (let i = 0; i <= timeSlots?.length; i++) {
            if (!data[i]) data[i] = [];
                 
            for (let j = 0; j <= doctors?.length; j++) {
                if (i === 0 && j !== 0) {
                    data[i][j] = {
                        name: doctors[j - 1]?.firstName,
                        lastName:doctors[j - 1]?.lastName,
                        _id: doctors[j - 1]?._id,
                    };
                     
                    continue;
                } else if (j === 0 && i !== 0) {
                    data[i][j] = timeSlots[i - 1];
                    continue;
                } else if (i && j) {

                    const docAndTime = { ...doctors[j - 1], ...timeSlots[i - 1] };
                    const record = dayStatus.filter((record) => {
                        return new Date(input?.bookingDate + 'T' + docAndTime.end + ':00.000Z') > new Date(record.slotFrom) &&
                            new Date(input?.bookingDate + 'T' + docAndTime.start + ':00.000Z') < new Date(record.slotTo) 
                             &&  docAndTime?._id === record?.doctor?._id 
                    });

                    
                    const bookedSlots = record.map((item) => ({
                        slotFrom: item?.slotFrom?.split('T')[1].slice(0, 5),
                        slotTo: item?.slotTo?.split('T')[1].slice(0, 5),
                    }));
                    const hourStart = data[i][0]?.start;
                    const hourEnd = data[i][0]?.end;

                    const availabilitySlot = getAvailableSlots({
                        hourStart,
                        hourEnd,
                        bookedSlots,
                    })
                    ?.map((vacantSlot) => ({
                        bookingType: 'vacant',
                        slotFrom: input?.bookingDate + 'T' + vacantSlot?.slotFrom + ':00.000Z',
                        slotTo: input?.bookingDate + 'T' + vacantSlot?.slotTo + ':00.000Z',
                    }));
                    
                    data[i][j] = [...record, ...availabilitySlot]?.sort((a, b) => new Date(a.slotFrom) - new Date(b.slotFrom)) || [];
                }
                else if(!i && !j){
                    data[i][j]=input
                }
            }
        }
    } else {
        for (let i = 0; i <= timeSlots?.length; i++) {
            if (!data[i]) data[i] = [];

            for (let j = 0; j <= chairs?.length; j++) {
                if (i === 0 && j !== 0) {
                    data[i][j] = {
                        name: 'Chair ' + chairs[j - 1]?.chairNumber,
                        _id: chairs[j - 1]?._id,
                    };
                    continue;
                } else if (j === 0 && i !== 0) {
                    data[i][j] = timeSlots[i - 1];
                    continue;
                } else if (i && j) {
                    const docAndTime = { ...chairs[j - 1], ...timeSlots[i - 1] };
                    const record = dayStatus.filter((recorder) => {
                        return new Date(input?.bookingDate + 'T' + docAndTime.end + ':00.000Z') > new Date(recorder.slotFrom) &&
                        new Date(input?.bookingDate + 'T' + docAndTime.start + ':00.000Z') < new Date(recorder.slotTo) &&
                        docAndTime?._id === recorder?.chair?._id
                    });
                    const bookedSlots = record.map((item) => ({
                        slotFrom: item?.slotFrom?.split('T')[1].slice(0, 5)||'',
                        slotTo: item?.slotTo?.split('T')[1].slice(0, 5)||'',
                    }));
                    
                   
                    const hourStart = data[i][0]?.start;
                    const hourEnd = data[i][0]?.end;

                    const availabilitySlot = getAvailableSlots({
                        hourStart,
                        hourEnd,
                        bookedSlots,
                    })?.map((vacantSlot) => ({
                        bookingType: 'vacant',
                        slotFrom: input?.bookingDate + 'T' + vacantSlot?.slotFrom + ':00.000Z',
                        slotTo: input?.bookingDate + 'T' + vacantSlot?.slotTo + ':00.000Z',
                    }));

                    data[i][j] = [...record, ...availabilitySlot]?.sort((a, b) => new Date(a.slotFrom) - new Date(b.slotFrom)) || [];
                }
                else if(!i && !j){
                    data[i][j]=input
                }
            }
        }
    }
    
    return data;
}

export default generateSchedule