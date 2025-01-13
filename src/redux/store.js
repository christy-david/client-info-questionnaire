// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit"

import clientFileNumberReducer from "./clientFileNumberSlice"
import questionnaireCompleterReducer from "./questionnaireCompleterSlice"
import intentionsReducer from "./intentionsSlice"
import mainApplicantReducer from "./mainApplicantSlice"
import aliasReducer from "./aliasSlice"
import chineseCodeReducer from "./chineseCodeSlice"
import descentReducer from "./descentSlice"
import citizenshipReducer from "./citizenshipSlice"

export const store = configureStore({
  reducer: {
    clientFileNumber: clientFileNumberReducer,
    questionnaireCompleter: questionnaireCompleterReducer,
    intentions: intentionsReducer,
    mainApplicant: mainApplicantReducer,
    alias: aliasReducer,
    chineseCode: chineseCodeReducer,
    descent: descentReducer,
    citizenship: citizenshipReducer,
  },
})
