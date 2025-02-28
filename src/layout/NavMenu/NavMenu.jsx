  

import React, { useEffect, useState, Fragment } from "react";
import useDarkmode from "../../Hooks/useDarkMode";
import ResposiveNavbar from "../ResponsiveNavbar/ResposiveNavbar";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"; 
  
import DynamicNavMenu from "./DynamicNavMenu";
import useHandleUserHook from "../../Hooks/userHook";

function NavMenu({ noFade, scrolling }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {userSlice} = useHandleUserHook()
  
  const [activeSubMenuItems, setActiveSubMenuItems] = useState([]);
  const [navItems, setNavItems] = useState({});
  const [showPatientForm, setShowPatientForm] = useState(false)
  const [isDark] = useDarkmode();
  // const  capabilityArray = useSelector((state) => state.capabilitySlice);
  const capabilityArray = userSlice.adminInfo.role.capability
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [activeMenuName, setActiveMenuName] = useState("");
  const [subActiveMenuId, setSubActiveMenuId] = useState(null);
  const location = useLocation();

   
  useEffect(() => {
    if (capabilityArray && Object.keys( capabilityArray).length > 0) {
       setNavItems(capabilityArray);
 
       
    }
  }, [userSlice]);

    
   

  return (
    <>
      {/* Navigation Menu */}
      <div
        className={`scroll-container md:container md:mx-auto relative  flex border-8 h-20 cursor-pointer text-lg md:text-xl rounded-t-lg overflow-hidden border-1 ${isDark ? "bg-darkSecondary text-light" : "bg-light"
          }`}
       
      >
        {console.log(navItems,'navItems')}
        <DynamicNavMenu capability={navItems} />
          
       
      </div>

      {/* Submenu */}
      <div
        className={`md:container md:mx-auto py-8 h-12 flex items-center border-b-[1px] border-lightBorderColor dark:border-darkSecondary ${isDark ? "bg-darkAccent" : "bg-white"
          }`}
      >
        
      </div>
 
       
      <motion.div
        animate={{ translateY: scrolling ? 0 : -50 }}
        transition={{ duration: 0.3 }}
      >
        {scrolling && (
          <div>
            <ResposiveNavbar
              subActiveMenuId={subActiveMenuId}
              setSubActiveMenuId={setSubActiveMenuId}
              activeSubMenuItems={activeSubMenuItems}
              activeMenuId={activeMenuId}
            />
          </div>
        )}
      </motion.div>
    </>
  );
}

export default NavMenu;

