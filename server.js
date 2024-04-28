require('dotenv').config();
const express = require('express');
const { initializeApp } = require('firebase/app');

const app = express();
const port = process.env.PORT || 3000;


app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    console.log(' World!');
    res.status(200).render('index', { title: 'Hello World!' });

}); 
