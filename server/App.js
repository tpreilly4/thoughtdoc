const express = require('express');
const db = require('./endpoints');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello from /server!'));

app.get('/thoughts', db.getThoughts);

app.get('/thoughts/:id', db.getThoughtById);

app.post('/thoughts', db.createThought);

app.delete('/thoughts/:id', db.deleteThought);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Now listening on port ${port}!`))