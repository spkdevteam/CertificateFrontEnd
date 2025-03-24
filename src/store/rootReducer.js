

import layout from "./layout";
import authSlice from "./reducer/authLogin/authSlice";
import capabilitySlice from "./reducer/capability/capability";
import complaintSlice from "./reducer/complaint/complaint";
import currentPatientSlice from "./reducer/currentPatient/currentPatient";
import caseSheetSlice from "./reducer/caseSheet/caseSheet";
import clearToothAndComlaintSlice from "./reducer/clearTooth";
import clearToothAndFindingtSlice from "./reducer/clearToothAndFinding";
import clearToothAndDiagnosisSlice from "./reducer/clearToothAndDiagnosis";
import clearToothAndMedicalHistorySlice from "./reducer/clearToothAndMedicalHistory";
import clearToothAndServiceSlice from "./reducer/clearToothService";
import clearToothAndProcedureSlice from "./reducer/clearToothProcedure"
import filteredMenuSlice from "./reducer/capability/filteredMenu";
import appointmentSlice from "./appointmentStore"
import profileSclice from "./reducer/profileSlice/profileSlice";
import moDalSlice from "./handleModal";
import menuSlice from "./menuSlice"
import themeSlice from './themeSlice'
import accountSlice from './accountsSlice'
import updateTableSlice from './updateTableSlice'
import globalSearchSlice from "./reducer/globalSearch/globalSearchSlice"

const rootReducer = {

    layout,
    auth:authSlice,
    capabilitySlice,
    complaintSlice,
    currentPatientSlice,
    caseSheetSlice,
    clearToothAndComlaintSlice,
    clearToothAndFindingtSlice,
    clearToothAndDiagnosisSlice,
    clearToothAndMedicalHistorySlice,
    clearToothAndServiceSlice,
    clearToothAndProcedureSlice,
    appointment: appointmentSlice,
    modalSlice: moDalSlice,
    menuSlice:menuSlice,
    profileSclice,
    theme :themeSlice,
    accounts:accountSlice,
    updateTable:updateTableSlice,
    globalSearch:globalSearchSlice
    // filteredMenuSlice
}


export default rootReducer