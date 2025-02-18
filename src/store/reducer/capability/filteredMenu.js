import { createSlice } from "@reduxjs/toolkit";

const storedAdmin = JSON.parse(localStorage.getItem("adminInfo"));


export const filteredMenuSlice = createSlice({
  name: "filteredMenu",
  initialState: {
    filteredMenu:  [],
    isFilteredMenu: false
  },
  reducers: {
    setFilteredMenu: (state, action) => {
      console.log("action",action);
      
      state.filteredMenu = action.payload;
      state.isFilteredMenu = true;
    },
    removeFilteredMenu: (state, action) => {
      state.filteredMenu = [];
      state.isFilteredMenu = false;
    },
  },
});

export const { setFilteredMenu, removeFilteredMenu } = filteredMenuSlice.actions;
export default filteredMenuSlice.reducer;
