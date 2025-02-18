import { createSlice } from "@reduxjs/toolkit";


export const clearToothAndComlaintSlice = createSlice({
  name: "clearToothAndComlaint",
  initialState: {
    needToClear: false,
    count : 0,
  },
  reducers: {
    setClearToothAndComplaint: (state, action) => {
      state.needToClear = true;
      state.count += 1;
    },
    removeClearToothAndComplaint: (state, action) => {
      state.needToClear = false;
      state.count = 0
    },
  },
});

export const { setClearToothAndComplaint, removeClearToothAndComplaint } = clearToothAndComlaintSlice.actions;
export default clearToothAndComlaintSlice.reducer;
