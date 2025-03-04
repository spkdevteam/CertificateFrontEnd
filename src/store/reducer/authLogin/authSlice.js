import { createSlice } from "@reduxjs/toolkit";


const storedAdmin = JSON.parse(localStorage.getItem("KOSMO_client_adminInfo"));


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    clientUser:  storedAdmin ? storedAdmin : null,
    isAuth: storedAdmin ? true : false,
  },
  reducers: {
    setClientUser: (state, action) => {
      state.clientUser = action.payload;
      state.isAuth = true;
    },
    logOut: (state, action) => {
      state.clientUser = null;
      state.isAuth = false;
    },
  },
});

export const { setClientUser, logOut } = authSlice.actions;
export default authSlice.reducer;

//  const authSlice=createSlice({
//   name:"auth",
//   initialState:{
//     userName:null
//   },
//   reducers:{
//     setUser:(state,action)=>{
//       state.userName=action?.payload
//     }
//   }
// })

// export const {setUser}=authSlice.actions
// export default authSlice.reducer
