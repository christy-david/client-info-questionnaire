import AliasForm from "./components/AliasForm"
import ChineseCodeForm from "./components/ChineseCodeForm"
import DescentForm from './components/DescentForm'

const PersonalParticulars = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">
        Other Personal Particulars
      </h3>

      <AliasForm />
      <ChineseCodeForm/>
      <DescentForm/>
    </div>
  )
}

export default PersonalParticulars
