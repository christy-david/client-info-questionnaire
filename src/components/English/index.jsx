import LanguageProficiencyForm from "./components/LanguageProficiencyForm"
import EnglishTestForm from "./components/EnglishTestForm"

const English = () => {
  return (
    <div className='space-y-6'>
      <h3 className='text-lg font-semibold'>Language Skills</h3>
      <EnglishTestForm />
      <LanguageProficiencyForm />
    </div>
  )
}

export default English
