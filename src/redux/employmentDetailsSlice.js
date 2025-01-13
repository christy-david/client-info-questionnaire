import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isEmployed: null,
  employmentDetails: [],
}

const employmentDetailsSlice = createSlice({
  name: "employmentDetails",
  initialState,
  reducers: {
    setIsEmployed(state, action) {
      state.isEmployed = action.payload
      if (action.payload && state.employmentDetails.length === 0) {
        state.employmentDetails.push({
          fromDate: "",
          toDate: "",
          status: "",
          position: "",
          country: "",
        })
      }
    },
    addEmployment(state) {
      state.employmentDetails.push({
        fromDate: "",
        toDate: "",
        status: "",
        position: "",
        country: "",
      })
    },
    removeEmployment(state, action) {
      state.employmentDetails.splice(action.payload, 1)
    },
    updateEmployment(state, action) {
      const { index, field, value } = action.payload
      state.employmentDetails[index][field] = value
    },
  },
})

export const {
  setIsEmployed,
  addEmployment,
  removeEmployment,
  updateEmployment,
} = employmentDetailsSlice.actions

export default employmentDetailsSlice.reducer
