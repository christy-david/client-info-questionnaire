import { useSelector, useDispatch } from "react-redux"
import {
  setDescent,
  updateArabicFamilyName,
  updateArabicGivenName,
  updateRussianFamilyName,
  updateRussianGivenName,
} from "../../../redux/descentSlice"

const DescentForm = () => {
  const dispatch = useDispatch()
  const {
    descent,
    arabicFamilyName,
    arabicGivenName,
    russianFamilyName,
    russianGivenName,
    errors,
  } = useSelector((state) => state.descent)

  const handleDescentChange = (response) => {
    dispatch(setDescent(response))
  }

  const handleArabicFamilyNameChange = (value) => {
    dispatch(updateArabicFamilyName(value))
  }

  const handleArabicGivenNameChange = (value) => {
    dispatch(updateArabicGivenName(value))
  }

  const handleRussianFamilyNameChange = (value) => {
    dispatch(updateRussianFamilyName(value))
  }

  const handleRussianGivenNameChange = (value) => {
    dispatch(updateRussianGivenName(value))
  }

  return (
    <>
      <label className='block font-medium text-gray-700'>
        Are you of Arabic or Russian descent?
      </label>

      <div className='space-y-6'>
        {/* Descent Radio Buttons */}
        <div className='space-x-6'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='descent'
              value='yes'
              checked={descent === "yes"}
              onChange={() => handleDescentChange("yes")}
              className='text-blue-500'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='descent'
              value='no'
              checked={descent === "no"}
              onChange={() => handleDescentChange("no")}
              className='text-blue-500'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>

        {/* Arabic and Russian Fields (Conditional Rendering) */}
        {descent === "yes" && (
          <>
            {/* Arabic Fields */}
            <div className='mt-4'>
              <h4 className='font-medium'>
                If you are of Arabic descent, in English, write the full name of
                your father&apos;s father (i.e your paternal grandfather):
              </h4>
              <div className='mt-2 space-y-4'>
                <div>
                  <label className='block font-medium text-gray-700'>
                    Family Name:
                  </label>
                  <input
                    type='text'
                    value={arabicFamilyName}
                    onChange={(e) =>
                      handleArabicFamilyNameChange(e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div>
                  <label className='block font-medium text-gray-700'>
                    Given Name:
                  </label>
                  <input
                    type='text'
                    value={arabicGivenName}
                    onChange={(e) =>
                      handleArabicGivenNameChange(e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                {errors.arabicFields && (
                  <span className='text-red-500 text-xs mt-1'>
                    {errors.arabicFields}
                  </span>
                )}
              </div>
            </div>

            {/* Russian Fields */}
            <div className='mt-4'>
              <h4 className='font-medium'>
                If you are of Russian descent, in English, write your patronymic
                name:
              </h4>
              <div className='mt-2 space-y-4'>
                <div>
                  <label className='block font-medium text-gray-700'>
                    Family Name:
                  </label>
                  <input
                    type='text'
                    value={russianFamilyName}
                    onChange={(e) =>
                      handleRussianFamilyNameChange(e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div>
                  <label className='block font-medium text-gray-700'>
                    Given Name:
                  </label>
                  <input
                    type='text'
                    value={russianGivenName}
                    onChange={(e) =>
                      handleRussianGivenNameChange(e.target.value)
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                {errors.russianFields && (
                  <span className='text-red-500 text-xs mt-1'>
                    {errors.russianFields}
                  </span>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default DescentForm
