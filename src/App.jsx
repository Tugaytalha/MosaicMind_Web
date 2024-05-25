import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Machines from './pages/Machines';
import Navbar from './pages/navbar'; // Ensure correct case for the import
import Signup from './pages/Signup';
import Signin from './pages/Signin';

// Component to conditionally render Navbar
const Layout = ({ children }) => {
    const location = useLocation();
    
    // Check if the current path is the home page
    const showNavbar = (location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/signin');

    return (
        <div>
            {showNavbar && <Navbar/>}
            {children}                 
        </div>
    );
};

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/machines" element={<Layout><Machines /></Layout>} />
                    <Route path="/signup" element={<Layout><Signup /></Layout>} />
                    <Route path="/signin" element={<Layout><Signin /></Layout>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
