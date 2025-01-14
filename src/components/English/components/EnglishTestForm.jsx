import { useDispatch, useSelector } from "react-redux"
import {
  setHasTakenTest,
  addEnglishTest,
  removeEnglishTest,
  updateEnglishTest,
} from "../../../redux/englishTestSlice"
import countries from "../../../data/countries.json"

const EnglishTestForm = () => {
  const dispatch = useDispatch()
  const { hasTakenTest, englishTests } = useSelector(
    (state) => state.englishTest
  )

  const handleAddTest = () => dispatch(addEnglishTest())
  const handleRemoveTest = (index) => dispatch(removeEnglishTest(index))
  const handleFieldChange = (index, field, value) =>
    dispatch(updateEnglishTest({ index, field, value }))

  return (
    <div className='space-y-6'>
      {/* Main Question */}
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Have you undertaken an English language proficiency test in the last
          36 months?
        </label>
        <div className='mt-2 flex space-x-4'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='hasTakenTest'
              value='Yes'
              checked={hasTakenTest === true}
              onChange={() => dispatch(setHasTakenTest(true))}
              className='mr-2'
            />
            Yes
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='hasTakenTest'
              value='No'
              checked={hasTakenTest === false}
              onChange={() => dispatch(setHasTakenTest(false))}
              className='mr-2'
            />
            No
          </label>
        </div>
      </div>

      {/* Dynamic English Test Details */}
      {hasTakenTest && (
        <div className='space-y-6'>
          <div className="space-y-6">
            <h4 className="mb-4">
              Insert details of all official English language skills tests that
              you have undertaken
            </h4>

            {englishTests.map((test, index) => (
              <div
                key={index}
                className='border p-4 rounded-md shadow-sm space-y-4'
              >
                {/* Type of English Language Test */}
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Type of English Language Test
                  </label>
                  <select
                    value={test.testType}
                    onChange={(e) =>
                      handleFieldChange(index, "testType", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  >
                    <option value='' disabled>
                      Select a test type
                    </option>
                    {[
                      "CAE",
                      "ESOL",
                      "IELTS",
                      "OET",
                      "Pearson Test",
                      "TOEFL iBT",
                      "TOEFL PBT",
                      "TOEIC",
                      "Other",
                    ].map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Test Date */}
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Date of Test
                  </label>
                  <input
                    type='date'
                    value={test.testDate}
                    onChange={(e) =>
                      handleFieldChange(index, "testDate", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>

                {/* Test Location */}
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Test Location
                  </label>
                  <select
                    value={test.testLocation}
                    onChange={(e) =>
                      handleFieldChange(index, "testLocation", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  >
                    <option value='' disabled>
                      Select a country
                    </option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Test Reference Number */}
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Test Reference Number
                  </label>
                  <input
                    type='text'
                    value={test.testReferenceNumber}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "testReferenceNumber",
                        e.target.value
                      )
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>

                {/* Scores */}
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    { label: "Listening Score", field: "listeningScore" },
                    { label: "Reading Score", field: "readingScore" },
                    { label: "Writing Score", field: "writingScore" },
                    { label: "Speaking Score", field: "speakingScore" },
                    { label: "Overall Score/ Grade", field: "overallScore" },
                  ].map(({ label, field }) => (
                    <div key={field}>
                      <label className='block text-sm font-medium text-gray-700'>
                        {label}
                      </label>
                      <input
                        type='text'
                        value={test[field]}
                        onChange={(e) =>
                          handleFieldChange(index, field, e.target.value)
                        }
                        className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                      />
                    </div>
                  ))}
                </div>

                {/* Remove Button */}
                {englishTests.length > 1 && (
                  <button
                    type='button'
                    onClick={() => handleRemoveTest(index)}
                    className='text-red-500 hover:underline text-sm mt-2'
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type='button'
            onClick={handleAddTest}
            className='text-green-500'
          >
            + Add
          </button>
        </div>
      )}
    </div>
  )
}

export default EnglishTestForm
