import './form.css'
import {useState} from 'react'

const Form = () => {
    const [employeeData, setEmpData] = useState({
        firstName: '',
        lastName : '',
        email : '',
        position: '',
        image : '',
        address: '',
    })

    const handleChage = (e) => {
        const {name, value}  = e.target // trigger the event from DOM
        setEmpData((prevData) => ({...prevData, [name]: value})) // update the name from input field
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(employeeData)
        setEmpData({
            firstName: '',
            lastName : '',
            image : '',
            email: '',
            position : '',
            address: '',
        })
    }
    return (
    <>
        <div className = "form">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='First Name'
                    type = "text" 
                    name = "firstName" 
                    value = {employeeData.firstName} 
                    onChange={handleChage} 
                /> 

                <input 
                    placeholder='Last Name'
                    type = "text" 
                    name = "lastName" 
                    value = {employeeData.lastName} 
                    onChange={handleChage} 
                /> 
             
                <input 
                    placeholder='Email'
                    type = "email" 
                    name = "email" 
                    value = {employeeData.email} 
                    onChange={handleChage} 
                /> 


                <input 
                    placeholder='Position'
                    type = "text" 
                    name = "position" 
                    value = {employeeData.position} 
                    onChange={handleChage} 
                /> 

                <input 
                    placeholder='Address'
                    type = "text" 
                    name = "address" 
                    value = {employeeData.address} 
                    onChange={handleChage} 
                /> 

                <div className='profile-photo'>
                    <input style = {{display:"none"}}type='file' id="file"/>
                    <span class="material-symbols-outlined">account_circle</span>
                    <label htmlFor='file'>Choose your profile picture</label>
                </div>
                
                <div className='button'>
                    <button type = "submit" >Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Form