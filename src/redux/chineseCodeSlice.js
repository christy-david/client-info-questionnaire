import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const chineseCodeSlice = createSlice({
  name: "chineseCode",
  initialState: {
    usesChineseCode: "",
    code: "",
    id: uuidv4(), // Assign a unique ID for consistency
    errors: {},
  },
  reducers: {
    setUsesChineseCode: (state, action) => {
      state.usesChineseCode = action.payload
      if (action.payload === "no") {
        state.code = "" // Reset code if "No" is selected
      }
    },
    updateCode: (state, action) => {
      state.code = action.payload
    },
    validateForm: (state) => {
      const errors = {}
      if (state.usesChineseCode === "yes" && !state.code) {
        errors.code = "Code is required"
      }
      state.errors = errors
    },
  },
})

export const { setUsesChineseCode, updateCode, validateForm } =
  chineseCodeSlice.actions

export default chineseCodeSlice.reducer
