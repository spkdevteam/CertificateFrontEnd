import { useEffect } from "react"
import useDynamicIcons from "../../Hooks/useDynamicIcons"

const ChairTile = ({chair})=>{
    const getMyIcon = useDynamicIcons()
    const ChairIcon =getMyIcon('chair') 
    useEffect(()=>{
        console.log(chair,'chair')
    },[chair])
    return (<div className="flex-col gap-2 w-full h-full flex text-sm justify-center items-center p-2 " >
        <ChairIcon className={`${chair.isActive ?'text-cyan-600':'text-red-800'  }   h-[30%] w-[30%] `} />
        <h2> {chair?.chairNumber}</h2>

    </div>

    )
}

export default ChairTile