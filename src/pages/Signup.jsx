import React, { useState } from 'react';
<<<<<<< HEAD
import '../css/home.css'

export default function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="container">
                <div className="text-1">Sign Up</div>
                <div className='inner-container'>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username...'/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...'/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Re-enter Password...'/>
                    <button className='orangeButton'>Sign Up</button>
                </div>
                
                <div className="text-1">MosaicMind V.1</div>
            </div>
        </>
    );
}
=======
import axios from 'axios'; // Correct import statement
import { useNavigate } from 'react-router-dom'
import '../css/home.css';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('https://mosaicmind-web.onrender.com/register', { email: username, password });
            alert('User created successfully');
            setTimeout(() => {
                navigate("/"); // Navigate to home page after 1 second
            }, 1000);
        } catch (error) {
            alert(error.response?.data?.error || 'An error occurred during sign up');
        }
    };

    return (
        <div className="container">
            <div className="text-1">Sign Up</div>
            <div className='inner-container'>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username...' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Re-enter Password...' />
                <button className='orangeButton' onClick={handleSignUp}>Sign Up</button>
            </div>
            <div className="text-1">MosaicMind V.1</div>
        </div>
    );
}
>>>>>>> be_tugay
