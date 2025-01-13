import { useSelector, useDispatch } from "react-redux"
import {
  setIsEmployed,
  addEmployment,
  removeEmployment,
  updateEmployment,
} from "../redux/employmentDetailsSlice"
import countries from "../data/countries.json"

const EmploymentDetailsForm = () => {
  const dispatch = useDispatch()
  const { isEmployed, employmentDetails } = useSelector(
    (state) => state.employmentDetails
  )

  const handleAddEmployment = () => dispatch(addEmployment())
  const handleRemoveEmployment = (index) => dispatch(removeEmployment(index))
  const handleFieldChange = (index, field, value) =>
    dispatch(updateEmployment({ index, field, value }))

  return (
    <div className='space-y-6'>
      <h3 className='text-lg font-semibold'>Employment Details</h3>

      {/* Main Question */}
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Are you currently employed in a paid position?
        </label>
        <div className='mt-2 flex space-x-4'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='isEmployed'
              value='Yes'
              checked={isEmployed === true}
              onChange={() => dispatch(setIsEmployed(true))}
              className='mr-2'
            />
            Yes
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='isEmployed'
              value='No'
              checked={isEmployed === false}
              onChange={() => dispatch(setIsEmployed(false))}
              className='mr-2'
            />
            No
          </label>
        </div>
      </div>

      {/* Dynamic Employment Details */}
      {isEmployed !== null && (
        <div className='space-y-6'>
          {employmentDetails.map((employment, index) => (
            <div
              key={index}
              className='border p-4 rounded-md shadow-sm space-y-4'
            >
              {/* Date From */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Date From
                </label>
                <input
                  type='date'
                  value={employment.fromDate}
                  onChange={(e) =>
                    handleFieldChange(index, "fromDate", e.target.value)
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                />
              </div>

              {/* Date To */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Date To
                </label>
                <input
                  type='date'
                  value={employment.toDate}
                  onChange={(e) =>
                    handleFieldChange(index, "toDate", e.target.value)
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                />
              </div>

              {/* Status */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Status
                </label>
                <select
                  value={employment.status}
                  onChange={(e) =>
                    handleFieldChange(index, "status", e.target.value)
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                >
                  <option value='' disabled>
                    Select a status
                  </option>
                  <option value='Employed'>Employed</option>
                  <option value='Student'>Student</option>
                  <option value='Retired'>Retired</option>
                  <option value='Self-employed'>Self-employed</option>
                  <option value='Unemployed'>Unemployed</option>
                  <option value='Work Experience/Internships'>
                    Work Experience/Internships
                  </option>
                  <option value='Unpaid Employment/Volunteer'>
                    Unpaid Employment/Volunteer
                  </option>
                </select>
              </div>

              {/* Position/ Occupation */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Your Position/ Occupation
                </label>
                <input
                  type='text'
                  value={employment.position}
                  onChange={(e) =>
                    handleFieldChange(index, "position", e.target.value)
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                />
              </div>

              {/* Country */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Country
                </label>
                <select
                  value={employment.country}
                  onChange={(e) =>
                    handleFieldChange(index, "country", e.target.value)
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

              {/* Remove Button */}
              {employmentDetails.length > 1 && (
                <button
                  type='button'
                  onClick={() => handleRemoveEmployment(index)}
                  className='text-red-500 hover:underline text-sm'
                >
                  Delete
                </button>
              )}
            </div>
          ))}

          <div>
            <span className='mr-2'>Click to add employment history:</span>
            <button
              type='button'
              onClick={handleAddEmployment}
              className='mt-4 text-green-600'
            >
              + Add
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmploymentDetailsForm
