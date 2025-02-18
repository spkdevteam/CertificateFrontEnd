import axios from "axios";





const checkOngoingCaseSheet = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/checkAlreadyOngoingCaseSheet`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};



const createComplaint = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/complaint/createComplaint`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};


const createFinding = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patientFinding/createFinding`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};


const createMedicalHistory = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/medical/createMedical`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};

const getComplaint = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/complaint/getAllActiveComplaint/${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}


const getFinding = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/patientFinding/getAllActiveFinding/${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}


const getMedicalHistoryData = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/medical/getAllActiveMedical/${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}



const createCaseCheifComplaint = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createCheifComplaints`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const updateCaseCheifComplaint = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateCheifComplaints`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const createCaseClinicalFinding = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createClinicalFinding`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};











const updateCaseClinicalFinding = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateClinicalFinding`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};


const createCaseDiagnosis = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createDiagnosis`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};


const updateCaseDiagnosis = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateDiagnosis`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const createCaseMedicalHistory = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createMedicalHistory`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




const updateCaseMedicalHistory = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateMedicalHistory`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




const createCaseNote = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createNotes`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




const updateCaseNote = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateNotes`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};





const createCaseOtherAttachment = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createOtherAttachment`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const updateCaseOtherAttachment = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateOtherAttachment`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const deleteCaseOtherAttachment = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteOtherAttachment`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};







const createCaseInvestigation = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createInvestigation`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




const updateCaseInvestigation = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateInvestigation`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const deleteCaseInvestigation = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteInvestigation`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};





const createCaseService = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/createServices`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




const updateCaseService = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateServices`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




const deleteCaseService = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteServices`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};



const updateCaseProcedure = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateProcedure`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};




const deleteCaseProcedure = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteProcedure`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};





const getAllFraftedCaseSheet = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getAllDraftedCaseSheet/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}


const getParticularCaseSheet = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getCaseSheet/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}



const getCaseDetail = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getCaseDetail/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}


const getAllCases = async ({ page, keyword, perPage, isAdmin , branchId }) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/listCaseSheet?keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}&&isAdmin=${isAdmin}&&branchId=${branchId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}


const deleteParticularCaseSheet = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteCaseSheet/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}


const markedAsComplete = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/markAsCompletedCaseSheet`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};



const deleteCaseCheifComplaint = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteCheifComplaints`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};



const deleteCaseClinicalFinding = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteClinicalFinding`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};

const deleteCaseDiagnosis = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteDiagnosis`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};





const deleteCaseMedicalHistory = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteMedicalHistory`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};




const deleteCaseNote = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    console.log("authToken", authToken);

    const clientId = localStorage.getItem("KOSMO_client_clientId");
    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/deleteNotes`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
};



const getActiveDepartment = async () => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/department/activeDepartments?clientId=${clientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}


const getServiceUnderDepartment = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/services/serviceUnderDepartment?clientId=${clientId}&&departmentId=${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}


const getProcedureUnderService = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/procedures/procedureUnderService?clientId=${clientId}&&serviceId=${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data
}





const removeFromDraft = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/removeAsDraft`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const updateCaseSheet = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");

    return await axios.post(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateCaseSheet`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

// old
const getAllCasesOfPatient = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getAllCaseSheet/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    console.log(response.data,'response.dataresponse.data--------------------')
    return response.data
}

//new
const getAllCasesOfPatientbyPagination = async ({page, keyword, perPage, patientId}) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getAllCaseSheetOfPatient?keyword=${keyword}&&page=${page}&&perPage=${perPage}&&clientId=${clientId}&&patientId=${patientId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    console.log(response.data,'response.dataresponse.data--------------------')
    return response.data
}




const updateTreatment = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateTreatment`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};



const updateTreatmentAndCloseCase = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updateTreatmentAndCloseCaseSheet`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};

const closeCase = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");


    return await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/closeCaseSheet`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
};


const getMedicalHistoryOfPatient = async (id) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/getPatientMedicalHistory/${clientId}/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}


const updateMedicalHistoryOfPatient = async (data) => {
    const authToken = localStorage.getItem("KOSMO_client_token");
    const clientId = localStorage.getItem("KOSMO_client_clientId");
    const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/client/bu/caseSheet/updatePatientMedicalHistory`, { ...data, clientId: clientId }, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return response.data
}




export default {

    checkOngoingCaseSheet,

    createComplaint,
    createFinding,
    createMedicalHistory,

    getComplaint,
    getFinding,
    getMedicalHistoryData,

    createCaseCheifComplaint,
    updateCaseCheifComplaint,
    deleteCaseCheifComplaint,

    createCaseClinicalFinding,
    updateCaseClinicalFinding,
    deleteCaseClinicalFinding,

    createCaseDiagnosis,
    updateCaseDiagnosis,
    deleteCaseDiagnosis,

    createCaseMedicalHistory,
    updateCaseMedicalHistory,
    deleteCaseMedicalHistory,

    createCaseNote,
    updateCaseNote,
    deleteCaseNote,

    createCaseOtherAttachment,
    updateCaseOtherAttachment,
    deleteCaseOtherAttachment,

    createCaseInvestigation,
    updateCaseInvestigation,
    deleteCaseInvestigation,

    createCaseService,
    updateCaseService,
    deleteCaseService,

    updateCaseProcedure,
    deleteCaseProcedure,

    getAllFraftedCaseSheet,
    getParticularCaseSheet,
    deleteParticularCaseSheet,




    getActiveDepartment,
    getServiceUnderDepartment,
    getProcedureUnderService,


    removeFromDraft,
    updateCaseSheet,
    //old
    getAllCasesOfPatient,
    //new
    getAllCasesOfPatientbyPagination,
    updateTreatment,
    updateTreatmentAndCloseCase,
    closeCase,
    markedAsComplete,


    getMedicalHistoryOfPatient,
    updateMedicalHistoryOfPatient,

    getAllCases,

    getCaseDetail,


    


}