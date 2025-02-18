import { createSlice } from "@reduxjs/toolkit";


export const clearToothAndFindingtSlice = createSlice({
  name: "clearToothAndFinding",
  initialState: {
    needToClear: false,
    count : 0,
  },
  reducers: {
    setClearToothAndFinding: (state, action) => {
      state.needToClear = true;
      state.count += 1;
    },
    removeClearToothAndFinding: (state, action) => {
      state.needToClear = false;
      state.count = 0
    },
  },
});

export const { setClearToothAndFinding, removeClearToothAndFinding } = clearToothAndFindingtSlice.actions;
export default clearToothAndFindingtSlice.reducer;
