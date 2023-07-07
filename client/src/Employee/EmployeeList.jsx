import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({kpis, setKpis}) => {
    const employees = [
        { id: 1, name: 'John Doe', position: 'Sales Executive', kpiData: [100, 85, 92] },
        { id: 2, name: 'Reshav', position: 'Marketing Specialist', kpiData: [75, 90, 80] },
        { id: 2, name: 'Pragyan', position: 'Manager', kpiData: [75, 90, 80] },
        { id: 2, name: 'Suyog', position: 'HR', kpiData: [75, 90, 80] },
        { id: 2, name: 'Aarjan', position: 'Lead Sales', kpiData: [75, 90, 80] },
      ];

    const handleKPIChange = (event, index) => {
        const newKpis = [...kpis] 
        newKpis[index] = event.target.value;
        setKpis(newKpis);
    }
      
  return (
    <>
        {employees.map((emp, i) =>(
            <EmployeeCard key = {i} emp = {emp} kpis={kpis} handleKPIChange = {handleKPIChange}/>
        ))}
    </>
  )
}

export default EmployeeList