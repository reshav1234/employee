import { useState } from 'react';

import './Employee.css'

const EmployeeCard = ({ emp, kpis }) => {
  const { id, name, position, kpiData } = emp;
  console.log(id)
  const calculateOverallPerformance = () => {
    const overallPerformance =
      ((kpiData[0] / 100) * 33.33) +
      ((kpiData[1] / 100) * 33.33) +
      ((kpiData[2] / 100) * 33.33)+
      ((kpiData[3] / 100) * 33.33);

    return overallPerformance.toFixed(2);
  };

  return (
    <div className='employee-card'>
      <h3>{name}</h3>
      <p>Position: {position}</p>
      <p>KPIs:</p>
      <ul>
        {kpis.map((kpi, index) => (
          <li key={index}>
            {kpi}: {kpiData[index]}
          </li>
        ))}
      </ul>
      <p>
        Overall Performance: <span>{calculateOverallPerformance()}%</span>
      </p>
    </div>
  );
};

const EmployeeList = ({ kpis }) => {
  const [employees, setEmployees] = useState([]);

  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    position: '',
    kpiData: [0, 0, 0, 0],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleKpiInputChange = (event, index) => {
    const { value } = event.target;
    setNewEmployee((prevEmployee) => {
      const kpiData = [...prevEmployee.kpiData];
      kpiData[index] = value;
      return {
        ...prevEmployee,
        kpiData,
      };
    });
  };

  const addEmployee = () => {
    fetch('http://localhost:8000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Employee added successfully:', data);
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
        setNewEmployee({
          id: '',
          name: '',
          position: '',
          kpiData: [0, 0, 0, 0],
        });
      })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });
  };
  

  return (
    <>
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} emp={emp} kpis={kpis} />
      ))}
      <div>
        <h4>Add Employee</h4>
        <div>
          <label htmlFor="idInput">ID:</label>
          <input
            type="text"
            id="idInput"
            name="id"
            value={newEmployee.id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="nameInput">Name:</label>
          <input
            type="text"
            id="nameInput"
            name="name"
            value={newEmployee.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="positionInput">Position:</label>
          <input
            type="text"
            id="positionInput"
            name="position"
            value={newEmployee.position}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>KPIs:</p>
          {kpis.map((kpi, index) => (
            <div key={index}>
              <label htmlFor={`kpi-${index}`}>{kpi}:</label>
              <input
                type="number"
                id={`kpi-${index}`}
                name={`kpi-${index}`}
                value={newEmployee.kpiData[index]}
                onChange={(event) => handleKpiInputChange(event, index)}
              />
            </div>
          ))}
        </div>
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </>
  );
};

const EmployeePerformance = () => {
  const [kpis] = useState(['Sales', 'Customer Satisfaction', 'Productivity', 'Gross Margin']);

  return (
    <div>
      <h1>Employee Performance App</h1>
      <EmployeeList kpis={kpis} />
    </div>
  );
};

export default EmployeePerformance;
