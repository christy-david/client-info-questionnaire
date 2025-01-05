import Form from "./Form"
import data from "./data/questionnaire.json"

function App() {
  return (
    <>
      <section className="font-dm_sans">
        <Form data={data} />
      </section>
    </>
  )
}

export default App


