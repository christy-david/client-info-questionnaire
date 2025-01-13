import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const aliasSlice = createSlice({
  name: "alias",
  initialState: {
    hasAlias: "",
    aliases: [
      {
        id: uuidv4(), // Generate unique ID for the first alias
        familyName: "",
        givenName: "",
        dob: "",
        typeOfName: "",
      },
    ],
    errors: {},
  },
  reducers: {
    setHasAlias: (state, action) => {
      state.hasAlias = action.payload
      if (action.payload === "no") {
        // Reset aliases if the user selects "No"
        state.aliases = [
          {
            id: uuidv4(),
            familyName: "",
            givenName: "",
            dob: "",
            typeOfName: "",
          },
        ]
      }
    },
    addAlias: (state) => {
      state.aliases.push({
        id: uuidv4(), // Generate a new unique ID
        familyName: "",
        givenName: "",
        dob: "",
        typeOfName: "",
      })
    },
    deleteAlias: (state, action) => {
      state.aliases = state.aliases.filter(
        (alias) => alias.id !== action.payload
      )
    },
    updateAlias: (state, action) => {
      const { id, field, value } = action.payload
      const alias = state.aliases.find((alias) => alias.id === id)
      if (alias) alias[field] = value
    },
    validateForm: (state) => {
      const errors = {}
      state.aliases.forEach((alias) => {
        const aliasErrors = {}
        if (!alias.familyName)
          aliasErrors.familyName = "Family Name is required"
        if (!alias.givenName)
          aliasErrors.givenName = "Given Name(s) are required"
        if (!alias.dob) aliasErrors.dob = "Date of Birth is required"
        if (!alias.typeOfName)
          aliasErrors.typeOfName = "Type of Name is required"
        if (Object.keys(aliasErrors).length > 0) errors[alias.id] = aliasErrors
      })
      state.errors = errors
    },
  },
})

export const { setHasAlias, addAlias, deleteAlias, updateAlias, validateForm } =
  aliasSlice.actions

export default aliasSlice.reducer
