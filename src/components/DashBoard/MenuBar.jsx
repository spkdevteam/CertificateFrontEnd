import { useSelector } from "react-redux"
import image1 from "../../assets/emirates.png"
import useDynamicIcons from "../../Hooks/useDynamicIcons"

const MenuBar = ()=>{
     const getMyIcon = useDynamicIcons()
        const LogoutIcon = getMyIcon('logOut')
     return(
        <div  className="h-full flex justify-between items-center rounded-md border border-inherit shadow-md  p-4 bg-opacity-15  w-full ">
       <img src={image1} alt="" className="w-2/12 h-auto p-2  " />
        
        <button className=" bg-yellow-900 w-10 flex justify-center item-center  h-10 text-white rounded mr-2">
            <LogoutIcon className='w-full h-full p-3'/>
        </button>
        </div>

    )
}


export default MenuBar