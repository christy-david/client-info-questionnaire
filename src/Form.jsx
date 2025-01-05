// ResponsiveForm.jsx
import { useState } from "react"

const Form = ({ data }) => {
  const [formState, setFormState] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-4xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform skew-y-0 -rotate-3 rounded-lg'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg rounded-lg sm:p-10'>
          {/* Company Logo */}
          <div className='text-center mb-6'>
            <img
              src='/logo.png'
              alt='Dew Drops Career Solutions'
              className='mx-auto h-32 w-auto'
            />
            <h1 className='text-xl font-semibold text-gray-800 mt-2'>
              Dew Drops Career Solutions
            </h1>
            <p className='text-sm text-gray-600'>Contact us:</p>
            <div className='text-sm text-gray-600'>
              <div className='mb-2'>
                <strong>Email:</strong>
                <div>
                  <a
                    href='mailto:info@dewdropscareer.com'
                    className='text-blue-600'
                  >
                    info@dewdropscareer.com
                  </a>
                </div>
              </div>
              <div className='mb-2'>
                <strong>Australia:</strong>
                <div>
                  Phone/WhatsApp:{" "}
                  <a href='tel:+61-234-567-890' className='text-blue-600'>
                    +61-234-567-890
                  </a>
                </div>
              </div>
              <div className='mb-2'>
                <strong>United Kingdom:</strong>
                <div>
                  Phone/WhatsApp:{" "}
                  <a href='tel:+44-234-567-890' className='text-blue-600'>
                    +44-234-567-890
                  </a>
                </div>
              </div>
              <div>
                <strong>India:</strong>
                <div>
                  Phone/WhatsApp:{" "}
                  <a href='tel:+91-234-567-890' className='text-blue-600'>
                    +91-234-567-890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>
              CLIENT INFORMATION QUESTIONNAIRE
            </h2>
            <h3 className='text-md font-semibold mb-1'>
              INSTRUCTIONS - PLEASE READ CAREFULLY
            </h3>
            <p className='text-sm text-gray-700 mb-2'>
              The following is a web-based questionnaire designed to collect
              information relevant to your migration matter based on your
              individual circumstances. To answer a question, simply click or
              type your response in the relevant input field. Additional
              questions may appear or disappear based on your answers.
            </p>
            <ul className='list-disc list-inside text-sm text-gray-700 mb-4'>
              <li>
                Provide all relevant and accurate information for each question.
              </li>
              <li>
                Ensure spelling is correct, and numbers and dates are properly
                formatted.
              </li>
              <li>
                Click the &quot;Submit&quot; button at the end of the form to
                complete your submission.
              </li>
            </ul>
            <p className='text-sm text-gray-700 mb-2'>Please DO NOT:</p>
            <ul className='list-disc list-inside text-sm text-gray-700'>
              <li>Leave any fields blank unless explicitly optional.</li>
              <li>
                Use placeholders like &quot;Ditto&quot; or &quot;As Above&quot;
                in your responses.
              </li>
              <li>
                Print out this form and handwrite your responses. This form is
                designed for digital completion only.
              </li>
            </ul>
          </div>

          {/* Form Section */}
          <h1 className='text-2xl font-semibold mb-4'>
            Australian Visa Application Form
          </h1>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {data.map((section, sectionIndex) => (
              <div key={sectionIndex} className='mb-6'>
                <h2 className='text-lg font-semibold mb-2'>
                  {section.title || "Untitled Section"}
                </h2>
                {(section.questions || []).map((question, questionIndex) => (
                  <div key={questionIndex} className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      {question.question || "Untitled Question"}
                    </label>
                    {question.field_type === "input (text)" && (
                      <input
                        type='text'
                        name={
                          question.question ||
                          `question-${sectionIndex}-${questionIndex}`
                        }
                        onChange={handleChange}
                        className='block w-full border-b-2 border-gray-900 focus:border-blue-500 outline-none sm:text-sm'
                      />
                    )}
                    {question.field_type === "input (date)" && (
                      <input
                        type='date'
                        name={
                          question.question ||
                          `question-${sectionIndex}-${questionIndex}`
                        }
                        onChange={handleChange}
                        className='block w-full border-b-2 border-gray-900 focus:border-blue-500 outline-none sm:text-sm'
                      />
                    )}
                    {question.field_type === "input (radio)" && (
                      <div className='flex space-x-4'>
                        {(question.options || []).map((option, optionIndex) => (
                          <label
                            key={optionIndex}
                            className='flex items-center'
                          >
                            <input
                              type='radio'
                              name={
                                question.question ||
                                `question-${sectionIndex}-${questionIndex}`
                              }
                              value={option}
                              onChange={handleChange}
                              className='mr-2'
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                    {question.field_type === "select" && (
                      <select
                        name={
                          question.question ||
                          `question-${sectionIndex}-${questionIndex}`
                        }
                        onChange={handleChange}
                        className='block w-full border-b-2 border-gray-900 focus:border-blue-500 outline-none sm:text-sm'
                      >
                        <option value=''>Select</option>
                        {(question.options || []).map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}
              </div>
            ))}
            <div>
              <button
                type='submit'
                className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
