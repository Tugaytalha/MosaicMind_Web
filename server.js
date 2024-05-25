require('dotenv').config();
const express = require('express');
const axios = require('./controller/lib/axios');
const firebase = require('./controller/lib/firebase');
const helper = require('./controller/lib/helper');


const app = express();
const port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());

// Initialize Firebase
firebase.initializeFirebaseApp();

// Middleware to enable CORS
app.use((req, res, next) => {
    // Allow for all origins
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Graceful shutdown
process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    
    process.exit(1);
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    console.log(' World!');
    res.status(200).render('index', { title: 'Hello World!' });

}); 

app.get('/get-counts', async (req, res) => {
    try {
        const raspberryCounts = await firebase.getRaspberryCounts();
        console.log('Raspberry counts:', raspberryCounts);
        res.status(200).json(raspberryCounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const userId = await firebase.registerUser(email, password);
        res.status(200).json({ userId });
    } catch (error) {        
        if (error.message === 'Email is already in use') {
            return res.status(400).json({ error: 'Email is already in use' });
        } else if (error.code === 'Password is too weak') {
            return res.status(400).json({ error: 'Password is too weak' });
        } else if (error.code === 'Invalid email') {
            return res.status(400).json({ error: 'Invalid email' });
        } else if (error.code === 'Email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.') {
            return res.status(400).json({ error: 'Email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.' });
        } else if (error.code === 'Invalid credential') {
            return res.status(400).json({ error: 'Invalid credential' });
        } else if (error.code === 'Network request failed') {
            return res.status(400).json({ error: 'Network request failed' });
        } else if (error.code === 'Too many requests') {
            return res.status(400).json({ error: 'Too many requests' });
        } 
        else {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const userId = await firebase.loginUser(email, password);
        res.status(200).json({ userId });
    } catch (error) {
        if (error.message === 'Incorrect email or password') {
            return res.status(400).json({ error: 'Incorrect email or password' });
        } else {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});
