const Pool = require('pg').Pool;

// This is my postgres user. In the current state of the project, you will have to set up your own api database for this to work 
const pool = new Pool({
  user: 'tom',
  host: 'localhost',
  database: 'api',
  password: 'sandwich',
  port: 5432,
})

// GET all
const getThoughts = (req, res) => {
  pool.query('SELECT * FROM thoughts ORDER BY id ASC', (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

//GET by id
const getThoughtById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('SELECT * FROM thoughts WHERE id = $1', [id], (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

//POST
const createThought = (req, res) => {
  const { content, mood } = req.body;
  console.log(content);

  pool.query(`INSERT INTO thoughts (content, mood) VALUES ($1, $2)`, [content, mood], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(201).json(`Thought added with ID: ${results.id}`);
  })
};

//DELETE
const deleteThought = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM thoughts WHERE id = $1', [id], (err, results) => {
    if (err) {
      throw error
    }
    res.status(200).send(`Thought deleted with ID: ${id}`)
  })
}

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  deleteThought,
}