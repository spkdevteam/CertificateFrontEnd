import theme from "@material-tailwind/react/theme";
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'normal'
    },
    reducers: {
        changeActiveTheme: (state, action) => {
            state.theme =  action.payload
        }
    }
})

export const { changeActiveTheme } = themeSlice.actions
export default themeSlice.reducer