import React, { createContext, useState, useEffect } from "react";

// Create Employee Context
export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    // Load employees from local storage
    const [employees, setEmployees] = useState(() => {
        const storedEmployees = localStorage.getItem("employees");
        return storedEmployees ? JSON.parse(storedEmployees) : [];
    });

    // Save employees to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    );
};
