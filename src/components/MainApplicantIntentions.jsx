import { useSelector, useDispatch } from "react-redux"
import {
  setPurpose,
  setTimeInAustralia,
  setIncludeFamily,
  setForm80Required,
  setVisaType,
  setAgeForChildVisa,
} from "../redux/intentionsSlice"

const MainApplicantIntentions = () => {
  const dispatch = useDispatch()
  const { purpose, timeInAustralia, includeFamily, subQuestions, errors } =
    useSelector((state) => state.intentions)

  const handlePurposeChange = (value) => {
    dispatch(setPurpose(value))
  }

  const handleVisaTypeChange = (value) => {
    dispatch(setVisaType(value))
    // Reset specific sub-questions if visa type changes
    if (
      value !== "Employer Sponsored" &&
      value !== "Child" &&
      value !== "Other"
    ) {
      dispatch(setForm80Required(""))
    }
  }

  return (
    <div className='space-y-6'>
      <h3 className='text-xl font-semibold'>
        Main Applicant&apos;s Intentions
      </h3>

      {/* Question 1 */}
      <div>
        <label className='block font-medium text-gray-700'>
          What is the main purpose that you are seeking to apply for an
          Australian Visa?
        </label>
        <select
          value={purpose}
          onChange={(e) => handlePurposeChange(e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-300 p-2'
        >
          <option value=''>Select...</option>
          <option value='To visit Australia'>To visit Australia</option>
          <option value='Study in Australia'>Study in Australia</option>
          <option value='Work in Australia'>Work in Australia</option>
          <option value='Participate in a sports competition or training'>
            Participate in a sports competition or training
          </option>
          <option value='Training or research'>Training or research</option>
          <option value='To own a business or make investments'>
            To own a business or make investments
          </option>
          <option value='To join a family member in Australia'>
            To join a family member in Australia
          </option>
          <option value='To be in a relationship with an Australian'>
            To be in a relationship with an Australian
          </option>
          <option value='Live in Australia'>Live in Australia</option>
          <option value='Other'>Other</option>
        </select>
        {errors.purpose && (
          <span className='text-red-500 text-xs'>{errors.purpose}</span>
        )}
      </div>

      {/* Sub-questions for Purpose */}
      {(purpose === "Work in Australia" || purpose === "Live in Australia") &&
        timeInAustralia === "Permanently" && (
          <div>
            <label className='block font-medium text-gray-700'>
              Is anyone included in this application required to complete a Form
              80 as part of this application?
            </label>
            <div className='space-x-4'>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  name='form80Required'
                  value='Yes'
                  checked={subQuestions.form80Required === "Yes"}
                  onChange={() => dispatch(setForm80Required("Yes"))}
                  className='text-blue-500'
                />
                <span className='ml-2'>Yes</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  name='form80Required'
                  value='No'
                  checked={subQuestions.form80Required === "No"}
                  onChange={() => dispatch(setForm80Required("No"))}
                  className='text-blue-500'
                />
                <span className='ml-2'>No</span>
              </label>
              <label className='inline-flex items-center'>
                <input
                  type='radio'
                  name='form80Required'
                  value="Don't Know"
                  checked={subQuestions.form80Required === "Don't Know"}
                  onChange={() => dispatch(setForm80Required("Don't Know"))}
                  className='text-blue-500'
                />
                <span className='ml-2'>Don&apos;t Know</span>
              </label>
            </div>
          </div>
        )}

      {/* Visa Type for Family Member */}
      {purpose === "To join a family member in Australia" && (
        <div>
          <label className='block font-medium text-gray-700'>
            What type of Australian Visa will you be seeking to apply for?
          </label>
          <select
            value={subQuestions.visaType}
            onChange={(e) => handleVisaTypeChange(e.target.value)}
            className='mt-1 block w-full rounded-md border border-gray-300 p-2'
          >
            <option value=''>Select...</option>
            <option value='Partner/ Spouse'>Partner/ Spouse</option>
            <option value='Parent'>Parent</option>
            <option value='Child'>Child</option>
            <option value='Other'>Other</option>
          </select>
        </div>
      )}

      {/* Visa Type for Live in Australia */}
      {purpose === "Live in Australia" && (
        <div>
          <label className='block font-medium text-gray-700'>
            What type of Australian Visa will you be seeking to apply for?
          </label>
          <select
            value={subQuestions.visaType}
            onChange={(e) => handleVisaTypeChange(e.target.value)}
            className='mt-1 block w-full rounded-md border border-gray-300 p-2'
          >
            <option value=''>Select...</option>
            <option value='Business Skills'>Business Skills</option>
            <option value='Child'>Child</option>
            <option value='Employer Sponsored'>Employer Sponsored</option>
            <option value='Investor Skills'>Investor Skills</option>
            <option value='Skilled'>Skilled</option>
            <option value='Parent'>Parent</option>
            <option value='Partner/ Spouse'>Partner/ Spouse</option>
            <option value='Protection/ Refugee'>Protection/ Refugee</option>
            <option value='Student'>Student</option>
            <option value='Other'>Other</option>
          </select>
        </div>
      )}

      {/* Sub-question for Child Visa */}
      {(subQuestions.visaType === "Child" ||
        subQuestions.visaType === "Other") && (
        <div>
          <label className='block font-medium text-gray-700'>
            Will you be 18 years of age or over at the time you apply for a
            Child Visa?
          </label>
          <div className='space-x-4'>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='ageForChildVisa'
                value='Yes'
                checked={subQuestions.ageForChildVisa === "Yes"}
                onChange={() => dispatch(setAgeForChildVisa("Yes"))}
                className='text-blue-500'
              />
              <span className='ml-2'>Yes</span>
            </label>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='ageForChildVisa'
                value='No'
                checked={subQuestions.ageForChildVisa === "No"}
                onChange={() => dispatch(setAgeForChildVisa("No"))}
                className='text-blue-500'
              />
              <span className='ml-2'>No</span>
            </label>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='ageForChildVisa'
                value="Don't Know"
                checked={subQuestions.ageForChildVisa === "Don't Know"}
                onChange={() => dispatch(setAgeForChildVisa("Don't Know"))}
                className='text-blue-500'
              />
              <span className='ml-2'>Don&apos;t Know</span>
            </label>
          </div>
        </div>
      )}

      {/* Question 2 */}
      <div>
        <label className='block font-medium text-gray-700'>
          What length of time are you seeking to be in Australia?
        </label>
        <select
          value={timeInAustralia}
          onChange={(e) => dispatch(setTimeInAustralia(e.target.value))}
          className='mt-1 block w-full rounded-md border border-gray-300 p-2'
        >
          <option value=''>Select...</option>
          <option value='Temporary: upto 3 months'>
            Temporary: upto 3 months
          </option>
          <option value='Temporary: upto 6 months'>
            Temporary: upto 6 months
          </option>
          <option value='Temporary: upto 12 months'>
            Temporary: upto 12 months
          </option>
          <option value='Temporary: more than 12 months'>
            Temporary: more than 12 months
          </option>
          <option value='Permanently'>Permanently</option>
        </select>
        {errors.timeInAustralia && (
          <span className='text-red-500 text-xs'>{errors.timeInAustralia}</span>
        )}
      </div>

      {/* Question 3 */}
      <div>
        <label className='block font-medium text-gray-700'>
          Do you have any family members who will be included as part of this
          application?
        </label>
        <div className='space-x-4'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='includeFamily'
              value='Yes'
              checked={includeFamily === "Yes"}
              onChange={() => dispatch(setIncludeFamily("Yes"))}
              className='text-blue-500'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='includeFamily'
              value='No'
              checked={includeFamily === "No"}
              onChange={() => dispatch(setIncludeFamily("No"))}
              className='text-blue-500'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default MainApplicantIntentions
