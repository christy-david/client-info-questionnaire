import { useSelector, useDispatch } from "react-redux"
import {
  setPrefix,
  setGender,
  setGivenNames,
  setFamilyName,
  setPreferredNames,
  setDateOfBirth,
  setBirthLocationSuburb,
  setBirthLocationCity,
  setStateProvince,
  setBirthCountry,
  setMaritalStatus,
  setIsInNewRelationship,
  setDoLiveTogetherOrEngaged,
} from "../redux/mainApplicantSlice"
import countries from "../data/countries.json"

const MainApplicantDetails = () => {
  const dispatch = useDispatch()
  const {
    prefix,
    gender,
    givenNames,
    familyName,
    preferredNames,
    dateOfBirth,
    birthLocationSuburb,
    birthLocationCity,
    stateProvince,
    birthCountry,
    maritalStatus,
    isInNewRelationship,
    doLiveTogetherOrEngaged,
    errors,
  } = useSelector((state) => state.mainApplicant)

  const handleFieldChange = (field, value) => {
    dispatch(field(value))
  }

  const handleNewRelationshipChange = (value) => {
    dispatch(setIsInNewRelationship(value))
    if (value === "yes") {
      dispatch(setDoLiveTogetherOrEngaged("")) // Reset the next question if it was previously answered
    }
  }

  const handleLiveTogetherOrEngagedChange = (value) => {
    dispatch(setDoLiveTogetherOrEngaged(value))
    if (value === "yes") {
      alert("Contact agent")
    }
  }

  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Main Applicant&apos;s Details</h3>

      {/* Prefix / Title */}
      <div>
        <p className='font-medium mb-4'>Insert your personal details</p>
        <label className='block font-medium text-gray-700'>
          Prefix / Title
        </label>
        <select
          value={prefix}
          onChange={(e) => handleFieldChange(setPrefix, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        >
          <option value=''>Select...</option>
          <option value='Mr.'>Mr.</option>
          <option value='Mrs.'>Mrs.</option>
          <option value='Ms.'>Ms.</option>
          <option value='Dr.'>Dr.</option>
        </select>
        {errors.prefix && (
          <span className='text-red-500 text-xs'>{errors.prefix}</span>
        )}
      </div>

      {/* Gender */}
      <div>
        <label className='block font-medium text-gray-700'>Gender</label>
        <select
          value={gender}
          onChange={(e) => handleFieldChange(setGender, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        >
          <option value=''>Select...</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Other'>Other</option>
        </select>
        {errors.gender && (
          <span className='text-red-500 text-xs'>{errors.gender}</span>
        )}
      </div>

      {/* Given Names */}
      <div>
        <label className='block font-medium text-gray-700'>Given Names</label>
        <input
          type='text'
          placeholder='Enter your given names'
          value={givenNames}
          onChange={(e) => handleFieldChange(setGivenNames, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        />
        {errors.givenNames && (
          <span className='text-red-500 text-xs'>{errors.givenNames}</span>
        )}
      </div>

      {/* Family Name */}
      <div>
        <label className='block font-medium text-gray-700'>Family Name</label>
        <input
          type='text'
          placeholder='Enter your family name'
          value={familyName}
          onChange={(e) => handleFieldChange(setFamilyName, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        />
        {errors.familyName && (
          <span className='text-red-500 text-xs'>{errors.familyName}</span>
        )}
      </div>

      {/* Preferred Names */}
      <div>
        <label className='block font-medium text-gray-700'>
          Preferred Names
        </label>
        <input
          type='text'
          placeholder='Enter your preferred names'
          value={preferredNames}
          onChange={(e) => handleFieldChange(setPreferredNames, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        />
        {errors.preferredNames && (
          <span className='text-red-500 text-xs'>{errors.preferredNames}</span>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label className='block font-medium text-gray-700'>Date of Birth</label>
        <input
          type='date'
          value={dateOfBirth}
          onChange={(e) => handleFieldChange(setDateOfBirth, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        />
        {errors.dateOfBirth && (
          <span className='text-red-500 text-xs'>{errors.dateOfBirth}</span>
        )}
      </div>

      {/* Birth Location */}
      <div>
        <label className='block font-medium text-gray-700'>
          Birth Location
        </label>
        <div className='space-y-2'>
          <input
            type='text'
            placeholder='Suburb of Birth'
            value={birthLocationSuburb}
            onChange={(e) =>
              handleFieldChange(setBirthLocationSuburb, e.target.value)
            }
            className='mt-1 block w-full rounded-md border border-gray-400 p-2'
          />
          <input
            type='text'
            placeholder='City / Town of Birth'
            value={birthLocationCity}
            onChange={(e) =>
              handleFieldChange(setBirthLocationCity, e.target.value)
            }
            className='mt-1 block w-full rounded-md border border-gray-400 p-2'
          />
        </div>
        {errors.birthLocationSuburb && (
          <span className='text-red-500 text-xs'>
            {errors.birthLocationSuburb}
          </span>
        )}
        {errors.birthLocationCity && (
          <span className='text-red-500 text-xs'>
            {errors.birthLocationCity}
          </span>
        )}
      </div>

      {/* State / Province */}
      <div>
        <label className='block font-medium text-gray-700'>
          State/Province
        </label>
        <input
          type='text'
          value={stateProvince}
          onChange={(e) => handleFieldChange(setStateProvince, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        />
        {errors.stateProvince && (
          <span className='text-red-500 text-xs'>{errors.stateProvince}</span>
        )}
      </div>

      {/* Birth Country */}
      <div>
        <label className='block font-medium text-gray-700'>Birth Country</label>
        <select
          value={birthCountry}
          onChange={(e) => handleFieldChange(setBirthCountry, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        >
          <option value=''>Select...</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.birthCountry && (
          <span className='text-red-500 text-xs'>{errors.birthCountry}</span>
        )}
      </div>

      {/* Marital Status */}
      <div>
        <p className='font-medium my-4'>
          What is your current marital / relationship status?
        </p>
        <label className='block font-medium text-gray-700'>
          Marital Status
        </label>
        <select
          value={maritalStatus}
          onChange={(e) => handleFieldChange(setMaritalStatus, e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-400 p-2'
        >
          <option value=''>Select...</option>
          <option value='Married'>Married</option>
          <option value='Divorced'>Divorced</option>
          <option value='Widowed'>Widowed</option>
          <option value='Never Married'>Never Married</option>
        </select>
        {errors.maritalStatus && (
          <span className='text-red-500 text-xs'>{errors.maritalStatus}</span>
        )}
      </div>

      {/* Conditional Question */}
      {["Divorced", "Widowed"].includes(maritalStatus) && (
        <div>
          <label className='block font-medium text-gray-700'>
            Are you in a new relationship of any kind?
          </label>
          <div className='space-x-4'>
            <input
              type='radio'
              name='newRelationship'
              value='yes'
              checked={isInNewRelationship === "yes"}
              onChange={() => handleNewRelationshipChange("yes")}
              className='text-blue-500'
            />
            <span className='ml-2'>Yes</span>
            <input
              type='radio'
              name='newRelationship'
              value='no'
              checked={isInNewRelationship === "no"}
              onChange={() => handleNewRelationshipChange("no")}
              className='text-blue-500'
            />
            <span className='ml-2'>No</span>
          </div>
        </div>
      )}

      {isInNewRelationship === "yes" && (
        <div>
          <label className='block font-medium text-gray-700'>
            Do you and your new partner live together or are you engaged?
          </label>
          <div className='space-x-4'>
            <input
              type='radio'
              name='liveTogetherOrEngaged'
              value='yes'
              checked={doLiveTogetherOrEngaged === "yes"}
              onChange={() => handleLiveTogetherOrEngagedChange("yes")}
              className='text-blue-500'
            />
            <span className='ml-2'>Yes</span>
            <input
              type='radio'
              name='liveTogetherOrEngaged'
              value='no'
              checked={doLiveTogetherOrEngaged === "no"}
              onChange={() => handleLiveTogetherOrEngagedChange("no")}
              className='text-blue-500'
            />
            <span className='ml-2'>No</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainApplicantDetails
