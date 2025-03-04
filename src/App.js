import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function App() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = localStorage.getItem("employees");
        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees));
        }
    }, []);

    const addEmployee = (newEmployee) => {
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);

        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>

                    {/* Navigation Links */}
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/employee-form">Employee Form</Link></li>
                        </ul>
                    </nav>

                    {/* Define Routes */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/employee-form" element={<EmployeeForm onAddEmployee={addEmployee} />} />
                    </Routes>

                    <h2>Employee List</h2>
                    <ul>
                        {employees.map((employee, index) => (
                            <li key={index}>
                                {employee.name} - {employee.email} - {employee.title} - {employee.department}
                            </li>
                        ))}
                    </ul>
                </header>
            </div>
        </Router>
    );
}

export default App;
