import React from "react";
import { Link } from "react-router-dom";
import "../EmployeeForm.css";

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <li key={index}>
              <Link to={`/employees/${index}`}>
                {employee.name} - {employee.title}
              </Link>
            </li>
          ))
        ) : (
          <p>No employees found. Add some employees!</p>
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
