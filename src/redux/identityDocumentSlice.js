import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  hasIdentityDocument: null,
  documents: [],
}

const identityDocumentSlice = createSlice({
  name: "identityDocument",
  initialState,
  reducers: {
    setHasIdentityDocument: (state, action) => {
      state.hasIdentityDocument = action.payload
      if (action.payload === false) {
        state.documents = [] // Reset documents if the answer is "No"
      }
    },
    addDocument: (state) => {
      state.documents.push({
        type: "",
        number: "",
        isCurrentName: null,
        shownName: { familyName: "", givenNames: "" },
        dates: { issued: "", expired: "" },
        country: "",
      })
    },
    removeDocument: (state, action) => {
      state.documents.splice(action.payload, 1) // Remove document at index
    },
    updateDocument: (state, action) => {
      const { index, field, value } = action.payload
      const document = state.documents[index]
      if (field === "shownName" || field === "dates") {
        document[field] = { ...document[field], ...value }
      } else {
        document[field] = value
      }
    },
  },
})

export const {
  setHasIdentityDocument,
  addDocument,
  removeDocument,
  updateDocument,
} = identityDocumentSlice.actions

export default identityDocumentSlice.reducer
