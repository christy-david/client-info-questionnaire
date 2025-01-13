import { useSelector, useDispatch } from "react-redux"
import { setUsesChineseCode, updateCode } from "../../../redux/chineseCodeSlice"

const ChineseCodeForm = () => {
  const dispatch = useDispatch()
  const { usesChineseCode, code, errors } = useSelector(
    (state) => state.chineseCode
  )

  const handleChineseCodeChange = (response) => {
    dispatch(setUsesChineseCode(response))
  }

  const handleCodeUpdate = (value) => {
    dispatch(updateCode(value))
  }

  return (
    <>
      <label className='block font-medium text-gray-700'>
        Do you use a Chinese Commercial Code for your name?
      </label>

      <div className='space-y-6'>
        {/* Yes/No Radio Buttons */}
        <div className='space-x-6'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='usesChineseCode'
              value='yes'
              checked={usesChineseCode === "yes"}
              onChange={() => handleChineseCodeChange("yes")}
              className='text-blue-500'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='usesChineseCode'
              value='no'
              checked={usesChineseCode === "no"}
              onChange={() => handleChineseCodeChange("no")}
              className='text-blue-500'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>

        {/* Code Input Section */}
        {usesChineseCode === "yes" && (
          <div className='mt-4'>
            <p className="mb-4">Provide details of your Chinese Commercial Code</p>
            <label className='block font-medium text-gray-700'>Code</label>
            <input
              type='text'
              value={code}
              onChange={(e) => handleCodeUpdate(e.target.value)}
              className='mt-1 block w-full rounded-md border border-gray-300 p-2'
            />
            {errors.code && (
              <span className='text-red-500 text-xs mt-1'>{errors.code}</span>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default ChineseCodeForm
