import React, { useEffect, useRef, useState } from 'react'
import kosmoLogo from "../../assets/images/logo/Kosmo-Clinic-Logo.svg"
import { NavLink } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdNotificationsActive, MdDarkMode, MdLightMode } from "react-icons/md";
import useWidth from '../../Hooks/useWidth';
import useDarkmode from '../../Hooks/useDarkMode';
import ModalProfile from '../../components/modal/ModalProfile';


function Header() {
  const { width, breakpoints } = useWidth();
  const [isDark, setDarkMode] = useDarkmode();
  const [showProfileModal, setShowProfileModal] = useState(false)

  const [showModal, setShowModal] = useState(false);

  const profilemenuRef = useRef(null);
  

  const handleClickOutside = (event) => {
    if (profilemenuRef.current && !profilemenuRef.current.contains(event.target)) {
      setShowProfileModal(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

 


  return (
    <div className={`md:container md:mx-auto w-full h-20 flex justify-between items-center shadow-sm px-2 ${isDark ? "bg-darkBody" : "bg-transparent"}`}
    ref={profilemenuRef}>
      <div>
        <NavLink to="">
          <img src={kosmoLogo} alt="" className='h-[2.5rem] lg:h-[50px]' />
        </NavLink>
      </div>

      <div className={`flex flex-row gap-3 ${isDark ? "bg-dark" : ""}`}>
        {width >= breakpoints.md &&
          <div className={`relative ${isDark ? "" : "border "} z-10 rounded-lg`}>
            <span className='absolute top-0 bottom-0 left-3 flex items-center'>
              <FaSearch className={`${isDark ? "" : "bg-lightbgIconColor text-lightIconColor"}`} />
            </span>
            <input
              type="text"
              className={`pl-9 rounded-lg py-2 w-64 ${isDark ? "bg-darkBgSearch" : "bg-lightBgSearch"}  outline-none`}
              placeholder='Searching...'
            />
          </div>
        }

        <div className={`flex items-center rounded-md py-2 px-3 cursor-pointer ${isDark ? "bg-darkIconAndSearchBg" : "bg-lightbgIconColor border"}`}>
          <MdNotificationsActive className={`text-lg ${isDark ? "hover:text-blue-600" : "hover:text-lightIconhover"} text-lightIconColor  dark:text-white`} />
        </div>

        {width >= breakpoints.md &&
          <div onClick={() => setDarkMode(!isDark)} className={`flex items-center rounded-md py-2 px-3 cursor-pointer ${isDark ? "bg-darkIconAndSearchBg" : "bg-lightbgIconColor border"}`}>
            {isDark ? (
              <MdLightMode className={`text-lg  hover:text-blue-600 text-lightIconColor dark:text-white`} />
            ) : (
              <MdDarkMode className={`text-lg hover:text-lightIconhover text-lightIconColor  dark:text-white`} />
            )}
          </div>
        }

        <div className={`flex items-center rounded-md py-2 px-3 cursor-pointer ${isDark ? "bg-darkIconAndSearchBg" : "bg-lightbgIconColor border"}`}
          onClick={() => setShowProfileModal(!showProfileModal)}>
          <IoPerson onClick={() => setShowModal(!showModal)} className={`text-lg ${isDark ? "hover:text-[#1e88e5]" : "hover:text-lightIconhover"} text-lightIconColor  dark:text-white`} />
        </div>
        {
          showProfileModal && (
            <div className='absolute z-50  top-16 right-6'>
              <ModalProfile />
            </div>
          )
        }
       

      </div>

    </div>
  )
}

export default Header;
