const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    console.log(' World!');
    res.status(200).render('index', { title: 'Hello World!' });

}); 