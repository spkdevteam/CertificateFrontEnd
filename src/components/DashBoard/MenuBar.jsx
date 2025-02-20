import { div } from "framer-motion/client"

const MenuBar = ()=>{
    return(
        <div  className="h-full flex justify-end items-center rounded-md border shadow-md   bg-opacity-15  w-full ">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Logout</button>
        </div>

    )
}


export default MenuBar