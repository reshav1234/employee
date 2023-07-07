import React from 'react';

const EmployeeCard = ({ emp, kpis, handleKPIChange }) => {
  const { id, name, position, kpiData } = emp;

  return (
    <div>
      <h3>{name}</h3>
      <p>Position: {position}</p>
      {kpis.map((kpi, index) => (
        <div key={index}>
          <label htmlFor={`kpi-${id}-${index}`}>{kpi}: </label>
          <input
            type="number"
            id={`kpi-${id}-${index}`}
            value={kpiData[index]}
            onChange={(event) => handleKPIChange(event, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default EmployeeCard;
