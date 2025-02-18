import { createSlice } from "@reduxjs/toolkit";


export const clearToothAndServiceSlice = createSlice({
  name: "clearToothAndService",
  initialState: {
    needToClear: false,
    count : 0,
  },
  reducers: {
    setClearToothAndService: (state, action) => {
      state.needToClear = true;
      state.count += 1;
    },
    removeClearToothAndService: (state, action) => {
      state.needToClear = false;
      state.count = 0
    },
  },
});

export const { setClearToothAndService, removeClearToothAndService } = clearToothAndServiceSlice.actions;
export default clearToothAndServiceSlice.reducer;
