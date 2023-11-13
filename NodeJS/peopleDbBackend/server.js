const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3010;

app.use(bodyParser.json());

let people = [];

app.post('/printbody', (req, res) => {
    let body = req.body;
    res.json(body);
});

app.post('/printparam/:id', (req, res) => {
    let body = req.params;
    res.json(body);
});

app.get('/getpeople', (req, res) => {
    res.json(people);
});

app.get('/getpeople/:id', (req, res) => {
    let body = req.params;

    body.id < people.length ? res.json(people[body.id]) : res.json("Empty");

   
});

app.post('/addpeople', (req, res) => {//{person:{"name":"Ali","age":25}}
    let person = req.body.person;
    people.push(person)  
    res.send("Added successufully");
});

app.post('/deletepeople', (req, res) => {// body will have id, delte that index from the array {"id":15}
    let body = req.body;
    body.id < people.length ? res.json(people.splice(body.id, 1)) : res.json("Error");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });