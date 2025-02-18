import { createSlice } from "@reduxjs/toolkit";


export const currentPatientSlice = createSlice({
  name: "currentPatient",
  initialState: {
    patientDetail:  {},
    hasData: false,
    activePrescription:{},
    activeCaseSheet : {},
    activeAppointment:{},
    editPrescription:false,
    editMedicineIndex:0
  },
  reducers: {
    setPatientDetail: (state, action) => {
      state.patientDetail = action.payload;
      state.hasData = true;
    },
    setActiveCaseSheet:(state,action)=>{
      state.activeCaseSheet=action.payload
    }
    ,
    removePatientDetail: (state, action) => {
      state.patientDetail = {};
      state.hasData = false;
    },
    setActivePrescription : (state, action) => {
      console.log(action.payload,'action.payload')
      state.activePrescription = action.payload;
      state.editCaseSheet = false;
    },
    editMedicinePrescription: (state, action) => {
      state.editPrescription = true;
      state.editMedicineIndex = action.payload 
    },
    cancelEditPrescription: (state,action) => {
      state.editPrescription = false;
      state.editMedicineIndex = null 
    },
    updateMedicineKart :(state,action)=>{
      console.log(action.payload,'999999999999999999')
      state.activePrescription = action.payload
    },
    updateActiveBooking :(state,action)=>{
      state.activeAppointment = action.payload
    },
    handlePrscriptionChange:(state,action)=>{
      console.log(action.payload)
      const temp = {
        ...state.activePrescription,
        [action.payload.name]:action.payload.value

      }
      state.activePrescription= temp
      
    }
    },
});

export const { setPatientDetail,editMedicinePrescription,setActiveCaseSheet,updateMedicineKart,cancelEditPrescription,handlePrscriptionChange,updateActiveBooking, removePatientDetail,setActivePrescription } = currentPatientSlice.actions;
export default currentPatientSlice.reducer;
