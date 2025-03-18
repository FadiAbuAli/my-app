import React, { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import '../EmployeeForm.css';

const EmployeeList = () => {
    const { employees, setEmployees } = useContext(EmployeeContext);

    // Function to delete an employee
    const deleteEmployee = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
    };

    return (
        <div className="employee-list">
            <h2>Employee List</h2>
            {employees.length > 0 ? (
                <ul>
                    {employees.map((employee, index) => (
                        <li key={index}>
                            {employee.name} - {employee.title}
                            <button onClick={() => deleteEmployee(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No employees added yet.</p>
            )}
        </div>
    );
};

export default EmployeeList;
