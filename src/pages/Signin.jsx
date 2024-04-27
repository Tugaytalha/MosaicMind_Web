import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'

export default function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        if (username === 'ceng' && password === '123') {
            alert('Successfully signed in!');
            navigate('/machines', { state: { username } });
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <>
            <div className="container">
                <div className="text-1">Sign In</div>
                <div className='inner-container'>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username...'/>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...'/>
                    <button className='orangeButton' onClick={handleSignIn}>Sign In</button>
                </div>
                
                <div className="text-1">MosaicMind V.1</div>
            </div>
        </>
    );
}
