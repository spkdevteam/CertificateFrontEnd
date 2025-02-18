

const PatientTile = ({onChange,patient}) => {
    
        const handleClick = ()=>{
            onChange({_id:patient?._id, patientName: patient?.firstName,patientEmail:patient?.email,patientContactNumber:patient?.phone,})
        }
    
    return (

        <div onClick={()=>handleClick(patient)} className=" cursor-pointer   rounded-md w-full flex justify-start items-center gap-4 border-b border-opacity-50 border-cyan-800     p-1">
             
            <div className="font-thin text-sm ">
            
            Name: {patient?.firstName?.charAt(0).toUpperCase() + patient?.firstName.slice(1).toLowerCase()}  _
            {patient?.lastName?.charAt(0).toUpperCase() + patient?.lastName?.slice(1).toLowerCase()} || age: {patient?.age}  <br />
                Email: {patient?.email.toLowerCase()} phone: {patient?.phone.toLowerCase()} 
            
               <br /> 
            
            </div>
             
            
        </div>
    )
}

export default PatientTile