import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const descentSlice = createSlice({
  name: "descent",
  initialState: {
    descent: "", // Track whether the user is of Arabic or Russian descent
    arabicFamilyName: "",
    arabicGivenName: "",
    russianFamilyName: "",
    russianGivenName: "",
    id: uuidv4(), // Assign a unique ID for consistency
    errors: {},
  },
  reducers: {
    setDescent: (state, action) => {
      state.descent = action.payload
      // Reset fields when the answer is "no"
      if (action.payload === "no") {
        state.arabicFamilyName = ""
        state.arabicGivenName = ""
        state.russianFamilyName = ""
        state.russianGivenName = ""
      }
    },
    updateArabicFamilyName: (state, action) => {
      state.arabicFamilyName = action.payload
    },
    updateArabicGivenName: (state, action) => {
      state.arabicGivenName = action.payload
    },
    updateRussianFamilyName: (state, action) => {
      state.russianFamilyName = action.payload
    },
    updateRussianGivenName: (state, action) => {
      state.russianGivenName = action.payload
    },
    validateForm: (state) => {
      const errors = {}
      if (state.descent === "yes") {
        if (!state.arabicFamilyName || !state.arabicGivenName) {
          errors.arabicFields =
            "Arabic fields (Family Name and Given Name) are required"
        }
        if (!state.russianFamilyName || !state.russianGivenName) {
          errors.russianFields =
            "Russian fields (Family Name and Given Name) are required"
        }
      }
      state.errors = errors
    },
  },
})

export const {
  setDescent,
  updateArabicFamilyName,
  updateArabicGivenName,
  updateRussianFamilyName,
  updateRussianGivenName,
  validateForm,
} = descentSlice.actions

export default descentSlice.reducer
