// src/redux/intentionsSlice.js
import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const intentionsSlice = createSlice({
  name: "intentions",
  initialState: {
    id: uuidv4(),
    purpose: "",
    timeInAustralia: "",
    includeFamily: "",
    subQuestions: {
      form80Required: "",
      visaType: "",
      ageForChildVisa: "",
    },
    errors: {},
  },
  reducers: {
    setPurpose: (state, action) => {
      state.purpose = action.payload
      // Reset dependent fields if purpose changes
      state.subQuestions = {
        form80Required: "",
        visaType: "",
        ageForChildVisa: "",
      }
    },
    setTimeInAustralia: (state, action) => {
      state.timeInAustralia = action.payload
    },
    setIncludeFamily: (state, action) => {
      state.includeFamily = action.payload
    },
    setForm80Required: (state, action) => {
      state.subQuestions.form80Required = action.payload
    },
    setVisaType: (state, action) => {
      state.subQuestions.visaType = action.payload
    },
    setAgeForChildVisa: (state, action) => {
      state.subQuestions.ageForChildVisa = action.payload
    },
    validateForm: (state) => {
      const errors = {}
      if (!state.purpose) errors.purpose = "Purpose is required"
      if (!state.timeInAustralia) errors.timeInAustralia = "Time is required"
      if (!state.includeFamily) errors.includeFamily = "Response is required"
      state.errors = errors
    },
  },
})

export const {
  setPurpose,
  setTimeInAustralia,
  setIncludeFamily,
  setForm80Required,
  setVisaType,
  setAgeForChildVisa,
  validateForm,
} = intentionsSlice.actions

export default intentionsSlice.reducer
