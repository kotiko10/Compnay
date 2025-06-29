import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './AddEmployee.css'

function AddEmployee() {
  const [employee, setEmployee] = useState({ firstName: '', lastName: '', emailId: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:8080/CompanyApi/v1/employees', employee)
    navigate('/')
  }

  return (
    <div className="form-container">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="emailId" placeholder="Email" onChange={handleChange} required />
        <button type="submit" className="btn submit-btn">Add</button>
      </form>
    </div>
  )
}

export default AddEmployee
