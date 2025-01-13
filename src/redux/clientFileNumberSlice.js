// src/redux/clientFileNumberSlice.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  clientFileNumber: "",
  errors: {
    clientFileNumber: null,
  },
}

const clientFileNumberSlice = createSlice({
  name: "clientFileNumber",
  initialState,
  reducers: {
    setClientFileNumber(state, action) {
      state.clientFileNumber = action.payload
    },
    setClientFileNumberError(state, action) {
      state.errors.clientFileNumber = action.payload
    },
  },
})

export const { setClientFileNumber, setClientFileNumberError } =
  clientFileNumberSlice.actions

export default clientFileNumberSlice.reducer
