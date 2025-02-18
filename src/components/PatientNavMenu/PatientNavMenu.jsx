import { ul } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useDarkmode from '../../Hooks/useDarkMode'

function PatientNavMenu() {

    const [isDark] = useDarkmode()


    const patientNavMenu = [
        {
            title: "Overview",
            link: "/overview"
        },
        {
            title: "Case Sheet",
            link: "/Case Sheet"
        },
        {
            title: "Case Details",
            link: "/Case Details"
        },
        {
            title: "Medical History",
            link: "/medicalHistory"
        },
        {
            title: "All Prescription",
            link: "/allpatient"
        },
        {
            title: "Prescription",
            link: "/Prescription"
        },
        {
            subTitle: "Invoices",
            link: "/invoices"
        }
    ]
    return (
        <div>
            <div className={`card md:container  md:mx-auto flex flex-wrap justify-center items-center border-[1px] border-lightBorderColor py-6  gap-6 dark:border-darkSecondary ${isDark ? "bg-darkAccent" : "bg-white"}  rounded-lg mb-8`}>
                {/* Begin: Navs */}
                {
                    patientNavMenu && patientNavMenu.length > 0 && patientNavMenu.map((items, ind) => {
                        return (
                            <ul className="flex text-xs md:text-sm  lg:text-base font-bold">
                                <li className="nav-item mt-2">
                                    <NavLink
                                        to={items.link}
                                        className={({ isActive }) =>
                                            isActive ? 'ms-0 py-5 border-b-2 border-lightBorderClr text-lightTextColor' : 'ms-0  py-5 text-lightTextColor dark:text-white hover:text-lightHoverTextClr hover:border-b-2 hover:border-lightBorderClr'
                                        }
                                    >
                                       {items.title}
                                    </NavLink>
                                </li>

                            </ul>
                        )
                    })
                }
               
                {/* End: Navs */}
            </div>




        </div>
    )
}

export default PatientNavMenu