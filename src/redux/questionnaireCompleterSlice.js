// src/redux/questionnaireCompleterSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isMainApplicant: "yes", // Default to "yes"
  completerDetails: {
    prefix: "",
    gender: "",
    givenNames: "",
    familyName: "",
    preferredNames: "",
  },
}

const questionnaireCompleterSlice = createSlice({
  name: "questionnaireCompleter",
  initialState,
  reducers: {
    setIsMainApplicant(state, action) {
      state.isMainApplicant = action.payload
      if (action.payload === "yes") {
        // Reset completerDetails if the user is the Main Applicant
        state.completerDetails = {
          prefix: "",
          gender: "",
          givenNames: "",
          familyName: "",
          preferredNames: "",
        }
      }
    },
    updateCompleterDetails(state, action) {
      const { field, value } = action.payload
      state.completerDetails[field] = value
    },
  },
})

export const { setIsMainApplicant, updateCompleterDetails } =
  questionnaireCompleterSlice.actions

export default questionnaireCompleterSlice.reducer
