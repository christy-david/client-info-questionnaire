import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const initialState = {
  hasCitizenship: "",
  citizenships: [
    {
      id: uuidv4(),
      country: "",
      obtainedBy: "",
      dateObtained: "",
      stillHold: "",
      dateCeased: "",
      ceasedReason: "",
      hasPassport: "",
      passportDetails: [
        {
          id: uuidv4(),
          passportNumber: "",
          nameAsShown: { familyName: "", givenName: "" },
          nationality: "",
          dateIssued: "",
          dateExpiry: "",
          placeOfIssue: "",
          documentStatus: "",
          fullNameOnPassport: "", // Added the new field
        },
      ],
    },
  ],
  errors: {},
}

const citizenshipSlice = createSlice({
  name: "citizenship",
  initialState,
  reducers: {
    setHasCitizenship: (state, action) => {
      state.hasCitizenship = action.payload
      if (action.payload === "no") {
        state.citizenships = [
          {
            id: uuidv4(),
            country: "",
            obtainedBy: "",
            dateObtained: "",
            stillHold: "",
            dateCeased: "",
            ceasedReason: "",
            hasPassport: "",
            passportDetails: [],
          },
        ]
      }
    },
    addCitizenship: (state) => {
      state.citizenships.push({
        id: uuidv4(),
        country: "",
        obtainedBy: "",
        dateObtained: "",
        stillHold: "",
        dateCeased: "",
        ceasedReason: "",
        hasPassport: "",
        passportDetails: [],
      })
    },
    deleteCitizenship: (state, action) => {
      state.citizenships = state.citizenships.filter(
        (citizenship) => citizenship.id !== action.payload
      )
    },
    updateCitizenship: (state, action) => {
      const { id, field, value } = action.payload
      const citizenship = state.citizenships.find(
        (citizenship) => citizenship.id === id
      )
      if (citizenship) citizenship[field] = value
    },
    addPassportDetails: (state, action) => {
      const { citizenshipId } = action.payload
      const citizenship = state.citizenships.find(
        (citizenship) => citizenship.id === citizenshipId
      )
      if (citizenship) {
        citizenship.passportDetails.push({
          id: uuidv4(),
          passportNumber: "",
          nameAsShown: { familyName: "", givenName: "" },
          nationality: "",
          dateIssued: "",
          dateExpiry: "",
          placeOfIssue: "",
          documentStatus: "",
          fullNameOnPassport: "", // Added field for full name check
        })
      }
    },
    deletePassportDetails: (state, action) => {
      const { citizenshipId, passportId } = action.payload
      const citizenship = state.citizenships.find(
        (citizenship) => citizenship.id === citizenshipId
      )
      if (citizenship) {
        citizenship.passportDetails = citizenship.passportDetails.filter(
          (passport) => passport.id !== passportId
        )
      }
    },
    updatePassportDetails: (state, action) => {
      const { citizenshipId, passportId, field, value } = action.payload
      const citizenship = state.citizenships.find(
        (citizenship) => citizenship.id === citizenshipId
      )
      if (citizenship) {
        const passport = citizenship.passportDetails.find(
          (passport) => passport.id === passportId
        )
        if (passport) passport[field] = value
      }
    },
    validateForm: (state) => {
      const errors = {}
      state.citizenships.forEach((citizenship) => {
        const citizenshipErrors = {}
        if (!citizenship.country)
          citizenshipErrors.country = "Country is required"
        if (!citizenship.obtainedBy)
          citizenshipErrors.obtainedBy =
            "Method of obtaining citizenship is required"
        if (!citizenship.dateObtained)
          citizenshipErrors.dateObtained =
            "Date of citizenship obtained is required"
        if (citizenship.stillHold === undefined)
          citizenshipErrors.stillHold = "Current status is required"
        if (citizenship.stillHold === "no") {
          if (!citizenship.dateCeased)
            citizenshipErrors.dateCeased = "Date of cessation is required"
          if (!citizenship.ceasedReason)
            citizenshipErrors.ceasedReason = "Reason for cessation is required"
        }
        if (citizenship.hasPassport === "yes") {
          citizenship.passportDetails.forEach((passport) => {
            const passportErrors = {}
            if (!passport.passportNumber)
              passportErrors.passportNumber = "Passport number is required"
            if (!passport.nameAsShown.familyName)
              passportErrors.nameAsShown.familyName = "Family name is required"
            if (!passport.nameAsShown.givenName)
              passportErrors.nameAsShown.givenName = "Given name is required"
            if (!passport.nationality)
              passportErrors.nationality = "Nationality is required"
            if (!passport.dateIssued)
              passportErrors.dateIssued = "Date of issue is required"
            if (!passport.dateExpiry)
              passportErrors.dateExpiry = "Date of expiry is required"
            if (!passport.placeOfIssue)
              passportErrors.placeOfIssue = "Place of issue is required"
            if (!passport.documentStatus)
              passportErrors.documentStatus = "Document status is required"
            if (passport.fullNameOnPassport === "")
              passportErrors.fullNameOnPassport =
                "Please indicate if your current full name is shown"
            if (Object.keys(passportErrors).length > 0)
              passportErrors[passport.id] = passportErrors
            if (Object.keys(passportErrors).length > 0) {
              errors[citizenship.id] = passportErrors
            }
          })
        }
        if (Object.keys(citizenshipErrors).length > 0)
          errors[citizenship.id] = citizenshipErrors
      })
      state.errors = errors
    },
  },
})

export const {
  setHasCitizenship,
  addCitizenship,
  deleteCitizenship,
  updateCitizenship,
  addPassportDetails,
  deletePassportDetails,
  updatePassportDetails,
  validateForm,
} = citizenshipSlice.actions

export default citizenshipSlice.reducer
