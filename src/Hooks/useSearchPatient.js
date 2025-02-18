import { useEffect } from "react";


const searchPatient= (patientRecord)=>{

}




const useSearchPatient = ()=>{

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log(patientRecord);
        }, 500);
    
         
        return () => {
            clearTimeout(timeout);
        };
    }, [patientRecord]);





    return searchPatient


}

export default  useSearchPatient