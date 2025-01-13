import { useSelector, useDispatch } from "react-redux"
import {
  setIsMainApplicant,
  updateCompleterDetails,
} from "../redux/questionnaireCompleterSlice"

const QuestionnaireCompleterForm = () => {
  const dispatch = useDispatch()
  const { isMainApplicant, completerDetails } = useSelector(
    (state) => state.questionnaireCompleter
  )

  const handleRadioChange = (value) => {
    dispatch(setIsMainApplicant(value))
  }

  const handleFieldChange = (field, value) => {
    dispatch(updateCompleterDetails({ field, value }))
  }

  return (
    <div className='space-y-6'>
      <h3 className='text-xl font-semibold'>
        Who is Completing this Questionnaire?
      </h3>

      {/* Main Applicant Question */}
      <div>
        <label className='block font-medium text-gray-700'>
          Are you or will you be the Main Applicant in any application?
        </label>
        <div>
          <div className='space-x-6'>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='isMainApplicant'
                value='yes'
                checked={isMainApplicant === "yes"}
                onChange={() => handleRadioChange("yes")}
                className='text-blue-500'
              />
              <span className='ml-2'>Yes</span>
            </label>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='isMainApplicant'
                value='no'
                checked={isMainApplicant === "no"}
                onChange={() => handleRadioChange("no")}
                className='text-blue-500'
              />
              <span className='ml-2'>No</span>
            </label>
          </div>
        </div>
      </div>

      {/* If Not Main Applicant */}
      {isMainApplicant === "no" && (
        <div>
          {/* Note */}
          <div className='p-4 mb-4 bg-yellow-100 border border-yellow-300 rounded-md'>
            <p className='text-yellow-700'>
              When entering information into this Questionnaire, please ensure
              that the details which are entered are from the point of view of
              the Main Applicant.
            </p>
          </div>

          {/* Completer Details Form */}
          <div className='border p-4 rounded-md shadow-sm space-y-4'>
            {/* Prefix/Title */}
            <p className='font-medium'>
              Insert the details of the person who is completing this
              Questionnaire
            </p>
            <div>
              <label className='block font-medium text-gray-700'>
                Prefix/Title
              </label>
              <select
                value={completerDetails.prefix}
                onChange={(e) => handleFieldChange("prefix", e.target.value)}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2'
              >
                <option value=''>Select...</option>
                <option value='Mr.'>Mr.</option>
                <option value='Mrs.'>Mrs.</option>
                <option value='Ms.'>Ms.</option>
                <option value='Dr.'>Dr.</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className='block font-medium text-gray-700'>
                Gender
              </label>
              <select
                value={completerDetails.gender}
                onChange={(e) => handleFieldChange("gender", e.target.value)}
                className='mt-1 block w-full rounded-md border border-gray-300 p-2'
              >
                <option value=''>Select...</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>

            {/* Given Names */}
            <div>
              <label className='block font-medium text-gray-700'>
                Given Names
              </label>
              <input
                type='text'
                value={completerDetails.givenNames}
                onChange={(e) =>
                  handleFieldChange("givenNames", e.target.value)
                }
                className='mt-1 block w-full rounded-md border border-gray-300 p-2'
              />
            </div>

            {/* Family Name */}
            <div>
              <label className='block font-medium text-gray-700'>
                Family Name
              </label>
              <input
                type='text'
                value={completerDetails.familyName}
                onChange={(e) =>
                  handleFieldChange("familyName", e.target.value)
                }
                className='mt-1 block w-full rounded-md border border-gray-300 p-2'
              />
            </div>

            {/* Preferred Names */}
            <div>
              <label className='block font-medium text-gray-700'>
                Preferred Names
              </label>
              <input
                type='text'
                value={completerDetails.preferredNames}
                onChange={(e) =>
                  handleFieldChange("preferredNames", e.target.value)
                }
                className='mt-1 block w-full rounded-md border border-gray-300 p-2'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuestionnaireCompleterForm
