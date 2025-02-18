import { createSlice } from "@reduxjs/toolkit";


export const clearToothAndMedicalHistorySlice = createSlice({
  name: "clearToothAndMedicalHistory",
  initialState: {
    needToClear: false,
    count : 0,
  },
  reducers: {
    setClearToothAndMedicalHistory: (state, action) => {
      state.needToClear = true;
      state.count += 1;
    },
    removeClearToothAndMedicalHistory: (state, action) => {
      state.needToClear = false;
      state.count = 0
    },
  },
});

export const { setClearToothAndMedicalHistory, removeClearToothAndMedicalHistory } = clearToothAndMedicalHistorySlice.actions;
export default clearToothAndMedicalHistorySlice.reducer;
