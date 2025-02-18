import { createSlice } from "@reduxjs/toolkit";

const moDalSlice = createSlice({
    name: "handleMyModal",
    initialState: {
        showModal: false,
        Component: null,
        data:null
    },
    reducers: {
        switchModal: (state, action) => {
            state.showModal = action.payload;
        },
        pushComponentToModal :(state, action) => {
            
            const {element,data} = action.payload
            console.log(element,data,'action payload')

            state.Component = element 
            state.data = data
        },
    },
});


// Correctly export the action
export const { switchModal ,pushComponentToModal} = moDalSlice.actions;

// Export the reducer
export default moDalSlice.reducer;
