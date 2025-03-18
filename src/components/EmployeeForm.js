import React, { useState, useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import '../EmployeeForm.css';

const EmployeeForm = () => {
    const { employees, setEmployees } = useContext(EmployeeContext);
    const [employee, setEmployee] = useState({ name: '', email: '', title: '', department: '' });

    const handleChange = (event) => {
        setEmployee({ ...employee, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (employee.name && employee.email && employee.title && employee.department) {
            const updatedEmployees = [...employees, employee]; // Add new employee
            setEmployees(updatedEmployees); // Update global state
            setEmployee({ name: '', email: '', title: '', department: '' }); // Reset form
        }
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit}>
            <label>Name:<input type="text" name="name" value={employee.name} onChange={handleChange} required /></label>
            <label>Email:<input type="email" name="email" value={employee.email} onChange={handleChange} required /></label>
            <label>Job Title:<input type="text" name="title" value={employee.title} onChange={handleChange} required /></label>
            <label>Department:<input type="text" name="department" value={employee.department} onChange={handleChange} required /></label>
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
