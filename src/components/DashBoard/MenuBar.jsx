import { useSelector } from "react-redux"
import image1 from "../../assets/emirates.png"
import useDynamicIcons from "../../Hooks/useDynamicIcons"
import useHandleUserHook from './../../Hooks/userHook';
import { useNavigate } from "react-router-dom";

const MenuBar = ()=>{
     const getMyIcon = useDynamicIcons()
        const LogoutIcon = getMyIcon('logOut')
        const clientUser=useSelector(state=>state.auth.clientUser)
        console.log(clientUser,"Hello")
        const {logoutUser}=useHandleUserHook()
        const navigate=useNavigate()

        const handleLogOut=()=>{
            logoutUser({userId:clientUser?.userId||''})
            navigate("/staff/login")
        }
     return(
        <div  className="h-full flex justify-between items-center rounded-md border border-inherit shadow-md  p-4 bg-opacity-15  w-full ">
       <img src={image1} alt="" className="w-2/12 h-auto p-2  " />
       <div className="flex justify-end items-center gap-4">
       <p className="text-end "> {clientUser.firstName} {clientUser.lastName}</p>
        <button className=" bg-yellow-900 w-10 flex justify-center item-center  h-10 text-white rounded mr-2">
            <LogoutIcon className='w-full h-full p-3' onClick={handleLogOut}/>
        </button>


       </div>
        </div>

    )
}


export default MenuBar