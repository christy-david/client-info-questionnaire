// src/components/ClientFileForm.js
import { useSelector, useDispatch } from "react-redux"
import {
  setClientFileNumber,
  setClientFileNumberError,
} from "../redux/clientFileNumberSlice"

const ClientFileForm = () => {
  const dispatch = useDispatch()
  const { clientFileNumber, errors } = useSelector(
    (state) => state.clientFileNumber
  )

  const handleFieldChange = (value) => {
    dispatch(setClientFileNumber(value))

    // Simple validation example: Check if the client file number is empty
    if (!value) {
      dispatch(setClientFileNumberError("Client file number is required."))
    } else {
      dispatch(setClientFileNumberError(null)) // Clear error if valid
    }
  }

  return (
    <div className='space-y-6'>
      <h3 className='text-xl font-semibold'>
        Client File Number (If applicable)
      </h3>

      {/* Client file number */}
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          If you have been given a client file number by your Migration agent,
          record it here
        </label>
        <input
          type='text'
          value={clientFileNumber}
          onChange={(e) => handleFieldChange(e.target.value)}
          className='mt-1 block w-full rounded-md border border-gray-300 p-2'
        />
        {errors.clientFileNumber && (
          <span className='text-red-500 text-xs'>
            {errors.clientFileNumber}
          </span>
        )}
      </div>
    </div>
  )
}

export default ClientFileForm
