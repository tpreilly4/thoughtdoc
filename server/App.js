const express = require('express');
const mysql = require('mysql');
const store = require('./store');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello from /server!'))

app.post('/add', (req, res) => {
  store
    .createThought({
      thought: req.body.thought,
    })
    .then(() => res.sendStatus(200))
})

app.listen(port, () => console.log(`Now listening on port ${port}!`))