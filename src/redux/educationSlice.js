import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  hasEducation: null,
  educationDetails: [],
}

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setHasEducation(state, action) {
      state.hasEducation = action.payload
      if (action.payload && state.educationDetails.length === 0) {
        state.educationDetails.push({
          fromDate: "",
          toDate: "",
          qualificationType: "",
          courseName: "",
          institutionDetails: {
            name: "",
            street: "",
            city: "",
            state: "",
            postCode: "",
            country: "",
          },
          courseStatus: "",
          courseLanguage: "",
        })
      }
    },
    addEducation(state) {
      state.educationDetails.push({
        fromDate: "",
        toDate: "",
        qualificationType: "",
        courseName: "",
        institutionDetails: {
          name: "",
          street: "",
          city: "",
          state: "",
          postCode: "",
          country: "",
        },
        courseStatus: "",
        courseLanguage: "",
      })
    },
    removeEducation(state, action) {
      state.educationDetails.splice(action.payload, 1)
    },
    updateEducation(state, action) {
      const { index, field, value } = action.payload
      if (field.includes("institutionDetails.")) {
        const institutionField = field.split(".")[1]
        state.educationDetails[index].institutionDetails[institutionField] =
          value
      } else {
        state.educationDetails[index][field] = value
      }
    },
  },
})

export const {
  setHasEducation,
  addEducation,
  removeEducation,
  updateEducation,
} = educationSlice.actions

export default educationSlice.reducer
