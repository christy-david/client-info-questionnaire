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
import identityDocumentReducer from "./identityDocumentSlice"
import employmentDetailsReducer from "./employmentDetailsSlice"
import educationReducer from "./educationSlice"
import englishTestReducer from "./englishTestSlice"
import languageProficiencyReducer from "./languageProficiencySlice"

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
    identityDocument: identityDocumentReducer,
    employmentDetails: employmentDetailsReducer,
    education: educationReducer,
    englishTest: englishTestReducer,
    languageProficiency: languageProficiencyReducer,
  },
})
