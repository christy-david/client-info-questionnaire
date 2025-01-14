import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  hasTakenTest: null,
  englishTests: [],
}

const englishTestSlice = createSlice({
  name: "englishTest",
  initialState,
  reducers: {
    setHasTakenTest(state, action) {
      state.hasTakenTest = action.payload
      if (action.payload && state.englishTests.length === 0) {
        state.englishTests.push({
          testType: "",
          testDate: "",
          testLocation: "",
          testReferenceNumber: "",
          listeningScore: "",
          readingScore: "",
          writingScore: "",
          speakingScore: "",
          overallScore: "",
        })
      }
    },
    addEnglishTest(state) {
      state.englishTests.push({
        testType: "",
        testDate: "",
        testLocation: "",
        testReferenceNumber: "",
        listeningScore: "",
        readingScore: "",
        writingScore: "",
        speakingScore: "",
        overallScore: "",
      })
    },
    removeEnglishTest(state, action) {
      state.englishTests.splice(action.payload, 1)
    },
    updateEnglishTest(state, action) {
      const { index, field, value } = action.payload
      state.englishTests[index][field] = value
    },
  },
})

export const {
  setHasTakenTest,
  addEnglishTest,
  removeEnglishTest,
  updateEnglishTest,
} = englishTestSlice.actions

export default englishTestSlice.reducer
