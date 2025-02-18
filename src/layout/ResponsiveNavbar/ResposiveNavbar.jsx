import React from 'react'
// import { menuItems } from '../NavMenu/NavMenu'
import useDarkmode from '../../Hooks/useDarkMode'
import { NavLink, useNavigate } from 'react-router-dom'
import kosmoLogo from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"
import { IoPerson } from "react-icons/io5";
import { useSelector } from 'react-redux';





function ResposiveNavbar({ activeSubMenuItems, activeMenuId, setSubActiveMenuId, subActiveMenuId }) {

    const [isDark] = useDarkmode()
    const navigate = useNavigate()
    const { capability: capabilityarray, isCapability } = useSelector((state) => state.capabilitySlice)



    return (
        <>
            <div className={`absolute z-30 top-0 w-full  py-8 h-12 flex justify-between items-center border-b-[1px] border-lightBorderColor dark:border-darkSecondary shadow-lg dark:shadow-teal-700 shadow-blue-gray-300  ${isDark ? "bg-darkAccent" : "bg-white"} `}>
                {/* <div>
                    <NavLink to="">
                        <img src={kosmoLogo} alt="" className='h-[2.5rem] lg:h-[50px]' />
                    </NavLink>
                </div> */}
                <div className='md:container md:mx-auto '>
                    {
                        activeSubMenuItems && activeSubMenuItems?.length > 0 ? activeSubMenuItems.map((item, ind) => {
                            const isActive = item?._id === subActiveMenuId;

                            return <span onClick={() => {
                                navigate(`${item.link}`)
                                setSubActiveMenuId(item._id)
                            }} key={ind + "active menu"} className={`mx-1 cursor-pointer px-1 lg:mx-2 lg:px-3 py-2 text-xs  rounded-lg ${isActive ? (isDark ? "bg-darkBtnHover text-white" : "bg-lightHoverBgBtn text-white") : (isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white")}`}
                            >
                                {item?.displayName}
                            </span>





                        }) : ""
                    }
                </div>
                {/* <div className={`flex items-center mr-2 rounded-md py-2 px-3 cursor-pointer ${isDark ? "bg-primary" : "bg-light border"}`}>
                    <IoPerson className={`text-lg ${isDark ? "hover:text-blue-600" : "hover:text-info"} text-[#80808f]`} />
                </div> */}

            </div>

        </>
    )
}

export default ResposiveNavbar