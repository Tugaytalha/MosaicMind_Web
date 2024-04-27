import React, { useState } from 'react';
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
