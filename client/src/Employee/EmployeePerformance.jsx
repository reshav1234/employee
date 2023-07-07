import {useState} from 'react'

import EmployeeList from './EmployeeList';

const EmployeePerformance = () => {
    
    const [kpis, setKpis] = useState(['Sales', 'Customer Satisfaction', 'Productivity']);
    
  return (
    <div>
      <h1>Employee Performance App</h1>
      <EmployeeList kpis={kpis} setKpis={setKpis} />
    </div>
  )
}

export default EmployeePerformance