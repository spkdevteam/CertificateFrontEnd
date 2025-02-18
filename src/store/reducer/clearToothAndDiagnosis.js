import { createSlice } from "@reduxjs/toolkit";


export const clearToothAndDiagnosisSlice = createSlice({
  name: "clearToothAndDiagnosis",
  initialState: {
    needToClear: false,
    count : 0,
  },
  reducers: {
    setClearToothAndDiagnosis: (state, action) => {
      state.needToClear = true;
      state.count += 1;
    },
    removeClearToothAndDiagnosis: (state, action) => {
      state.needToClear = false;
      state.count = 0
    },
  },
});

export const { setClearToothAndDiagnosis, removeClearToothAndDiagnosis } = clearToothAndDiagnosisSlice.actions;
export default clearToothAndDiagnosisSlice.reducer;
