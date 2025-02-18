import React from 'react'
import useDynamicIcons from '../../Hooks/useDynamicIcons';

function FilterCategory() {
    const getMyIcon = useDynamicIcons()
    
    
    const Close = getMyIcon('close')
    const CalenderIcon = getMyIcon('calendar') 
    const ClockIcon = getMyIcon('clock')
    const DoctorIcon = getMyIcon('doctor')
    const EmailIcon = getMyIcon('email')
    const UserIcon = getMyIcon('user')
    const ChairIcon = getMyIcon('chair')
    const DentalAssistantIcon = getMyIcon('dentalAssistant')
    const ContactIcon = getMyIcon('contact')
    
  return (
    <div className='h-full w-full flex flex-col  rounded-xl '>
      <div className="w-full flex justify-start  items-center  ">
                <UserIcon className='w-20 h-6' />
                    <input
                        type="text"
                        id="patientId"
                        name="patientId"
                        
                        className="  p-2 w-full bg-cyan-800 bg-opacity-5"
                        placeholder="Patient Name"
                    />
                </div>
                <div className="w-full flex justify-start  items-center  ">
                <EmailIcon className='w-20 h-6' />
                    <input
                        type="text"
                        id="patientId"
                        name="patientId"
                        
                        className="  p-2 w-full bg-cyan-800 bg-opacity-5"
                        placeholder="Patient Name"
                    />
                </div>
                <div className="w-full flex justify-start  items-center  ">
                <ContactIcon className='w-20 h-6' />
                    <input
                        type="text"
                        id="patientId"
                        name="patientId"
                        
                        className="  p-2 w-full bg-cyan-800 bg-opacity-5"
                        placeholder="Patient Name"
                    />
                </div>
                <div className="w-full flex justify-start items-center ">
                    <DoctorIcon className='w-20 h-6' />
                    <input
                        type="text"
                        id="dutyDoctorId"
                        name="dutyDoctorId"
                        
                        
                        placeholder="Doctor name"
                        className="  p-2 w-full bg-cyan-800 bg-opacity-5"
                    />
                </div>
                <div className="w-full flex items-center justify-start  ">
                <DentalAssistantIcon className='w-20 h-6' />
                    <input
                        type="text"
                        id="caseId"
                        name="caseId"
                        
                        
                        className="  p-2 w-full bg-cyan-800 bg-opacity-5"
                    /> 
                    
                </div>
                <div className="w-full flex justify-start items-center  ">
                    <ChairIcon className='w-20 h-6 -rotate-45 ' />
                    <input
                        type="text"
                        id="dentalAssistant"
                        name="dentalAssistant"
                        
                        
                        placeholder="Chair"
                        className="  p-2 w-full bg-cyan-800 bg-opacity-5"
                    />
                </div>
               
    </div>
  )
}
 
export default FilterCategory
