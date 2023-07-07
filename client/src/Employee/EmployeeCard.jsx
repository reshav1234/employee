

const EmployeeCard = ({ emp, kpis }) => {
  const { id, name, position, kpiData } = emp;

  const calculateOverallPerformance = () => {
    const overallPerformance =
      ((kpiData[0] / 100) * 33.33) +
      ((kpiData[1] / 100) * 33.33) +
      ((kpiData[2] / 100) * 33.33);

    return overallPerformance.toFixed(2); 
  };

  return (
    <div>
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
        Overall Performance: <span>{calculateOverallPerformance()} %</span>
      </p>
    </div>
  );
};

export default EmployeeCard;
