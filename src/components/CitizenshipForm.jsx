import { useSelector, useDispatch } from "react-redux"
import {
  setHasCitizenship,
  addCitizenship,
  deleteCitizenship,
  updateCitizenship,
  addPassportDetails,
  deletePassportDetails,
  updatePassportDetails,
} from "../redux/citizenshipSlice"
import countries from "../data/countries.json"

const CitizenshipForm = () => {
  const dispatch = useDispatch()
  const { hasCitizenship, citizenships } = useSelector(
    (state) => state.citizenship
  )

  const handleHasCitizenshipChange = (response) => {
    dispatch(setHasCitizenship(response))
  }

  const handleAddCitizenship = () => {
    dispatch(addCitizenship())
  }

  const handleDeleteCitizenship = (id) => {
    dispatch(deleteCitizenship(id))
  }

  const handleCitizenshipChange = (id, field, value) => {
    dispatch(updateCitizenship({ id, field, value }))
  }

  const handleAddPassport = (citizenshipId) => {
    dispatch(addPassportDetails({ citizenshipId }))
  }

  const handleDeletePassport = (citizenshipId, passportId) => {
    dispatch(deletePassportDetails({ citizenshipId, passportId }))
  }

  const handlePassportChange = (citizenshipId, passportId, field, value) => {
    dispatch(updatePassportDetails({ citizenshipId, passportId, field, value }))
  }

  return (
    <div className='space-y-6'>
      <h3 className='text-xl font-semibold'>Citizenship Details</h3>
      <div>
        <label>
          Are you currently or have you been a citizen of any country?
        </label>
        <div className='space-x-4'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='hasCitizenship'
              value='yes'
              checked={hasCitizenship === "yes"}
              onChange={() => handleHasCitizenshipChange("yes")}
              className='form-radio'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='hasCitizenship'
              value='no'
              checked={hasCitizenship === "no"}
              onChange={() => handleHasCitizenshipChange("no")}
              className='form-radio'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>
      </div>

      {hasCitizenship === "no" && (
        <div className='mt-4'>
          <div className='font-medium p-5 border border-orange-500 bg-orange-200 rounded-md mb-4'>
            <p className='text-orange-500'>
              You have answered that you are not a citizen of any country. You
              must provide details of how, when and why you are stateless.
            </p>
          </div>
          <textarea
            placeholder='Provide details here'
            className='mt-2 p-3 border border-gray-300 rounded w-full'
          />
        </div>
      )}

      {hasCitizenship === "yes" &&
        citizenships.map((citizenship) => (
          <div key={citizenship.id} className='space-y-4'>
            <h4 className='font-semibold'>Insert details of the citizenship</h4>

            <div className='border p-4 rounded-md shadow-sm'>
              <div className='space-y-4'>
                <div>
                  <label className='block'>Country of Citizenship</label>
                  <select
                    value={citizenship.country}
                    onChange={(e) =>
                      handleCitizenshipChange(
                        citizenship.id,
                        "country",
                        e.target.value
                      )
                    }
                    className='mt-2 p-3 border border-gray-300 rounded w-full'
                  >
                    <option value=''>Select...</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block'>How was this Obtained?</label>
                  <select
                    value={citizenship.obtainedBy}
                    onChange={(e) =>
                      handleCitizenshipChange(
                        citizenship.id,
                        "obtainedBy",
                        e.target.value
                      )
                    }
                    className='mt-2 p-3 border border-gray-300 rounded w-full'
                  >
                    <option value=''>Select...</option>
                    <option value='Birth'>Birth</option>
                    <option value='Descent'>Descent</option>
                    <option value='Grant'>Grant</option>
                    <option value='Naturalisation'>Naturalisation</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>

                <div>
                  <label className='block'>Date Obtained</label>
                  <input
                    type='date'
                    value={citizenship.dateObtained}
                    onChange={(e) =>
                      handleCitizenshipChange(
                        citizenship.id,
                        "dateObtained",
                        e.target.value
                      )
                    }
                    className='mt-2 p-3 border border-gray-300 rounded w-full'
                  />
                </div>

                <div>
                  <label className='block'>
                    Do you still currently hold this Citizenship?
                  </label>
                  <div className='space-x-4'>
                    <label className='inline-flex items-center'>
                      <input
                        type='radio'
                        name={`stillHold-${citizenship.id}`}
                        value='yes'
                        checked={citizenship.stillHold === "yes"}
                        onChange={() =>
                          handleCitizenshipChange(
                            citizenship.id,
                            "stillHold",
                            "yes"
                          )
                        }
                        className='form-radio'
                      />
                      <span className='ml-2'>Yes</span>
                    </label>
                    <label className='inline-flex items-center'>
                      <input
                        type='radio'
                        name={`stillHold-${citizenship.id}`}
                        value='no'
                        checked={citizenship.stillHold === "no"}
                        onChange={() =>
                          handleCitizenshipChange(
                            citizenship.id,
                            "stillHold",
                            "no"
                          )
                        }
                        className='form-radio'
                      />
                      <span className='ml-2'>No</span>
                    </label>
                  </div>
                </div>

                {citizenship.stillHold === "no" && (
                  <>
                    <div>
                      <label className='block'>Date Ceased</label>
                      <input
                        type='date'
                        value={citizenship.dateCeased}
                        onChange={(e) =>
                          handleCitizenshipChange(
                            citizenship.id,
                            "dateCeased",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      />
                    </div>

                    <div>
                      <label className='block'>
                        Why did this Citizenship cease?
                      </label>
                      <select
                        value={citizenship.ceasedReason}
                        onChange={(e) =>
                          handleCitizenshipChange(
                            citizenship.id,
                            "ceasedReason",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      >
                        <option value=''>Select...</option>
                        <option value='Cancelled'>Cancelled</option>
                        <option value='Renounced'>Renounced</option>
                        <option value='Other'>Other</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label className='block'>
                    Have you ever held a Passport for this Country?
                  </label>
                  <div className='space-x-4'>
                    <label className='inline-flex items-center'>
                      <input
                        type='radio'
                        name={`hasPassport-${citizenship.id}`}
                        value='yes'
                        checked={citizenship.hasPassport === "yes"}
                        onChange={() =>
                          handleCitizenshipChange(
                            citizenship.id,
                            "hasPassport",
                            "yes"
                          )
                        }
                        className='form-radio'
                      />
                      <span className='ml-2'>Yes</span>
                    </label>
                    <label className='inline-flex items-center'>
                      <input
                        type='radio'
                        name={`hasPassport-${citizenship.id}`}
                        value='no'
                        checked={citizenship.hasPassport === "no"}
                        onChange={() =>
                          handleCitizenshipChange(
                            citizenship.id,
                            "hasPassport",
                            "no"
                          )
                        }
                        className='form-radio'
                      />
                      <span className='ml-2'>No</span>
                    </label>
                  </div>
                </div>

                {/* Delete country */}
                {citizenships.length > 1 && (
                  <button
                    type='button'
                    onClick={() => handleDeleteCitizenship(citizenship.id)}
                    className='mt-4 text-red-600'
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>

            {citizenship.hasPassport === "yes" &&
              citizenship.passportDetails.map((passport) => (
                <div key={passport.id} className='space-y-4'>
                  <h4 className='font-semibold'>
                    Insert details of all passports or travel documents held for
                    this country: (Note: If a passport is re-issued record each
                    issue as a seperate entry)
                  </h4>

                  <div className='border p-4 rounded-md shadow-sm space-y-6'>
                    <div>
                      <label className='block'>Passport/ Document Number</label>
                      <input
                        type='text'
                        value={passport.passportNumber}
                        onChange={(e) =>
                          handlePassportChange(
                            citizenship.id,
                            passport.id,
                            "passportNumber",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      />
                    </div>

                    <div>
                      <label className='block'>
                        Is your current full name shown on this Passport?
                      </label>
                      <div className='space-x-4'>
                        <label className='inline-flex items-center'>
                          <input
                            type='radio'
                            name={`fullNameShown-${passport.id}`}
                            value='yes'
                            checked={passport.fullNameOnPassport === "yes"}
                            onChange={() =>
                              handlePassportChange(
                                citizenship.id,
                                passport.id,
                                "fullNameOnPassport",
                                "yes"
                              )
                            }
                            className='form-radio'
                          />
                          <span className='ml-2'>Yes</span>
                        </label>
                        <label className='inline-flex items-center'>
                          <input
                            type='radio'
                            name={`fullNameShown-${passport.id}`}
                            value='no'
                            checked={passport.fullNameOnPassport === "no"}
                            onChange={() =>
                              handlePassportChange(
                                citizenship.id,
                                passport.id,
                                "fullNameOnPassport",
                                "no"
                              )
                            }
                            className='form-radio'
                          />
                          <span className='ml-2'>No</span>
                        </label>
                      </div>
                    </div>

                    <div className='space-x-4'>
                      <div className='inline-block'>
                        <label className='block'>Family Name</label>
                        <input
                          type='text'
                          placeholder='Family Name'
                          value={passport.nameAsShown.familyName}
                          onChange={(e) =>
                            handlePassportChange(
                              citizenship.id,
                              passport.id,
                              "nameAsShown.familyName",
                              e.target.value
                            )
                          }
                          className='mt-2 p-3 border border-gray-300 rounded w-full'
                        />
                      </div>
                      <div className='inline-block ml-4'>
                        <label className='block'>Given Name</label>
                        <input
                          type='text'
                          placeholder='Given Name'
                          value={passport.nameAsShown.givenName}
                          onChange={(e) =>
                            handlePassportChange(
                              citizenship.id,
                              passport.id,
                              "nameAsShown.givenName",
                              e.target.value
                            )
                          }
                          className='mt-2 p-3 border border-gray-300 rounded w-full'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block'>Nationality</label>
                      <select
                        value={passport.nationality}
                        onChange={(e) =>
                          handlePassportChange(
                            citizenship.id,
                            passport.id,
                            "nationality",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      >
                        <option value=''>Select...</option>
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className='block'>Date Issued</label>
                      <input
                        type='date'
                        value={passport.dateIssued}
                        onChange={(e) =>
                          handlePassportChange(
                            citizenship.id,
                            passport.id,
                            "dateIssued",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      />
                    </div>

                    <div>
                      <label className='block'>Expiry Date</label>
                      <input
                        type='date'
                        value={passport.dateExpiry}
                        onChange={(e) =>
                          handlePassportChange(
                            citizenship.id,
                            passport.id,
                            "dateExpiry",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      />
                    </div>

                    <div>
                      <label className='block'>Place of Issue</label>
                      <input
                        type='text'
                        value={passport.placeOfIssue}
                        onChange={(e) =>
                          handlePassportChange(
                            citizenship.id,
                            passport.id,
                            "placeOfIssue",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      />
                    </div>

                    <div>
                      <label className='block'>Document Status</label>
                      <select
                        value={passport.documentStatus}
                        onChange={(e) =>
                          handlePassportChange(
                            citizenship.id,
                            passport.id,
                            "documentStatus",
                            e.target.value
                          )
                        }
                        className='mt-2 p-3 border border-gray-300 rounded w-full'
                      >
                        <option value=''>Select...</option>
                        <option value='Current'>Current</option>
                        <option value='Expired'>Expired</option>
                        <option value='Stolen'>Stolen</option>
                        <option value='Lost'>Lost</option>
                        <option value='Other'>Other</option>
                      </select>
                    </div>

                    {/* Delete document */}
                    {citizenship.passportDetails.length > 1 && (
                      <button
                        type='button'
                        onClick={() =>
                          handleDeletePassport(citizenship.id, passport.id)
                        }
                        className='mt-4 text-red-600'
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}

            {/* Add passport button */}
            {citizenship.hasPassport === "yes" && (
              <button
                type='button'
                onClick={() => handleAddPassport(citizenship.id)}
                className='mt-4 text-green-600'
              >
                + Add Document
              </button>
            )}
          </div>
        ))}

      {/* Add country button only if "yes" is selected */}
      {hasCitizenship === "yes" && (
        <button
          type='button'
          onClick={handleAddCitizenship}
          className='mt-4 text-green-600'
        >
          + Add Country
        </button>
      )}
    </div>
  )
}

export default CitizenshipForm
