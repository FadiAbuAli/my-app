import React, { useState } from "react";
import '../EmployeeForm.css';

function EmployeeForm({ onAddEmployee }) {
    const [employee, setEmployee] = useState({ name: "", email: "", title: "", department: "" });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (employee.name && employee.email && employee.title && employee.department) {
            onAddEmployee(employee); 
            setEmployee({ name: "", email: "", title: "", department: "" }); // Reset form
        }
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={employee.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={employee.email} onChange={handleChange} required />

            <label>Job Title:</label>
            <input type="text" name="title" value={employee.title} onChange={handleChange} required />

            <label>Department:</label>
            <input type="text" name="department" value={employee.department} onChange={handleChange} required />

            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;
