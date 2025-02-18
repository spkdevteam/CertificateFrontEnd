import { createSlice } from "@reduxjs/toolkit";


export const complaintSlice = createSlice({
  name: "complaint",
  initialState: {
    complaint:  [],
    hasComplaint: false
  },
  reducers: {
    setComplaintData: (state, action) => {
      state.complaint = action.payload;
      state.hasComplaint = true;
    },
    removeComplaint: (state, action) => {
      state.complaint = null;
      state.hasComplaint = false;
    },
  },
});

export const { setComplaintData, removeComplaint } = complaintSlice.actions;
export default complaintSlice.reducer;
