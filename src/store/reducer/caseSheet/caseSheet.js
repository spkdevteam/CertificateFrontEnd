import { createSlice } from "@reduxjs/toolkit";


export const caseSheetSlice = createSlice({
    name: "caseSheet",
    initialState: {
        caseSheetData: {},
        hasCaseSheet: false
    },
    reducers: {
        setCaseSheetData: (state, action) => {
            state.caseSheetData = action.payload;
            state.hasCaseSheet = true;
        },
        removeCaseSheetData: (state, action) => {
            state.caseSheetData = null;
            state.hasCaseSheet = false;
        },
    },
});

export const { setCaseSheetData, removeCaseSheetData } = caseSheetSlice.actions;
export default caseSheetSlice.reducer;
