require('dotenv').config();
const express = require('express');
const axios = require('./controller/lib/axios');
const firebase = require('./controller/lib/firebase');
const helper = require('./controller/lib/helper');


const app = express();
const port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.use(express.static('public'));

// Initialize Firebase
firebase.initializeFirebaseApp();

// Middleware to enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Update with frontend URL
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
