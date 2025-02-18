import { createSlice } from "@reduxjs/toolkit";


export const clearToothAndProcedureSlice = createSlice({
  name: "clearToothAndProcedure",
  initialState: {
    needToClear: false,
    count : 0,
  },
  reducers: {
    setClearToothAndProcedure: (state, action) => {
      state.needToClear = true;
      state.count += 1;
    },
    removeClearToothAndProcedure: (state, action) => {
      state.needToClear = false;
      state.count = 0
    },
  },
});

export const { setClearToothAndProcedure, removeClearToothAndProcedure } = clearToothAndProcedureSlice.actions;
export default clearToothAndProcedureSlice.reducer;
