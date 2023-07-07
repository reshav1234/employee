import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({kpis, setKpis}) => {
    const employees = [
        { id: 1, name: 'John Doe', position: 'Sales Executive', kpiData: [100, 85, 92] },
        { id: 2, name: 'Reshav', position: 'Marketing Specialist', kpiData: [75, 90, 80] },
        { id: 3, name: 'Pragyan', position: 'Manager', kpiData: [75, 90, 80] },
        { id: 4, name: 'Suyog', position: 'HR', kpiData: [75, 90, 80] },
        { id: 5, name: 'Aarjan', position: 'Lead Sales', kpiData: [75, 90, 80] },
      ];
  return (
    <>
        {employees.map((emp) =>(
            <EmployeeCard key={emp.id} emp = {emp} kpis={kpis}/>
        ))}
    </>
  )
}

export default EmployeeList