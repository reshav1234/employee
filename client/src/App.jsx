import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Form from "./form/form"
import EmployeePerformance from './Employee/EmployeePerformance'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path = '/form' element = {<Form />} />
          <Route path = '/employee' element = {<EmployeePerformance />} />
        </Routes>
      </Router>
    </>
  )
}

export default App