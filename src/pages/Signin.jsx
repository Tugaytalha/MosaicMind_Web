import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/home.css';

export default function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://mosaicmind-web.onrender.com/login', { email: username, password });
            alert('Successfully signed in!');
            navigate('/machines', { state: { username } });
        } catch (error) {
            alert(error.response?.data?.error || 'An error occurred during sign in');
        }
    };

    return (
        <div className="container">
            <div className="text-1">Sign In</div>
            <div className='inner-container'>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username...' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' />
                <button className='orangeButton' onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="text-1">MosaicMind V.1</div>
        </div>
    );
}
