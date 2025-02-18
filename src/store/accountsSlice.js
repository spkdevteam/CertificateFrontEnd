import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name:'accounts',
    initialState:{
        updateAccounts:false
    },
    reducers:{
        enableAccountsApiUpdate:(state)=>{
                state.updateAccounts = true
        },
        disableAccountsUpdate:(state)=>{
            state.updateAccounts = false
        }

    }
})

export const {enableAccountsApiUpdate,disableAccountsUpdate} = accountSlice.actions 
export default accountSlice.reducer