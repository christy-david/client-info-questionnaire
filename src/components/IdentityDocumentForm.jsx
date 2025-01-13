import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setHasIdentityDocument,
  addDocument,
  removeDocument,
  updateDocument,
} from "../redux/identityDocumentSlice"

import countries from "../data/countries.json"

const IdentityDocumentForm = () => {
  const dispatch = useDispatch()
  const { hasIdentityDocument, documents } = useSelector(
    (state) => state.identityDocument
  )

  // Ensure at least one document exists when "Yes" is selected
  useEffect(() => {
    if (hasIdentityDocument && documents.length === 0) {
      dispatch(addDocument())
    }
  }, [hasIdentityDocument, documents.length, dispatch])

  const handleAddDocument = () => dispatch(addDocument())
  const handleRemoveDocument = (index) => dispatch(removeDocument(index))
  const handleDocumentChange = (index, field, value) =>
    dispatch(updateDocument({ index, field, value }))

  return (
    <div className='space-y-6'>
      <h3 className='text-xl font-semibold'>Identity Document/ Number</h3>

      {/* Main Question */}
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Do you currently have, or have you ever had, any national identity
          documents or numbers (including birth registration numbers, social
          security cards, etc)?
        </label>
        <div className='mt-2 flex space-x-4'>
          <label className='flex items-center'>
            <input
              type='radio'
              name='hasIdentityDocument'
              value='Yes'
              checked={hasIdentityDocument === true}
              onChange={() => dispatch(setHasIdentityDocument(true))}
              className='mr-2'
            />
            Yes
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='hasIdentityDocument'
              value='No'
              checked={hasIdentityDocument === false}
              onChange={() => dispatch(setHasIdentityDocument(false))}
              className='mr-2'
            />
            No
          </label>
        </div>
      </div>

      {/* Dynamic Questions */}
      {hasIdentityDocument && (
        <div className='space-y-6'>
          {documents.map((doc, index) => (
            <div
              key={index}
              className='border p-4 rounded-md shadow-sm space-y-4'
            >
              {/* Type of Identification Document */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Type of Identification Document
                </label>
                <select
                  value={doc.type}
                  onChange={(e) =>
                    handleDocumentChange(index, "type", e.target.value)
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                >
                  <option value='' disabled>
                    Select an option
                  </option>
                  <option value='Alien Registration Number'>
                    Alien Registration Number
                  </option>
                  <option value='Birth Certificate'>Birth Certificate</option>
                  <option value="Driver's License">
                    Driver&apos;s License
                  </option>
                  <option value='Marriage Certificate'>
                    Marriage Certificate
                  </option>
                  <option value='National Identity Document'>
                    National Identity Document
                  </option>
                  <option value='Social Security Card'>
                    Social Security Card
                  </option>
                  <option value='Other'>Other</option>
                </select>
              </div>

              {/* Identification Number Shown */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Identification Number Shown
                </label>
                <input
                  type='text'
                  value={doc.number}
                  onChange={(e) =>
                    handleDocumentChange(index, "number", e.target.value)
                  }
                  className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                />
              </div>

              {/* Is Current Name Shown */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Is your current full name shown on this Document?
                </label>
                <div className='mt-2 flex space-x-4'>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name={`isCurrentName-${index}`}
                      value='Yes'
                      checked={doc.isCurrentName === true}
                      onChange={() =>
                        handleDocumentChange(index, "isCurrentName", true)
                      }
                      className='mr-2'
                    />
                    Yes
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name={`isCurrentName-${index}`}
                      value='No'
                      checked={doc.isCurrentName === false}
                      onChange={() =>
                        handleDocumentChange(index, "isCurrentName", false)
                      }
                      className='mr-2'
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Name as Shown on Document */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Name as shown on this Document
                </label>
                <div className='flex space-x-4'>
                  <input
                    type='text'
                    placeholder='Family Name'
                    value={doc.shownName.familyName}
                    onChange={(e) =>
                      handleDocumentChange(index, "shownName", {
                        familyName: e.target.value,
                      })
                    }
                    className='mt-1 block w-1/2 rounded-md border border-gray-300 p-2'
                  />
                  <input
                    type='text'
                    placeholder='Given Names'
                    value={doc.shownName.givenNames}
                    onChange={(e) =>
                      handleDocumentChange(index, "shownName", {
                        givenNames: e.target.value,
                      })
                    }
                    className='mt-1 block w-1/2 rounded-md border border-gray-300 p-2'
                  />
                </div>
              </div>

              {/* Date Issued / Expired */}
              <div className='flex space-x-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Date Issued
                  </label>
                  <input
                    type='date'
                    value={doc.dates.issued}
                    onChange={(e) =>
                      handleDocumentChange(index, "dates", {
                        ...doc.dates,
                        issued: e.target.value,
                      })
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Date Expired
                  </label>
                  <input
                    type='date'
                    value={doc.dates.expired}
                    onChange={(e) =>
                      handleDocumentChange(index, "dates", {
                        ...doc.dates,
                        expired: e.target.value,
                      })
                    }
                    className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                  />
                </div>
              </div>

              {/* Country of Issue */}
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Country of Issue
                </label>
                <select
                  value={doc.country}
                  onChange={(e) =>
                    handleDocumentChange(index, "country", e.target.value)
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
              {documents.length > 1 && (
                <button
                  type='button'
                  onClick={() => handleRemoveDocument(index)}
                  className='text-red-500 hover:underline text-sm'
                >
                  Delete
                </button>
              )}
            </div>
          ))}

          {/* Add Document Button */}
          <button
            type='button'
            onClick={handleAddDocument}
            className='mt-4 text-green-600'
          >
            + Add Document
          </button>
        </div>
      )}
    </div>
  )
}

export default IdentityDocumentForm
