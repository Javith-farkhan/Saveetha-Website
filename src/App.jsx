import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Departments from './Departments';
import Events from './Events'
import './App.css'; // Import the CSS file

const App = () => (
    <Router>
        <header>
            <nav>
                
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/departments">Departments</Link>
                    <Link to="/events">Events</Link>
                
            </nav>
        </header>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </div>
    </Router>
);

export default App;