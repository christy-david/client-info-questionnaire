import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isFirstLanguage: null,
  languageDetails: [
    {
      language: "",
      proficiencyLevel: "",
      isMainLanguage: "",
    },
  ],
}

const languageProficiencySlice = createSlice({
  name: "languageProficiency",
  initialState,
  reducers: {
    setIsFirstLanguage(state, action) {
      state.isFirstLanguage = action.payload
    },
    updateLanguageDetails(state, action) {
      const { index, field, value } = action.payload
      state.languageDetails[index][field] = value
    },
    addLanguage(state) {
      state.languageDetails.push({
        language: "",
        proficiencyLevel: "",
        isMainLanguage: "",
      })
    },
    removeLanguage(state, action) {
      state.languageDetails.splice(action.payload, 1)
    },
  },
})

export const {
  setIsFirstLanguage,
  updateLanguageDetails,
  addLanguage,
  removeLanguage,
} = languageProficiencySlice.actions

export default languageProficiencySlice.reducer
