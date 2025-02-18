import caseSheetService from "../services/caseSheetService/caseSheet.service"

const usePatientCasesHook = () => {

     

        const readAllPatientCases = async (patientId) => {
            const data = await caseSheetService.getAllCasesOfPatient(patientId)
            return data?.data?.caseSheets 
        }



        return { readAllPatientCases }
    

}


export default usePatientCasesHook