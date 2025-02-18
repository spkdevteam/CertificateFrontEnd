import { div } from "framer-motion/client"
import DayTile from "./DayTile"


const DayTileInMonth = ({ dayData, xindex, yindex }) => {
    return (
        <div key={xindex} className={`w-full h-full  border border-cyan-900      relative flex justify-center items-center  p-4`}>

            {
                yindex == 0 ?
                    <div className=" w-[2rem] h-[2rem]  rounded-full flex justify-center items-center  bg-ye llow-900">
                        {dayData?.dayName}
                    </div>
                    :
                    <div key={xindex} className={`w-[14.28%] h-full flex-col   ${!xindex ? 'border-e-0' : ' border-s-0'}      flex      `}>
                        <div className="w-full h-[80%] flex justify-start border" >
                            <DayTile dayData={dayData} />
                        </div>
                        <div className="w-full flex  h-[20%] border">
                            {
                                yindex == 0 ? <div className=" w-[2rem] h-[2rem]  rounded-full flex justify-center items-center  bg-ye llow-900">
                                    {dayData?.dayName}
                                </div> :

                                    <div className=" w-[3rem] h-[3rem] dark:bg-cyan-900 bg-cyan-100 rounded-full  dark:text-white   flex justify-center items-center  bg-ye llow-900">
                                        {dayData?.date?.split('-')[2]}
                                    </div>

                            }
                        </div>
                    </div>
            }

        </div>


    )
}

export default DayTileInMonth