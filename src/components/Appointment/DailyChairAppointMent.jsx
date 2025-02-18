import React, { useState } from "react";
import { div } from "framer-motion/client";
import Leave from "./Leave";
import Appointment from "./Booking";
import { FaPlus } from "react-icons/fa";
import NewAppointMent from "../../pages/Calender/NewAppointMent";
import VacantSlot from "../../pages/Calender/VacantSlot";
import NewAppointment from "../../pages/Calender/NewAppointMent";
import Booking from "./Booking";

const booking ={
  "data": [
    [
      null,
      {
        "name": "Chair 01",
        "_id": "67602df6890afbdafd081edd"
      },
      {
        "name": "Chair 02",
        "_id": "67648be32cdcc1b63bfeacb1"
      },
      {
        "name": "Chair 03",
        "_id": "67648c342cdcc1b63bfeacce"
      },
      {
        "name": "Chair 04",
        "_id": "67648c4f2cdcc1b63bfeace9"
      }
    ],
    [
      {
        "start": "10:01",
        "end": "11:00"
      },
      [
        {
          "_id": "676231f899aa09502e811dab",
          "bookingType": "appointment",
          "bookingId": "KC-KKR-2024-BK1000002",
          "date": "2024-12-05T00:00:00.000Z",
          "slotFrom": "2024-12-05T10:00:00.000Z",
          "slotTo": "2024-12-05T10:30:00.000Z",
          "cancelled": false,
          "bUnit": {
            "name": "Sandeep Pachat Businsenss Unit",
            "_id": "6760230a890afbdafd0818bd"
          },
          "branch": {
            "name": "aaa",
            "_id": "67602d00890afbdafd081e2b"
          },
          "doctor": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "dentalAssistant": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "patient": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "chair": {
            "_id": "67602df6890afbdafd081edd",
            "location": "first floor",
            "number": "01"
          }
        },
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T10:30:00.000Z",
          "slotTo": "2024-12-05T11:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T10:01:00.000Z",
          "slotTo": "2024-12-05T11:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T10:01:00.000Z",
          "slotTo": "2024-12-05T11:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T10:01:00.000Z",
          "slotTo": "2024-12-05T11:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "11:01",
        "end": "12:00"
      },
      [
        {
          "_id": "6762320f99aa09502e811dad",
          "bookingType": "appointment",
          "bookingId": "KC-KKR-2024-BK1000003",
          "date": "2024-12-05T00:00:00.000Z",
          "slotFrom": "2024-12-05T11:00:00.000Z",
          "slotTo": "2024-12-05T11:10:00.000Z",
          "cancelled": false,
          "bUnit": {
            "name": "Sandeep Pachat Businsenss Unit",
            "_id": "6760230a890afbdafd0818bd"
          },
          "branch": {
            "name": "aaa",
            "_id": "67602d00890afbdafd081e2b"
          },
          "doctor": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "dentalAssistant": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "patient": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "chair": {
            "_id": "67602df6890afbdafd081edd",
            "location": "first floor",
            "number": "01"
          }
        },
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T11:10:00.000Z",
          "slotTo": "2024-12-05T12:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T11:01:00.000Z",
          "slotTo": "2024-12-05T12:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T11:01:00.000Z",
          "slotTo": "2024-12-05T12:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T11:01:00.000Z",
          "slotTo": "2024-12-05T12:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "12:01",
        "end": "13:00"
      },
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T12:01:00.000Z",
          "slotTo": "2024-12-05T13:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T12:01:00.000Z",
          "slotTo": "2024-12-05T13:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T12:01:00.000Z",
          "slotTo": "2024-12-05T13:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T12:01:00.000Z",
          "slotTo": "2024-12-05T13:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "13:01",
        "end": "14:00"
      },
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T13:01:00.000Z",
          "slotTo": "2024-12-05T14:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T13:01:00.000Z",
          "slotTo": "2024-12-05T14:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T13:01:00.000Z",
          "slotTo": "2024-12-05T14:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T13:01:00.000Z",
          "slotTo": "2024-12-05T14:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "14:01",
        "end": "15:00"
      },
      [
        {
          "_id": "6762322199aa09502e811dae",
          "bookingType": "appointment",
          "bookingId": "KC-KKR-2024-BK1000004",
          "date": "2024-12-05T00:00:00.000Z",
          "slotFrom": "2024-12-05T14:00:00.000Z",
          "slotTo": "2024-12-05T14:20:00.000Z",
          "cancelled": false,
          "bUnit": {
            "name": "Sandeep Pachat Businsenss Unit",
            "_id": "6760230a890afbdafd0818bd"
          },
          "branch": {
            "name": "aaa",
            "_id": "67602d00890afbdafd081e2b"
          },
          "doctor": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "dentalAssistant": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "patient": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "chair": {
            "_id": "67602df6890afbdafd081edd",
            "location": "first floor",
            "number": "01"
          }
        },
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T14:20:00.000Z",
          "slotTo": "2024-12-05T14:30:00.000Z"
        },
        {
          "_id": "67625e7b99aa09502e811ec9",
          "bookingType": "appointment",
          "bookingId": "KC-KKR-2024-BK1000005",
          "date": "2024-12-05T00:00:00.000Z",
          "slotFrom": "2024-12-05T14:30:00.000Z",
          "slotTo": "2024-12-05T14:35:00.000Z",
          "cancelled": false,
          "bUnit": {
            "name": "Sandeep Pachat Businsenss Unit",
            "_id": "6760230a890afbdafd0818bd"
          },
          "branch": {
            "name": "aaa",
            "_id": "67602d00890afbdafd081e2b"
          },
          "doctor": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "dentalAssistant": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "patient": {
            "name": "Sandeep",
            "_id": "67602dde890afbdafd081eb2"
          },
          "chair": {
            "_id": "67602df6890afbdafd081edd",
            "location": "first floor",
            "number": "01"
          }
        },
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T14:35:00.000Z",
          "slotTo": "2024-12-05T15:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T14:01:00.000Z",
          "slotTo": "2024-12-05T15:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T14:01:00.000Z",
          "slotTo": "2024-12-05T15:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T14:01:00.000Z",
          "slotTo": "2024-12-05T15:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "15:01",
        "end": "16:00"
      },
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T15:01:00.000Z",
          "slotTo": "2024-12-05T16:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T15:01:00.000Z",
          "slotTo": "2024-12-05T16:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T15:01:00.000Z",
          "slotTo": "2024-12-05T16:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T15:01:00.000Z",
          "slotTo": "2024-12-05T16:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "16:01",
        "end": "17:00"
      },
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T16:01:00.000Z",
          "slotTo": "2024-12-05T17:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T16:01:00.000Z",
          "slotTo": "2024-12-05T17:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T16:01:00.000Z",
          "slotTo": "2024-12-05T17:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T16:01:00.000Z",
          "slotTo": "2024-12-05T17:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "17:01",
        "end": "18:00"
      },
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T17:01:00.000Z",
          "slotTo": "2024-12-05T18:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T17:01:00.000Z",
          "slotTo": "2024-12-05T18:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T17:01:00.000Z",
          "slotTo": "2024-12-05T18:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T17:01:00.000Z",
          "slotTo": "2024-12-05T18:00:00.000Z"
        }
      ]
    ],
    [
      {
        "start": "18:01",
        "end": "19:00"
      },
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T18:01:00.000Z",
          "slotTo": "2024-12-05T19:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T18:01:00.000Z",
          "slotTo": "2024-12-05T19:00:00.000Z"
        }
      ],
      [
        {
          "bookingType": "vacant",
          "slotFrom": "2024-12-05T18:01:00.000Z",
          "slotTo": "2024-12-05T19:00:00.000Z"
        }
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

const DailyChairAppointMent = () => {
  const [creatButton, setCreateButton] = useState(false)
  const [mouseOverTile, setMouseOverTile] = useState({ xIndex: null, yIndex: null })
  const [showNewAppointMent, setShowNewAppointMent] = useState(false)
  const [selectedSlot,setSelelctedSlot] = useState(null)
  return (
    <div className="  rounded-xl bg-cyan-950 bg-opacity-20  flex flex-col h-full overflow-y-scroll w-full relative text-lightModalHeaderColor    ">
        {
          creatButton && <div className="w-full justify-center items-center h-full bg-white absolute bg-opacity-10 flex ">
              <div className="w-6/12  z-10" >
                <NewAppointment handleClose ={setCreateButton} slot={selectedSlot}/>
              </div>
          </div>
        }
      {
        booking.data.map((xAxis, xindex) => ( 
          <div key={xindex} className="  rounded-xl w-full flex   h-auto dark:hover:bg-white dark:hover:bg-opacity-5 hover:bg-lightBtntext hover:bg-opacity-5  ">
            {xAxis?.map((yAxis, yindex) => (
              <div

                key={`${xindex}-${yindex}`} onMouseOver={() => {  setMouseOverTile({ xIndex: xindex, yIndex: yindex }) }} 
                className={`   border-opacity-5 overflow-y-scroll rounded-br-none border-red-900  flex flex-col ${!yindex  ?' w-2/12':' w-4/12'}  ${xindex  ?'min-h-20':' h-10 bg-white bg-opacity-10'}  justify-center items-start  p-2  overflow-y-auto relative `}
              >

                {!yindex && xindex ? (
                 <div className="w-full   h-full p-1 flex gap-2  flex-col items-end justify-start ">  {`${yAxis?.start} - ${yAxis?.end}`}</div>
                ) : yindex && !xindex ? (
                  yAxis?.name.toUpperCase()
                ) : (
                  <div onMouseOver={()=>setMouseOverTile({ xindex,yindex})}  onMouseLeave={()=>setMouseOverTile({ xindex:null,yindex:null})} className="w-full h-full p-1 flex gap-2  flex-col    ">
                    {yAxis?.map((booking, index) => (
                      <div
                        key={booking?._id || index}
                        className="   flex w-full h-full     "
                      >
                        {
                        
                        booking?.bookingType === "leave" ? 
                        ( <div className=" h-full w-full flex justify-center items-center overflow-hidden bg-gray-800 rounded-md bg-opacity-40  "> <Leave booking={booking} /> </div> ) 
                        :booking?.bookingType === "appointment"? 
                        ( <div className={` h-full w-full flex justify-center items-center overflow-hidden rounded-lg bg-cyan-800 text-white bg-opacity-50 hover:bg-opacity-80 cursor-pointer `}>  <Booking  booking={booking} /></div> )
                        : mouseOverTile.xIndex == xindex && mouseOverTile.yIndex==yindex ? <div onClick={()=>{setCreateButton(true);setSelelctedSlot(booking)}} className={` h-full w-full flex justify-center items-center overflow-hidden rounded-lg bg-green-800 bg-opacity-30 hover:bg-opacity-80 text-white hover:text-white `}> <VacantSlot  slot={booking}/> </div>:
                        ''
                        
                        
                        }
                      </div>
                    ))}
                  </div>
                )}

               
              </div>
            ))}
          </div>
        ))
      }
      {
        // showNewAppointMent ? <div className="absolute w-2/6 h-72"> <NewAppointMent /> </div> : ''
      }

    </div>
  );
};

export default DailyChairAppointMent;
