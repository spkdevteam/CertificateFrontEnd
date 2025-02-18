import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';


function BreadCrumbs() {
    const navigate = useNavigate()
    const  filteredMenuarray = useSelector((state) => state.filteredMenuSlice)
    const location = useLocation()
    const locationName = location?.pathname?.replace("/","") 

    console.log("filteredMenuarray",filteredMenuarray);
    
    

    // const [showModal, setShowModal] = useState(false);

    // const closeModal = () => {
    //     setShowModal(false);
    // };

    // const openModal = () => {
    //     setShowModal(!showModal);
    // };

    return (
        <>
            <div className='md:container md:mx-auto px-8 py-2 flex justify-between items-center h-24 dark:bg-darkAccent bg-contentBg'>
                <div>
                    <h1 className='text-xl'>All Patients</h1>

                </div>
                <div>
                   
                        <button
                            onClick={() => navigate('/modalPatients')}
                            type="button"
                            className="btn btn-sm gap-1 flex items-center px-3 py-1.5 bg-lightBgBtn text-lightBtntext hover:bg-lightBtntext hover:text-white dark:bg-darkBtn dark:text-white rounded-md"
                        >
                            <FaPlus className="text-lg mr-1" />
                            Create patients
                        </button>
                   

                </div>
            </div>

        </>
    )
}

export default BreadCrumbs