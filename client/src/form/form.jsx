import {useState} from 'react'

const Form = () => {
    const [employeeData, setEmpData] = useState({
        firstName: '',
        lastName : '',
        email : '',
        position: '',
        image : '',
    })

    const handleChage = (e) => {
        const {name, value}  = e.target // trigger the event from DOM
        setEmpData((pervData) => ({...pervData, [name]: value})) // update the name from input field
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(employeeData)
        setEmpData({
            firstName: '',
            lastName : '',
            email : '',
            position: '',
            image : '',
        })
    }
    return (
    <>
        <div className = "form">
        <form onSubmit={handleSubmit}>
            First Name: 
            <input 
                type = "text" 
                name = "firstName" 
                value = {employeeData.firstName} 
                onChange={handleChage} 
            /> 

            Last Name: 
            <input 
                type = "text" 
                name = "lastName" 
                value = {employeeData.firstName} 
                onChange={handleChage} 
            /> 
            <button type = "submit" >Submit</button>
        </form>
        </div>
    </>
  )
}

export default Form