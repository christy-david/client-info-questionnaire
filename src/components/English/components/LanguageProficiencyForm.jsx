import { useDispatch, useSelector } from "react-redux"
import {
  setIsFirstLanguage,
  updateLanguageDetails,
  addLanguage,
  removeLanguage,
} from "../../../redux/languageProficiencySlice"

const LanguageProficiencyForm = () => {
  const dispatch = useDispatch()
  const { isFirstLanguage, languageDetails } = useSelector(
    (state) => state.languageProficiency
  )

  const handleFieldChange = (index, field, value) => {
    dispatch(updateLanguageDetails({ index, field, value }))
  }

  const handleAddLanguage = () => {
    dispatch(addLanguage())
  }

  const handleRemoveLanguage = (index) => {
    if (languageDetails.length > 1) {
      dispatch(removeLanguage(index))
    }
  }

  return (
    <div className='space-y-6'>
      {/* Main Question */}
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Is the English language your first language?
        </label>
        <div className='mt-2 flex space-x-4'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='isFirstLanguage'
              value='Yes'
              checked={isFirstLanguage === true}
              onChange={() => dispatch(setIsFirstLanguage(true))}
              className='mr-2'
            />
            Yes
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='isFirstLanguage'
              value='No'
              checked={isFirstLanguage === false}
              onChange={() => dispatch(setIsFirstLanguage(false))}
              className='mr-2'
            />
            No
          </label>
        </div>
      </div>

      {/* Dynamic Fields */}
      {isFirstLanguage !== null && (
        <div className='space-y-6'>
          <div className="space-y-6">
            <h4>
              Insert details of all languages you are able to communicate in
              (including English)
            </h4>

            {languageDetails.map((language, index) => (
              <div key={index} className='border p-4 rounded-md space-y-6'>
                {/* Language */}
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Language
                  </label>
                  <input
                    type='text'
                    value={language.language}
                    onChange={(e) =>
                      handleFieldChange(index, "language", e.target.value)
                    }
                    placeholder='Enter language'
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>

                {/* Level of Proficiency */}
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Level of Proficiency
                  </label>
                  <select
                    value={language.proficiencyLevel}
                    onChange={(e) =>
                      handleFieldChange(
                        index,
                        "proficiencyLevel",
                        e.target.value
                      )
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  >
                    <option value='' disabled>
                      Select proficiency level
                    </option>
                    {[
                      "Superior",
                      "Proficient",
                      "Competent",
                      "Vocational",
                      "Functional",
                      "Limited",
                      "Not at all",
                    ].map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Is this your main Language? */}
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Is this your main language?
                  </label>
                  <select
                    value={language.isMainLanguage}
                    onChange={(e) =>
                      handleFieldChange(index, "isMainLanguage", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  >
                    <option value='' disabled>
                      Select Yes or No
                    </option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                  </select>
                </div>

                {/* Remove Button */}
                {languageDetails.length > 1 && (
                  <button
                    type='button'
                    onClick={() => handleRemoveLanguage(index)}
                    className='text-red-500 hover:underline'
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add New Language Button */}
          <button
            type='button'
            onClick={handleAddLanguage}
            className='text-green-500 hover:underline'
          >
            + Add
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageProficiencyForm
