import { createSlice } from "@reduxjs/toolkit";

const updateTableSlice = createSlice({
    name:'TableSlice',
    initialState:{
        updateStatus:0
    },
    reducers:{
        updateTableTableStatus:(state,action)=>{
            state.updateStatus = state.updateStatus+1
        }
    }
})


export const {updateTableTableStatus} = updateTableSlice.actions
export default updateTableSlice.reducer