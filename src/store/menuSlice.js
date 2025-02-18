import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name:'menuSlice',
    initialState:{
        menuName:'',
        subMenu:''
    },
    reducers:{
        updateMenu:(state,action)=>{
            state.menuName = action.payload
        },
        updateSubMenu:(state,action)=>{
            state.subMenu = action.payload
        },
    }
})

export const {updateMenu,updateSubMenu}= menuSlice.actions
export default menuSlice.reducer
