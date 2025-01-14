import { useDispatch, useSelector } from "react-redux"
import {
  setHasEducation,
  addEducation,
  removeEducation,
  updateEducation,
} from "../redux/educationSlice"
import countries from "../data/countries.json"
import languages from "../data/languages.json"

const EducationForm = () => {
  const dispatch = useDispatch()
  const { hasEducation, educationDetails } = useSelector(
    (state) => state.education
  )

  const handleAddEducation = () => dispatch(addEducation())
  const handleRemoveEducation = (index) => dispatch(removeEducation(index))
  const handleFieldChange = (index, field, value) =>
    dispatch(updateEducation({ index, field, value }))

  return (
    <div className='space-y-6'>
      <h3 className='text-xl font-semibold'>Education</h3>

      {/* Main Question */}
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Have you ever undertaken, completed, or enrolled in any form of study,
          education or occupational training?
        </label>
        <div className='mt-2 flex space-x-4'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='hasEducation'
              value='Yes'
              checked={hasEducation === true}
              onChange={() => dispatch(setHasEducation(true))}
              className='mr-2'
            />
            Yes
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='hasEducation'
              value='No'
              checked={hasEducation === false}
              onChange={() => dispatch(setHasEducation(false))}
              className='mr-2'
            />
            No
          </label>
        </div>
      </div>

      {/* Dynamic Education Details */}
      {hasEducation && (
        <div className='space-y-6'>
          <h4 className='font-medium'>
            List all your education and qualifications you have undertaken or
            are enrolled in:
            <br />
            <span className='text-sm'>
              (education/qualifications includes: school, college/vocational
              schools, university, research/thesis, specialised training,
              skill/trade qualifications)
            </span>
          </h4>
          {educationDetails.map((education, index) => (
            <div
              key={index}
              className='border p-4 rounded-md shadow-sm space-y-4'
            >
              {/* Dates */}
              <div className='flex space-x-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Date From
                  </label>
                  <input
                    type='date'
                    value={education.fromDate}
                    onChange={(e) =>
                      handleFieldChange(index, "fromDate", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Date To
                  </label>
                  <input
                    type='date'
                    value={education.toDate}
                    onChange={(e) =>
                      handleFieldChange(index, "toDate", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
              </div>

              {/* Qualification Type */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Qualification Type/ Course Type
                </label>
                <select
                  value={education.qualificationType}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "qualificationType",
                      e.target.value
                    )
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                >
                  <option value='' disabled>
                    Select a qualification type
                  </option>
                  {[
                    "Primary School",
                    "Middle School",
                    "High School",
                    "Senior High School",
                    "Trade Apprenticeship",
                    "Training (External)",
                    "Training (On Job)",
                    "Certificate I",
                    "Certificate II",
                    "Certificate III",
                    "Certificate IV",
                    "Diploma",
                    "Advanced Diploma",
                    "Graduate Diploma",
                    "Associate Degree",
                    "Bachelor Degree",
                    "Honors Degree",
                    "Postgraduate Certificate",
                    "Postgraduate Diploma",
                    "Masters Degree",
                    "Doctoral Degree",
                    "Other",
                  ].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Name */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Course Name or Research Description
                </label>
                <input
                  type='text'
                  value={education.courseName}
                  onChange={(e) =>
                    handleFieldChange(index, "courseName", e.target.value)
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                />
              </div>

              {/* Institution Details */}
              <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                  Institution Name and Street Address
                </label>
                <input
                  type='text'
                  placeholder='Name of Institution'
                  value={education.institutionDetails.name}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "institutionDetails.name",
                      e.target.value
                    )
                  }
                  className='block w-full rounded-md border border-gray-300 p-2'
                />
                <input
                  type='text'
                  placeholder='Street Address'
                  value={education.institutionDetails.street}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "institutionDetails.street",
                      e.target.value
                    )
                  }
                  className='block w-full rounded-md border border-gray-300 p-2'
                />
                <input
                  type='text'
                  placeholder='City'
                  value={education.institutionDetails.city}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "institutionDetails.city",
                      e.target.value
                    )
                  }
                  className='block w-full rounded-md border border-gray-300 p-2'
                />
                <input
                  type='text'
                  placeholder='State'
                  value={education.institutionDetails.state}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "institutionDetails.state",
                      e.target.value
                    )
                  }
                  className='block w-full rounded-md border border-gray-300 p-2'
                />
                <input
                  type='text'
                  placeholder='Post Code'
                  value={education.institutionDetails.postCode}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "institutionDetails.postCode",
                      e.target.value
                    )
                  }
                  className='block w-full rounded-md border border-gray-300 p-2'
                />
                <select
                  value={education.institutionDetails.country}
                  onChange={(e) =>
                    handleFieldChange(
                      index,
                      "institutionDetails.country",
                      e.target.value
                    )
                  }
                  className='block w-full rounded-md border border-gray-300 p-2'
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

              {/* Course Status and Language */}
              <div className='flex space-x-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Course Status
                  </label>
                  <select
                    value={education.courseStatus}
                    onChange={(e) =>
                      handleFieldChange(index, "courseStatus", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  >
                    <option value='' disabled>
                      Select a course status
                    </option>
                    {[
                      "Completed",
                      "Deferred",
                      "Enrolled",
                      "Ongoing",
                      "Intended",
                      "Failed",
                      "Withdrawn",
                    ].map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Course Language
                  </label>
                  <select
                    value={education.courseLanguage}
                    onChange={(e) =>
                      handleFieldChange(index, "courseLanguage", e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  >
                    <option value='' disabled>
                      Select a language
                    </option>
                    {languages.map((language) => (
                      <option key={language.code} value={language.code}>
                        {language.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Remove Button */}
              {educationDetails.length > 1 && (
                <button
                  type='button'
                  onClick={() => handleRemoveEducation(index)}
                  className='text-red-500 hover:underline text-sm mt-2'
                >
                  Delete
                </button>
              )}
            </div>
          ))}

          <button
            type='button'
            onClick={handleAddEducation}
            className='mt-4 text-green-600 hover:underline'
          >
            + Add
          </button>
        </div>
      )}
    </div>
  )
}

export default EducationForm
