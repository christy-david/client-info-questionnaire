import { useSelector } from "react-redux"
import MainApplicantIntentions from "./components/MainApplicantIntentions"
import MainApplicantDetails from "./components/MainApplicantDetails"
import CitizenshipForm from "./components/CitizenshipForm"
import ClientFileForm from "./components/ClientFileForm"
import QuestionnaireCompleterForm from "./components/QuestionnaireCompleterForm"
import PersonalParticulars from "./components/PersonalParticulars"

const App = () => {
  const state = useSelector((state) => state)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Final Form State:", state)
    alert("Form submitted successfully!")
  }

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-4xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform skew-y-0 -rotate-3 rounded-lg hidden xl:block'></div>
        <div className='relative px-4 py-12 bg-white shadow-lg rounded-lg sm:p-10'>
          {/* Company Logo */}
          <div className='text-center mb-12'>
            <img
              src='/logo.png'
              alt='Dew Drops Career Solutions'
              className='mx-auto h-32 w-auto mb-12'
            />
            {/* <h1 className='text-4xl font-semibold text-gray-800 mb-6'>
              Dew Drops Career Solutions
            </h1> */}

            <div className='space-y-4 mb-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Email Section */}
                <div className='bg-white p-4 shadow-lg rounded-lg'>
                  <div className='font-semibold text-lg text-gray-800 mb-2'>
                    Email
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-gray-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                        />
                      </svg>

                      <span className='sr-only'>Mail</span>
                    </span>
                    <a
                      href='mailto:info@dewdropscareer.com'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      info@dewdropscareer.com
                    </a>
                  </div>
                </div>

                {/* Australia Section */}
                <div className='bg-white p-4 shadow-lg rounded-lg'>
                  <div className='font-semibold text-lg text-gray-800 mb-2'>
                    Australia
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-gray-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                        />
                      </svg>
                      <span className='sr-only'>Phone/ WhatsApp</span>
                    </span>
                    <a
                      href='tel:+61-234-567-890'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      +61 472 798 550
                    </a>
                  </div>
                </div>

                {/* United Kingdom Section */}
                <div className='bg-white p-4 shadow-lg rounded-lg'>
                  <div className='font-semibold text-lg text-gray-800 mb-2'>
                    UK
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-gray-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                        />
                      </svg>
                      <span className='sr-only'>Phone/ WhatsApp</span>
                    </span>
                    <a
                      href='tel:+44-234-567-890'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      +44 7306890005
                    </a>
                  </div>
                </div>

                {/* India Section */}
                <div className='bg-white p-4 shadow-lg rounded-lg'>
                  <div className='font-semibold text-lg text-gray-800 mb-2'>
                    India
                  </div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-gray-600'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                        />
                      </svg>
                      <span className='sr-only'>Phone/ WhatsApp</span>
                    </span>
                    <a
                      href='tel:+91-234-567-890'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      +91 98770 02288
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className='mb-12'>
            <h1 className='text-2xl font-semibold mb-4'>
              Australian Visa Application (CLIENT INFORMATION QUESTIONNAIRE)
            </h1>
            {/* <h2 className='text-lg font-semibold mb-2'>
              
            </h2> */}
            <h3 className='text-md font-semibold mb-1'>
              Instructions (PLEASE READ CAREFULLY)
            </h3>
            <p className='text-gray-700 mb-2'>
              The following is a web-based questionnaire designed to collect
              information relevant to your migration matter based on your
              individual circumstances. To answer a question, simply click or
              type your response in the relevant input field. Additional
              questions may appear or disappear based on your answers.
            </p>
            <ul className='list-disc list-inside text-gray-700 mb-4'>
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
            <p className='text-gray-700 mb-2'>Please DO NOT:</p>
            <ul className='list-disc list-inside text-gray-700'>
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

          {/* Form component */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <ClientFileForm />
            <QuestionnaireCompleterForm />
            <MainApplicantIntentions />
            <MainApplicantDetails />
            <PersonalParticulars />
            <CitizenshipForm />
            <button
              type='submit'
              className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none uppercase font-bold'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
