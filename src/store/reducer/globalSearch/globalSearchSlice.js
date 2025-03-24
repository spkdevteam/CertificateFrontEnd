import { createSlice } from "@reduxjs/toolkit";


const globalSearchSlice=createSlice({
    name:"globalSearch",
    initialState:{
      search:""
    },
    reducers:{
      updateGlobalSearch:(state,action)=>{
        state.search=action?.payload
      }
    }

})

export const {updateGlobalSearch}=globalSearchSlice.actions

export default globalSearchSlice.reducer