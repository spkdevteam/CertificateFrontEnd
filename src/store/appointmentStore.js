import { createSlice } from "@reduxjs/toolkit";
import { bookingTemplate } from "../constant/bookingTemplate";
import { view } from "framer-motion/client";

const updateSelection = (stateObject, selectedKey) => {
  Object.keys(stateObject).forEach((key) => {
    stateObject[key] = key === selectedKey;
  });
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    listCategory: {
      Doctor: true,
      Chair: false,
    },
    view: 'Day',
    viewFilterMenu: true,
    activeDate: new Date().toISOString("en-CA", { timeZone: "Asia/Kolkata" }),
    branch: "",
    bookingData: bookingTemplate,

    updateBooking: false,
    searchKey: '',
    fromDate: '',
    toDate: '',
    weeklyBookingdData: [] ,
    monthlyBookingData:[],
    activeMonthStart:null,
    activeMonthEnd:null
  },
  reducers: {
    changeListCategory: (state, action) => {
      updateSelection(state.listCategory, action.payload);
    },
    changeCalenderView: (state, action) => {
      console.log(action?.payload)
      state.view = action.payload

    },
    toggleCalenderMenuBar: (state) => {
      state.viewFilterMenu = !state.viewFilterMenu;
    },
    updateActiveDate: (state, action) => {
      state.activeDate = action.payload;
    },
    updateActiveBranch: (state, action) => {
      state.branch = action.payload;
    },
    setBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
    updateBookingStatus: (state, action) => {
      state.updateBooking = action.payload;
    },
    updateSearchKey: (state, action) => {
      state.searchKey = action.payload
    },
    updateAppointmentFilterPerod: (state, actions) => {
      state.fromDate = actions.payload.fromDate
      state.toDate = actions.payload.toDate
    },
    updateMonthlyFilterPerod: (state, actions) => {
      state.activeMonthStart = actions.payload.fromDate
      state.activeMonthEnd = actions.payload.toDate
    },
    updateWeeklyBookigData: (state, action) => {
      state.weeklyBookingdData = action.payload
    },
    updateMonthlyBookigData: (state, action) => {
      state.monthlyBookingData = action.payload
    }
  },
});

export const {
  changeListCategory,
  changeCalenderView,
  toggleCalenderMenuBar,
  updateActiveDate,
  updateActiveBranch,
  setBookingData,
  updateBookingStatus,
  updateSearchKey,
  updateWeeklyBookigData,
  updateAppointmentFilterPerod,
  updateMonthlyFilterPerod,
  updateMonthlyBookigData
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
