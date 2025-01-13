import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  prefix: "",
  gender: "",
  givenNames: "",
  familyName: "",
  preferredNames: "",
  dateOfBirth: "",
  birthLocationSuburb: "",
  birthLocationCity: "",
  stateProvince: "",
  birthCountry: "",
  maritalStatus: "",
  isInNewRelationship: "", // New field for "Are you in a new relationship of any kind?"
  doLiveTogetherOrEngaged: "", // New field for "Do you and your new partner live together or are you engaged?"
  errors: {
    prefix: "",
    gender: "",
    givenNames: "",
    familyName: "",
    preferredNames: "",
    dateOfBirth: "",
    birthLocationSuburb: "",
    birthLocationCity: "",
    stateProvince: "",
    birthCountry: "",
    maritalStatus: "",
    isInNewRelationship: "",
    doLiveTogetherOrEngaged: "",
  },
}

const mainApplicantSlice = createSlice({
  name: "mainApplicant",
  initialState,
  reducers: {
    setPrefix: (state, action) => {
      state.prefix = action.payload
    },
    setGender: (state, action) => {
      state.gender = action.payload
    },
    setGivenNames: (state, action) => {
      state.givenNames = action.payload
    },
    setFamilyName: (state, action) => {
      state.familyName = action.payload
    },
    setPreferredNames: (state, action) => {
      state.preferredNames = action.payload
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload
    },
    setBirthLocationSuburb: (state, action) => {
      state.birthLocationSuburb = action.payload
    },
    setBirthLocationCity: (state, action) => {
      state.birthLocationCity = action.payload
    },
    setStateProvince: (state, action) => {
      state.stateProvince = action.payload
    },
    setBirthCountry: (state, action) => {
      state.birthCountry = action.payload
    },
    setMaritalStatus: (state, action) => {
      state.maritalStatus = action.payload
    },
    setIsInNewRelationship: (state, action) => {
      state.isInNewRelationship = action.payload
    },
    setDoLiveTogetherOrEngaged: (state, action) => {
      state.doLiveTogetherOrEngaged = action.payload
    },
    setErrors: (state, action) => {
      state.errors = action.payload
    },
  },
})

export const {
  setPrefix,
  setGender,
  setGivenNames,
  setFamilyName,
  setPreferredNames,
  setDateOfBirth,
  setBirthLocationSuburb,
  setBirthLocationCity,
  setStateProvince,
  setBirthCountry,
  setMaritalStatus,
  setIsInNewRelationship,
  setDoLiveTogetherOrEngaged,
  setErrors,
} = mainApplicantSlice.actions

export default mainApplicantSlice.reducer
