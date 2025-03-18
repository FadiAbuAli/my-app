import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext"; // Import EmployeeProvider
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import logo from "./logo.svg"; // Re-import the logo
import "./App.css";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <EmployeeProvider> {/* Wrap everything inside EmployeeProvider */}
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> {/* Logo restored */}

            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/employee-form">Employee Form</Link></li>
                <li><Link to="/employee-list">Employee List</Link></li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/employee-form" element={<EmployeeForm />} />
              <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
          </header>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
