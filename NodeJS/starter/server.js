const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3010;

app.use(bodyParser.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define a route
app.get('/muho', (req, res) => {
    res.send('Hello Muhammed, from World!');
});

// Define a route
app.get('/muhojson', (req, res) => {
    res.json({"Name":"Muhammed"});
});

// Define a route
app.post('/apojson', (req, res) => {
    res.json({"Name":"Abdullah"});
});

app.post('/printbody', (req, res) => {
    let body = req.body;
    res.json(body);
});

app.post('/printparam/:id', (req, res) => {
    let body = req.params;
    res.json(body);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });