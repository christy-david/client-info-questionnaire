import { useSelector, useDispatch } from "react-redux"
import {
  setHasAlias,
  updateAlias,
  addAlias,
  deleteAlias,
} from "../../../redux/aliasSlice"

const AliasForm = () => {
  const dispatch = useDispatch()
  const { hasAlias, aliases, errors } = useSelector((state) => state.alias)

  const handleAliasChange = (response) => {
    dispatch(setHasAlias(response))
  }

  const handleAliasUpdate = (id, field, value) => {
    dispatch(updateAlias({ id, field, value }))
  }

  const handleAddAlias = () => {
    dispatch(addAlias())
  }

  const handleDeleteAlias = (id) => {
    dispatch(deleteAlias(id))
  }

  return (
    <>
      <label className='block font-medium text-gray-700'>
        Have you ever had or been known by any other name or alias, or had a
        different name spelling, or ever had a different date of birth?
      </label>

      <div className='space-y-6'>
        {/* Yes/No Radio Buttons */}
        <div className='space-x-6'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='hasAlias'
              value='yes'
              checked={hasAlias === "yes"}
              onChange={() => handleAliasChange("yes")}
              className='text-blue-500'
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              name='hasAlias'
              value='no'
              checked={hasAlias === "no"}
              onChange={() => handleAliasChange("no")}
              className='text-blue-500'
            />
            <span className='ml-2'>No</span>
          </label>
        </div>

        {/* Alias Details */}
        {hasAlias === "yes" && (
          <div className='space-y-6'>
            <p>
              Insert details about every name you have been known by, or
              spellings of your name, or different date of birth
            </p>

            {aliases.map((alias) => (
              <div key={alias.id} className='border p-4 rounded-md shadow-sm'>
                <div className='space-y-4'>
                  {/* Family Name */}
                  <div>
                    <label className='block font-medium text-gray-700'>
                      Family Name:
                    </label>
                    <input
                      type='text'
                      value={alias.familyName}
                      onChange={(e) =>
                        handleAliasUpdate(
                          alias.id,
                          "familyName",
                          e.target.value
                        )
                      }
                      className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                    />
                    {errors[alias.id]?.familyName && (
                      <span className='text-red-500 text-xs'>
                        {errors[alias.id].familyName}
                      </span>
                    )}
                  </div>

                  {/* Given Name(s) */}
                  <div>
                    <label className='block font-medium text-gray-700'>
                      Given Name(s):
                    </label>
                    <input
                      type='text'
                      value={alias.givenName}
                      onChange={(e) =>
                        handleAliasUpdate(alias.id, "givenName", e.target.value)
                      }
                      className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                    />
                    {errors[alias.id]?.givenName && (
                      <span className='text-red-500 text-xs'>
                        {errors[alias.id].givenName}
                      </span>
                    )}
                  </div>

                  {/* Date of Birth Used */}
                  <div>
                    <label className='block font-medium text-gray-700'>
                      Date of Birth Used:
                    </label>
                    <input
                      type='date'
                      value={alias.dob}
                      onChange={(e) =>
                        handleAliasUpdate(alias.id, "dob", e.target.value)
                      }
                      className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                    />
                    {errors[alias.id]?.dob && (
                      <span className='text-red-500 text-xs'>
                        {errors[alias.id].dob}
                      </span>
                    )}
                  </div>

                  {/* Type of Name */}
                  <div>
                    <label className='block font-medium text-gray-700'>
                      Type of Name:
                    </label>
                    <select
                      value={alias.typeOfName}
                      onChange={(e) =>
                        handleAliasUpdate(
                          alias.id,
                          "typeOfName",
                          e.target.value
                        )
                      }
                      className='mt-1 block w-full rounded-md border border-gray-300 p-2'
                    >
                      <option value=''>Select...</option>
                      <option value='Name at Birth'>Name at Birth</option>
                      <option value='Maiden Name (before marriage)'>
                        Maiden Name (before marriage)
                      </option>
                      <option value='Previous Marriage Name'>
                        Previous Marriage Name
                      </option>
                      <option value='Adoptive or Foster Name'>
                        Adoptive or Foster Name
                      </option>
                    </select>
                    {errors[alias.id]?.typeOfName && (
                      <span className='text-red-500 text-xs'>
                        {errors[alias.id].typeOfName}
                      </span>
                    )}
                  </div>

                  {/* Delete Alias Button */}
                  {aliases.length > 1 && (
                    <button
                      type='button'
                      onClick={() => handleDeleteAlias(alias.id)}
                      className='mt-4 text-red-500'
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Add Another Alias Button */}
            <button
              type='button'
              onClick={handleAddAlias}
              className='mt-4 text-green-500'
            >
              + Add Name
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default AliasForm
